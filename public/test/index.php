
<?php

ini_set("dispaly_error",1);
define('__ROOT__',dirname(__DIR__));
define('__PUBLIC__',__DIR__);
define('__APP__',__ROOT__.'/app');
define('__CONFIG__',__ROOT__.'/config');
define('__LIB__',__ROOT__.'/'.'lib');
define('__VENDOR__',__ROOT__.'/'.'vendor');
define('__HOST__',$_SERVER['HTTP_HOST']);
define('system_debug',1);

date_default_timezone_set('PRC');
if(isset($_GET['info'])){
    phpinfo();
}

require "../lib/function.php";
require "../config/autoload.php";
 AutoLoad::setDir('Controller','lib')  ;
require "../config/routes.php";





