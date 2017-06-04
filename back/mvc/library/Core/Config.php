<?php

namespace Core;

class Config{

    /**
     * @var self
     */
    private static $_instance;
    private static $_isInit = false;
    private $configs = Array();

    private function __construct()
    {
        $this->loadConfig();
    }
    private function __clone()
    {
    }

    public static function getInstatnce()
    {
        if (!salf::$_instance instanceof Config) {
            self::$_instance = new self();
            self::$_isInit = true;
        }
        return self::$_instance;
    }

    /**
     * @return mixed
     */
    public static function load()
    {
        if (!self::$_isInit) {
            self::getInstatnce();
        }
        return self::$_instance->getConfig();
    }

    public function getConfig()
    {
        return $this->configs;
    }

//    load files from config directory
    private function loadConfig()
    {
        if (is_dir(CONFIG_PATH)) {
            $lists = scandir(CONFIG_PATH);
            if (count($lists) > 2) {
                unset($lists[array_search('.', $lists)]);
                unset($lists[array_search('..', $lists)]);

                $fileNames = array_map(function ($fileName){
                    return str_replace('.php', null, $fileName);
                },$lists);

                $contentConfigs = array_map(function ($filename) {
                    return include CONFIG_PATH.$filename;
                }, $lists);
                $this->configs = array_combine($fileNames, $contentConfigs);
            }
        }
    }

}