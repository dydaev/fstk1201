<?php
define('DR', DIRECTORY_SEPARATOR);
define('ROOT_PATH', realpath(__DIR__.DR.'..') . DR);
//application path
define('APP_PATH', realpath(ROOT_PATH.'application') . DR);
//config path in application
define('CONFIG_PATH', realpath(APP_PATH.'config') . DR);

require_once ROOT_PATH . 'library' . DR. 'autoload.php';

print_r(\Core\Config::load(), true);
