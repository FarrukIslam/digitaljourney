<?php

if (!defined('digitaljourney')) define('digitaljourney', '1.0');

if (!class_exists('digitaljourney_scripts_load'))
	{
	class digitaljourney_scripts_load {
		
		public function __construct() {
			add_action('wp_enqueue_scripts', array( $this, 'digitaljourney_scripts' ));
			add_action('after_setup_theme', array($this, 'digitaljourney_after_theme_setup'));
			}

		public function digitaljourney_scripts() {
				
			/** 
			---------------------------------------------------------------
			 CSS Files 
			---------------------------------------------------------------	
			**/
			
			/* theme stylesheet */
		    wp_enqueue_style( 'stylesheet', get_stylesheet_uri() ); 
			
			
			/** 
			---------------------------------------------------------------
			 jQuery Files
			---------------------------------------------------------------	
			**/
			wp_enqueue_script('jQuery');

			wp_enqueue_script('bootstrap.min', get_template_directory_uri() . '/js/bootstrap.min.js', array(
				'jquery'
			) , digitaljourney, true);

			wp_enqueue_script('vendor', get_template_directory_uri() . '/js/vendor.js', array(
				'jquery'
			) , digitaljourney, true);

			wp_enqueue_script('setting', get_template_directory_uri() . '/js/handsome.js', array(
				'jquery'
			) , digitaljourney, true);

			



			
			/* wordpress comments */
			if (is_singular() && comments_open() && get_option('thread_comments'))
				{
				wp_enqueue_script('comment-reply');
				}
			}

		function digitaljourney_after_theme_setup() {

			//add_theme_support( 'html5', array(
			//	'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
			//) );

			
			/* load text domain */
			load_theme_textdomain('digitaljourney', get_template_directory() . '/languages');
			
			/* widget shortcode support*/
			add_filter('widget_text', 'do_shortcode');
			
			/* theme supports */
			//add_theme_support('post-thumbnails', array('post','Dj_slider'));
			add_theme_support('automatic-feed-links');
			

			add_theme_support('post-thumbnails');

			add_image_size('djslider1286x556', 1286, 556);
			add_image_size('djprospective350x235', 350, 235);
			add_image_size('djcasestudies350x235', 350, 225);
			add_image_size('djwhyhandsomepost210x210', 210, 210);
			
			
			
			/* register nav left*/
			register_nav_menus(array(
				'primarymenuleft' => __('Primary Menu Left', 'digitaljourney')
			));
			/* register nav Right */
			register_nav_menus(array(
				'primarymenuright' => __('Primary Menu Right', 'digitaljourney')
			));

			/* register sidebar */
			function digitaljourney_widgets_register_func()
				{
					
				register_sidebar( array(
				        'name' => __( 'Footer Sidebar', 'digitaljourney' ),
				        'id' => 'footer-sidebar',
				        'description' => __( 'Widgets in this area will be shown Footer.', 'digitaljourney' ),
				        'before_widget' => ' <div class="widget widget_text">',
					'after_widget'  => '</div>',
					'before_title'  => '<h5 class="widget-title">',
					'after_title'   => '</h5>',
				    ) );
				
				}

			add_action('widgets_init', 'digitaljourney_widgets_register_func');

			
			}
		}
	}

if (class_exists('digitaljourney_scripts_load'))
	{
	global $digitaljourney_scripts_load;
	$digitaljourney_scripts_load = new digitaljourney_scripts_load();
	}


function digitaljourney_default_menu_left(){	
		
		if(is_user_logged_in()){
			echo '<ul>';
		echo '<li class="current"><a href="'.esc_url(home_url()).'/wp-admin/nav-menus.php">'. esc_html__('Create Left Menu','digitaljourney').'</a></li>';
			echo '</ul>';
		}
		
	else {
		echo '<ul>';
		echo '<li><a href="'.esc_url(home_url()).'">' . esc_html__( 'Home', 'digitaljourney' ) . '</a></li>';
		echo '</ul>';
	}
		
}		

function digitaljourney_default_menu_right(){
		
		if(is_user_logged_in()){
			echo '<ul class="nav-items__secondary">';
		echo '<li class="current"><a href="'.esc_url(home_url()).'/wp-admin/nav-menus.php">'. esc_html__('Create Right Menu','digitaljourney').'</a></li>';
			echo '</ul>';
		}	
}		

/* Files require */
require 'inc/ps-extend-vc.php';
require 'inc/custom-post-type.php';
require 'inc/shortcodes.php';
require 'inc/contact-shortcodes.php';
require 'inc/case-studies-shortcodes.php';
require 'inc/perspectives-shortcodes.php';
require 'inc/why-handsome-shortcodes.php';
require 'inc/font-page-shortcodes.php';
require_once get_template_directory() .'/cs-framework/cs-framework.php';









