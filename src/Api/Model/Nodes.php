<?php

namespace Api\Model;

use Doctrine\ORM\Mapping as ORM;

/**
 * Nodes
 *
 * @ORM\Table(name="nodes")
 * @ORM\Entity
 */
class Nodes
{
    /**
     * @var integer
     *
     * @ORM\Column(name="Node_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $nodeId;

    /**
     * @var float
     *
     * @ORM\Column(name="x", type="float", precision=10, scale=0, nullable=true)
     */
    private $x;

    /**
     * @var float
     *
     * @ORM\Column(name="y", type="float", precision=10, scale=0, nullable=true)
     */
    private $y;

    /**
     * @var float
     *
     * @ORM\Column(name="z", type="float", precision=10, scale=0, nullable=true)
     */
    private $z;


}

