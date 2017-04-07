<?php

namespace Api\Controller;

use Framework\App;
use Symfony\Component\HttpFoundation\Request;
use Api\Model\ElementTable;
use Symfony\Component\HttpFoundation\Response;

class ElementsController extends App
{
    public function getElementAction()
    {
        $em = $this -> getEntityManager();
        $elements = new ElementTable($em);

        $data = $elements ->getElements();

//        echo '<pre>';
//        print_r($data);
//        die;

//        return $this -> render('Api/View/element.html.twig', array(
//            'elements' => $data
//        ));
        
        return $this->renderAjax($data);
    }
}