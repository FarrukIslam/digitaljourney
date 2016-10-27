<!doctype html>
<html lang="<?php language_attributes(); ?>">
  <head>
    <!-- Meta Tags
    ================================================== -->
    <meta charset="<?php bloginfo('charset'); ?>"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="content-language" content="<?php language_attributes(); ?>"/>
    
    <!-- Mobile Specific Metas
    ================================================== -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <meta name="description"  content="<?php bloginfo('description') ?>" />
  
  <!--
    ================================================== -->
    <!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <![endif]-->

    <!-- Favicons
    ================================================== -->
    <link rel="apple-touch-icon-precomposed" href="<?php echo get_template_directory_uri(); ?>/img/57.png"/>
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php echo get_template_directory_uri(); ?>/img/72.png"/>
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php echo get_template_directory_uri(); ?>/img/114.png"/>
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php echo get_template_directory_uri(); ?>/img/144.png"/>
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon.png"/>

    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/bootstrap.css">

    

    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

    <?php wp_head(); ?>

  </head>


  <body class="<?php body_class(); ?>">

    <!--[if lt IE 10]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <!-- Inline Load SVG sprite-sheet -->


    <div id="page__wrapper">

      <div>

        <header class="page__header">
          <div>
            <a class="branding" href="<?php bloginfo('home'); ?>">Handsome</a>
            <a class="mobile-nav-toggle" href="javascript:void(0)">
              <span>Menu</span>
              <span>Close</span>
            </a>
            <nav class="main-nav">

            <?php
              wp_nav_menu( array(
                'menu'              => __( 'Primay Menu', 'digitaljourney'),
                'theme_location'    => 'primarymenuleft',
                'depth'             => 2,
                'menu_class'        => '',
                'fallback_cb'       => 'digitaljourney_default_menu_left'
                ));
                
              wp_nav_menu( array(
                'menu'              => __( 'Primay Menu', 'digitaljourney'),
                'theme_location'    => 'primarymenuright',
                'depth'             => 2,
                'menu_class'        => 'nav-items__secondary',
                'fallback_cb'       => 'digitaljourney_default_menu_right'
                ));                
            ?>
            


            </nav>
            <nav class="mobile-nav">
              <div class="mobile-nav__inner">
                <?php
                  wp_nav_menu( array(
                    'menu'              => __( 'Primay Menu', 'digitaljourney'),
                    'theme_location'    => 'primarymenuleft',
                    'depth'             => 4,
                    'menu_class'        => '',
                    'fallback_cb'       => 'digitaljourney_default_menu_left'
                    ));
                    
                  wp_nav_menu( array(
                    'menu'              => __( 'Primay Menu', 'digitaljourney'),
                    'theme_location'    => 'primarymenuright',
                    'depth'             => 4,
                    'menu_class'        => 'nav-items__secondary',
                    'fallback_cb'       => 'digitaljourney_default_menu_right'
                    ));                
                ?>
              </div>
            </nav>
          </div>
        </header>