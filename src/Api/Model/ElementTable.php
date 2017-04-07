<?php

namespace Api\Model;


class ElementTable extends BaseTable
{
    public function getElements()
    {
        $q = $this -> qb -> select('elem.idelement')
            -> from('Api\Model\Element', 'elem');
        
        return $q -> getQuery()->getArrayResult();
    }
    
}