<?php

namespace Api\Controller;

use Framework\App;
use Symfony\Component\HttpFoundation\Request;
use Api\Model\MesheleTable;
use Symfony\Component\HttpFoundation\Response;

class MesheleController extends App
{
    public function getMesheleAction($id)
    {
        $em = $this -> getEntityManager();
        $meshele = new MesheleTable($em);

        $data = $meshele ->getMeshElement($id);

//        echo phpinfo();
//        print_r($data);
//        die;
        
        return $this -> renderAjax($data);
    }
}