<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: livekit_models.proto

namespace Livekit;

use UnexpectedValueException;

/**
 * Protobuf type <code>livekit.VideoQuality</code>
 */
class VideoQuality
{
    /**
     * Generated from protobuf enum <code>LOW = 0;</code>
     */
    const LOW = 0;
    /**
     * Generated from protobuf enum <code>MEDIUM = 1;</code>
     */
    const MEDIUM = 1;
    /**
     * Generated from protobuf enum <code>HIGH = 2;</code>
     */
    const HIGH = 2;
    /**
     * Generated from protobuf enum <code>OFF = 3;</code>
     */
    const OFF = 3;

    private static $valueToName = [
        self::LOW => 'LOW',
        self::MEDIUM => 'MEDIUM',
        self::HIGH => 'HIGH',
        self::OFF => 'OFF',
    ];

    public static function name($value)
    {
        if (!isset(self::$valueToName[$value])) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no name defined for value %s', __CLASS__, $value));
        }
        return self::$valueToName[$value];
    }


    public static function value($name)
    {
        $const = __CLASS__ . '::' . strtoupper($name);
        if (!defined($const)) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no value defined for name %s', __CLASS__, $name));
        }
        return constant($const);
    }
}

