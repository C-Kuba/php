<?php

namespace Api\Model;

use Doctrine\ORM\Mapping as ORM;

/**
 * Meshele
 *
 * @ORM\Table(name="meshele", indexes={@ORM\Index(name="fk_MeshEle_Nodes1_idx", columns={"Nodes_Node_id"}), @ORM\Index(name="fk_MeshEle_Nodes2_idx", columns={"Nodes_Node_id1"}), @ORM\Index(name="fk_MeshEle_Nodes3_idx", columns={"Nodes_Node_id2"}), @ORM\Index(name="fk_MeshEle_Nodes4_idx", columns={"Nodes_Node_id3"}), @ORM\Index(name="fk_MeshEle_moment1_idx", columns={"moment_idmoment"}), @ORM\Index(name="fk_MeshEle_element1_idx", columns={"element_idelement"})})
 * @ORM\Entity
 */
class Meshele
{
    /**
     * @var integer
     *
     * @ORM\Column(name="idMeshEle", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idmeshele;

    /**
     * @var \Api\Model\Nodes
     *
     * @ORM\ManyToOne(targetEntity="Api\Model\Nodes")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="Nodes_Node_id", referencedColumnName="Node_id")
     * })
     */
    private $nodesNode;

    /**
     * @var \Api\Model\Nodes
     *
     * @ORM\ManyToOne(targetEntity="Api\Model\Nodes")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="Nodes_Node_id1", referencedColumnName="Node_id")
     * })
     */
    private $nodesNode1;

    /**
     * @var \Api\Model\Nodes
     *
     * @ORM\ManyToOne(targetEntity="Api\Model\Nodes")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="Nodes_Node_id2", referencedColumnName="Node_id")
     * })
     */
    private $nodesNode2;

    /**
     * @var \Api\Model\Nodes
     *
     * @ORM\ManyToOne(targetEntity="Api\Model\Nodes")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="Nodes_Node_id3", referencedColumnName="Node_id")
     * })
     */
    private $nodesNode3;

    /**
     * @var \Api\Model\Element
     *
     * @ORM\ManyToOne(targetEntity="Api\Model\Element")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="element_idelement", referencedColumnName="idelement")
     * })
     */
    private $elementelement;

    /**
     * @var \Api\Model\Moment
     *
     * @ORM\ManyToOne(targetEntity="Api\Model\Moment")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="moment_idmoment", referencedColumnName="idmoment")
     * })
     */
    private $momentmoment;


}

