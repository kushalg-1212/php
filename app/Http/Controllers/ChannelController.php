<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChannelSettingsRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Gate;
use Image;
use Illuminate\Support\Str;

class ChannelController extends Controller
{
    // midleware
    public function __construct()
    {
        // $this->middleware('auth');
    }

    // search channel
    public function search(Request $request)
    {
        $request->validate(['term' => 'required|min:2']);

        return User::isStreamer()
                    ->where('username', 'like', '%' . $request->term . '%')
                    ->where('name', 'like', '%' . $request->term . '%')
                    ->take(6)
                    ->get();
    }

    // live stream
    public function liveStream($user)
    {
        // get the stream user
        $streamUser = User::whereUsername($user)
        ->withCount(['followers', 'subscribers', 'videos'])
        ->firstOrFail();

        $streamUser->increment('popularity');

        // if authenticated user == streamuser
        $isChannelOwner = false;

        if (auth()->check() && $streamUser->username === request()->user()->username) {
            $isChannelOwner = true;
        }

        // check if it follows channel
        $userFollowsChannel = false;
        if (auth()->check() && auth()->user()->isFollowing($streamUser)) {
            $userFollowsChannel = true;
        }

        // check if has subscription
        $userIsSubscribed = false;
        if (auth()->check() && auth()->user()->hasSubscriptionTo($streamUser)) {
            $userIsSubscribed = true;
        }

        // room name
        if (user_meta('streaming_key', true, $streamUser->id)) {
            $roomName = user_meta('streaming_key', true, $streamUser->id);
        } else {
            $roomName = $streamUser->id.'.'. Str::random(16);
            set_user_meta('streaming_key', $roomName, true, $streamUser->id);
        }

        return Inertia::render('Channel/LiveStream', compact('isChannelOwner', 'streamUser', 'userFollowsChannel', 'userIsSubscribed', 'roomName'));
    }

    // start stream
    public function userProfile($user)
    {
        // get the stream user
        $streamUser = User::whereUsername($user)
                    ->withCount(['followers', 'subscribers', 'videos'])
                    ->firstOrFail();

        $streamUser->about = nl2br($streamUser->about);

        // increase popularity
        $streamUser->increment('popularity');

        // get authenticated user
        $user = auth()->user();

        // if authenticated user == streamuser, show start stream
        $isChannelOwner = false;

        if (auth()->check() && $streamUser->username === $user->username) {
            $isChannelOwner = true;
        }

        // check if it follows channel
        $userFollowsChannel = false;
        if (auth()->check() && auth()->user()->isFollowing($streamUser)) {
            $userFollowsChannel = true;
        }

        // check if has subscription
        $userIsSubscribed = false;
        if (auth()->check() && auth()->user()->hasSubscriptionTo($streamUser)) {
            $userIsSubscribed = true;
        }

        // build opengraph tags
        $ogTags = [
            'title' => __(":channelName's channel (:handle)", ['channelName' => $streamUser->name, 'handle' => '@' . $streamUser->username]),
            'url' => route('channel', ['user' => $streamUser->username]),
            'image' => $streamUser->cover_picture
        ];


        return Inertia::render('Channel/User', compact('user', 'isChannelOwner', 'streamUser', 'userFollowsChannel', 'userIsSubscribed', 'ogTags'));
    }

    // channel settings
    public function channelSettings()
    {
        Gate::authorize('channel-settings');

        return Inertia::render('Channel/Settings');
    }

    // update channel settings
    public function updateChannelSettings(ChannelSettingsRequest $request)
    {
        Gate::authorize('channel-settings');

        // user
        $user = $request->user();

        // save details to database
        $user->about = $request->about;
        $user->username = $request->username;
        $user->headline = $request->headline;
        $user->save();

        // save category
        $user->categories()->detach();
        $user->categories()->attach($request->category);

        // save profile picture if needed
        if ($request->hasFile('profilePicture')) {
            $profilePicture = Image::make($request->file('profilePicture'));
            $picturePath = 'profilePics/' . $request->user()->id . '-' . uniqid() . '.' . $request->file('profilePicture')->getClientOriginalExtension();

            $profilePicture->fit(80, 80, function ($constrain) {
                $constrain->upsize();
            })->save(public_path($picturePath), 100);

            $user->profile_picture = $picturePath;
            $user->save();
        }

        // save cover picture if needed
        if ($request->hasFile('coverPicture')) {
            $coverPicture = Image::make($request->file('coverPicture'));
            $picturePath = 'coverPics/' . $request->user()->id . '-' . uniqid() . '.' . $request->file('coverPicture')->getClientOriginalExtension();

            $coverPicture->fit(960, 280, function ($constrain) {
                $constrain->upsize();
            })->save(public_path($picturePath), 100);

            $user->cover_picture = $picturePath;
            $user->save();
        }


        return back()->with('message', __("Profile updated"));
    }

    // followers
    public function followers($user, Request $request)
    {
        Gate::authorize('channel-settings');

        $followers = $request->user()->followers;

        return Inertia::render('Channel/Followers', compact('followers'));
    }

    // tiers
    public function getTiers(User $user)
    {
        return $user->tiers;
    }

    // videos
    public function channelVideos(User $user)
    {
        return $user->videos()->with('streamer')->paginate(9);
    }
}
