<?php

namespace Api\Model;

use Doctrine\ORM\Mapping as ORM;

/**
 * Moment
 *
 * @ORM\Table(name="moment")
 * @ORM\Entity
 */
class Moment
{
    /**
     * @var integer
     *
     * @ORM\Column(name="idmoment", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idmoment;

    /**
     * @var float
     *
     * @ORM\Column(name="Mxx_Top", type="float", precision=10, scale=0, nullable=true)
     */
    private $mxxTop;

    /**
     * @var float
     *
     * @ORM\Column(name="Mxx_Bottom", type="float", precision=10, scale=0, nullable=true)
     */
    private $mxxBottom;

    /**
     * @var float
     *
     * @ORM\Column(name="Myy_Top", type="float", precision=10, scale=0, nullable=true)
     */
    private $myyTop;

    /**
     * @var float
     *
     * @ORM\Column(name="Myy_Bottom", type="float", precision=10, scale=0, nullable=true)
     */
    private $myyBottom;


}

