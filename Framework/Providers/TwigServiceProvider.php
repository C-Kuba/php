<?php

namespace Framework\Providers;

use Twig_Loader_Filesystem;
use Twig_Environment;
use Symfony\Component\Routing\Generator\UrlGenerator;
use Twig_SimpleFunction;

class TwigServiceProvider extends ServiceProvider
{
    public function provide(array $options = [])
    {
        $loader = new Twig_Loader_Filesystem($this -> config['dir']);

        $twig = new Twig_Environment($loader, array(
            'cache' => $this -> config['cache'],
            'auto-reload' => true
        ));

        $twig -> clearCacheFiles();

        if (!isset($options['urlGenerator']) || $options['urlGenerator'] instanceof UrlGenerator == false)
        {
            throw new \Exception('twig must have urlGenerator');
        }

        $functionUrlGenerator = new Twig_SimpleFunction('url' , function($name, $parameters =[]) use ($options) {
            return $options['urlGenerator'] -> generate($name, $parameters);
        });
        
        $functionAsset = new Twig_SimpleFunction('asset', function($fileName){
            return '/dyplom2/web/asset/' . $fileName;
        });
        
        $twig -> addFunction($functionUrlGenerator);
        $twig -> addFunction($functionAsset);

        return $twig;
    }
}