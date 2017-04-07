<?php

namespace Api\Model;


class MesheleTable extends BaseTable
{
    public function getMeshElement($id)
    {
        $q = $this -> qb -> select('mesh', 'node', 'node1', 'node2', 'node3', 'elem.idelement', 'moment')
            -> from('Api\Model\Meshele', 'mesh')
            -> leftJoin('mesh.nodesNode', 'node')
            -> leftJoin('mesh.nodesNode1', 'node1')
            -> leftJoin('mesh.nodesNode2', 'node2')
            -> leftJoin('mesh.nodesNode3', 'node3')
            -> leftJoin('mesh.elementelement', 'elem')
            -> leftJoin('mesh.momentmoment', 'moment')
            -> where('elem.idelement = :id')
            -> setParameter('id', $id);

        
        
        return $q -> getQuery() -> getArrayResult();
    }
}