<?php

use Symfony\Component\Routing;
use Framework\Router;

$routes = new Routing\RouteCollection();
$router = new Router($routes);

$router->addGet('elementsItem', '/api/elements', array(
    '_controller' => 'Api\\Controller\\ElementsController::getElementAction'
));

$router->addGet('mesheleItem', '/api/meshelement/{id}', array(
    'id' => 0,
    '_controller' => 'Api\\Controller\\MesheleController::getMesheleAction'
));

$router->addGet('momentItem', '/api/moment/{id}', array(
    'id' => 0,
    '_controller' => 'Api\\Controller\\MomentController::getMomentAction'
));

return $router -> getRouteCollection();