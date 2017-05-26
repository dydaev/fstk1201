<?php

return array (
    '[NAME_ROUTER]' => '/product/<action>/<parameter>',
    'default' => [
        'controller' => 'Product',
        'action' => 'index'
    ],
    'params' => [
        'action' =>'(index|view)',
        'param' => '[0-9]+'
    ]
);