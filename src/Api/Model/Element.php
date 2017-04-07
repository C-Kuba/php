<?php

namespace Api\Model;

use Doctrine\ORM\Mapping as ORM;

/**
 * Element
 *
 * @ORM\Table(name="element")
 * @ORM\Entity
 */
class Element
{
    /**
     * @var integer
     *
     * @ORM\Column(name="idelement", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idelement;

    /**
     * @var integer
     *
     * @ORM\Column(name="count_of_nodes", type="integer", nullable=true)
     */
    private $countOfNodes;

    /**
     * @var integer
     *
     * @ORM\Column(name="count_of_moments", type="integer", nullable=true)
     */
    private $countOfMoments;


}

