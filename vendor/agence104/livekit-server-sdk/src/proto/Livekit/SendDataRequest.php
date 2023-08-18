<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: livekit_room.proto

namespace Livekit;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>livekit.SendDataRequest</code>
 */
class SendDataRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string room = 1;</code>
     */
    protected $room = '';
    /**
     * Generated from protobuf field <code>bytes data = 2;</code>
     */
    protected $data = '';
    /**
     * Generated from protobuf field <code>.livekit.DataPacket.Kind kind = 3;</code>
     */
    protected $kind = 0;
    /**
     * Generated from protobuf field <code>repeated string destination_sids = 4;</code>
     */
    private $destination_sids;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $room
     *     @type string $data
     *     @type int $kind
     *     @type string[]|\Google\Protobuf\Internal\RepeatedField $destination_sids
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\LivekitRoom::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string room = 1;</code>
     * @return string
     */
    public function getRoom()
    {
        return $this->room;
    }

    /**
     * Generated from protobuf field <code>string room = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setRoom($var)
    {
        GPBUtil::checkString($var, True);
        $this->room = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bytes data = 2;</code>
     * @return string
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * Generated from protobuf field <code>bytes data = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setData($var)
    {
        GPBUtil::checkString($var, False);
        $this->data = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.livekit.DataPacket.Kind kind = 3;</code>
     * @return int
     */
    public function getKind()
    {
        return $this->kind;
    }

    /**
     * Generated from protobuf field <code>.livekit.DataPacket.Kind kind = 3;</code>
     * @param int $var
     * @return $this
     */
    public function setKind($var)
    {
        GPBUtil::checkEnum($var, \Livekit\DataPacket\Kind::class);
        $this->kind = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated string destination_sids = 4;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getDestinationSids()
    {
        return $this->destination_sids;
    }

    /**
     * Generated from protobuf field <code>repeated string destination_sids = 4;</code>
     * @param string[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setDestinationSids($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->destination_sids = $arr;

        return $this;
    }

}

