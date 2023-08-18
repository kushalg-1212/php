import TextInput from "@/Components/TextInput";
import __ from "@/Functions/Translate";
import { BsChatText } from "react-icons/bs";
import { MdSettingsInputAntenna } from "react-icons/md";
import { FaGrinStars, FaHandSparkles } from "react-icons/fa";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import TipPopup from "./Partials/TipPopup";
import { usePage } from "@inertiajs/inertia-react";
import SecondaryButton from "@/Components/SecondaryButton";
import { Inertia } from "@inertiajs/inertia";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function ChatRoom({ streamer, forceScroll = false }) {
    const [messages, setMessages] = useState([]);
    const [msg, setMsg] = useState("");
    const [isScrolling, setIsScrolling] = useState(false);
    const [chatScrollHeight, setChatScrollHeight] = useState(0);
    const { auth, pusher } = usePage().props;

    // coins sound
    const { coins_sound } = usePage().props;
    const tipSound = new Audio(coins_sound);

    // set ref to chat scroll div
    const chatScroll = useRef();

    // set room name
    const roomName = `room-${streamer.username}`;

    // set chat scrolling position
    const updateScrollPosition = (target) => {
        const totalScroll = target.scrollTop + target.clientHeight;

        if (totalScroll == target.scrollHeight) {
            setIsScrolling(false);
        } else {
            setIsScrolling(true);
        }

        setChatScrollHeight(totalScroll);
    };

    // scroll the chat
    const scrollTheChat = () => {
        if (!isScrolling) {
            const { offsetHeight, scrollHeight, scrollTop } =
                chatScroll.current;
            chatScroll.current?.scrollTo(0, scrollHeight);
        }
    };

    // autoscroll live chat
    useEffect(() => {
        scrollTheChat();
    }, [messages]);

    // livechat
    useEffect(() => {
        // initially load the latest messages for this room
        axios
            .get(route("chat.latestMessages", { roomName }))
            .then((response) => {
                setMessages(response.data);
            })
            .catch((Error) =>
                toast.error(`Loading latest messages: ${Error.message}`)
            );

        window.Echo.channel(roomName).listen(".livechat", (data) => {
            setMessages((messages) => [...messages, data.chat]);

            if (data.chat.tip > 0) {
                tipSound.play();
            }
        });

        if (forceScroll) {
            scrollTheChat();
        }
    }, []);

    // send a message in livechat
    const sendMessage = (e) => {
        e.preventDefault();

        axios
            .post(route("chat.sendMessage", { user: streamer.id }), {
                message: msg,
            })
            .then(() => setMsg(""))
            .catch((Error) => {
                toast.error(Error.response.data?.message);
            });

        scrollTheChat();
    };

    return (
        <div className="flex flex-col w-full lg:w-[400px] h-[270px] sm:h-[360px] lg:h-[536px] bg-white dark:bg-zinc-900 dark:border-zinc-900 ">
            <div
                ref={chatScroll}
                onScroll={(e) => updateScrollPosition(e.currentTarget)}
                className="flex-grow  text-gray-700 text-sm dark:text-white pl-2  relative overflow-scroll"
            >
                <h3 className="font-semibold pt-5 text-lg flex items-center justify-center">
                    <BsChatText className="mr-2" />
                    {__("Live Chat")}
                </h3>
                {messages.map((m) => (
                    <p
                        className={`py-2 ${
                            m.tip > 0 &&
                            "bg-yellow-200 rounded-lg p-2 text-gray-900 my-2"
                        }`}
                        key={`msg-${m.id}`}
                    >
                        {m.user_id === streamer.id && (
                            <span>
                                <MdSettingsInputAntenna
                                    data-tooltip-content={__("Channel Owner")}
                                    data-tooltip-id={`chatmsg-follower-${m.id}`}
                                    className="-mt-0.5 mr-1 inline text-pink-600"
                                />
                            </span>
                        )}
                        {m.isFollower && (
                            <span>
                                <FaHandSparkles
                                    data-tooltip-content={__(
                                        "Channel Follower"
                                    )}
                                    data-tooltip-id={`chatmsg-follower-${m.id}`}
                                    className="mr-1 inline text-cyan-600"
                                />
                            </span>
                        )}
                        {m.isSubscriber && (
                            <span>
                                <FaGrinStars
                                    data-tooltip-content={__(
                                        "Channel Subscriber"
                                    )}
                                    data-tooltip-id={`chatmsg-subscriber-${m.id}`}
                                    className="mr-1 inline text-fuchsia-500"
                                />
                            </span>
                        )}

                        <Tooltip anchorSelect="svg" />

                        <span
                            className={`font-semibold ${
                                m.user_id === streamer.id
                                    ? "text-pink-600"
                                    : "text-indigo-500 dark:text-indigo-400"
                            }`}
                        >
                            {m.user.username}
                            {": "}
                        </span>
                        {m.tip > 0 &&
                            __("Just tipped :tip tokens! ", { tip: m.tip })}
                        <span className="break-all">{m.message}</span>
                    </p>
                ))}
            </div>
            <div className="py-5 px-2 flex items-center">
                <div className="mr-2 flex-grow">
                    {auth.user && (
                        <form onSubmit={sendMessage}>
                            <TextInput
                                name="chat_message"
                                className="w-full"
                                placeholder={__("Enter message & press enter")}
                                value={msg}
                                handleChange={(e) => setMsg(e.target.value)}
                            />
                        </form>
                    )}
                    {!auth.user && (
                        <SecondaryButton
                            className="w-full py-3"
                            onClick={(e) => Inertia.visit(route("login"))}
                        >
                            {__("Login to Chat")}
                        </SecondaryButton>
                    )}
                </div>
                <div>
                    <TipPopup streamer={streamer} />
                </div>
            </div>
        </div>
    );
}
