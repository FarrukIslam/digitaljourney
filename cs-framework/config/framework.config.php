<?php if ( ! defined( 'ABSPATH' ) ) { die; } // Cannot access pages directly.
// ===============================================================================================
// -----------------------------------------------------------------------------------------------
// FRAMEWORK SETTINGS
// -----------------------------------------------------------------------------------------------
// ===============================================================================================
$settings           = array(
  'menu_title'      => 'DigitalJourney Options',
  'menu_type'       => 'menu', // menu, submenu, options, theme, etc.
  'menu_slug'       => 'digitaljourney-themes-settigs',
  'ajax_save'       => true,
  'show_reset_all'  => true,
  'menu_position'   => 58,
  'menu_icon'       => 'dashicons-hammer',
  'framework_title' => '<img src="'. get_template_directory_uri() .'/img/dj_logo11.png" alt="" />',
);

// ===============================================================================================
// -----------------------------------------------------------------------------------------------
// FRAMEWORK OPTIONS
// -----------------------------------------------------------------------------------------------
// ===============================================================================================
$options        = array();

// ------------------------------
// a option section with tabs   -
// ------------------------------
$options[]   = array(
  'name'     => 'General',
  'title'    => 'General Settings',
  'icon'     => 'fa fa-plus-circle',
  'sections' => array(





    // -----------------------------
    // Header Option      
    // -----------------------------
    array(
      'name'  => 'header_options',
      'title' => 'Header and Footer',
      'icon'  => 'fa fa-header',

      // begin: fields
      'fields'    => array(

        // begin: Favicon
        array(
          'id'            => 'favicon',
          'type'          => 'upload',
          'title'         => 'Upload Favicon',
          'settings'      => array(
           'upload_type'  => 'image',
           'button_title' => 'Upload',
           'frame_title'  => 'Select an image',
           'insert_title' => 'Use this image',
          ),
        ),

        // begin: Uplpad Logo
        array(
          'id'            => 'logo',
          'type'          => 'upload',
          'title'         => 'Logo Images',
          'settings'      => array(
           'upload_type'  => 'image',
           'button_title' => 'Upload',
           'frame_title'  => 'Select an image',
           'insert_title' => 'Use this image',
          ),
        ),
        array(
          'id'            => 'whitelogo',
          'type'          => 'upload',
          'title'         => 'White Logo Images',
          'settings'      => array(
           'upload_type'  => 'image',
           'button_title' => 'Upload',
           'frame_title'  => 'Select an White logo image',
           'insert_title' => 'Use this image',
          ),
        ),
        array(
          'id'            => 'footer_logo',
          'type'          => 'upload',
          'title'         => 'Footer Logo Images',
          'settings'      => array(
           'upload_type'  => 'image',
           'button_title' => 'Upload',
           'frame_title'  => 'Select an White logo image',
           'insert_title' => 'Use this image',
          ),
        ),
        array(
          'id'            => 'footer_white_logo',
          'type'          => 'upload',
          'title'         => 'Footer White Logo Images',
          'settings'      => array(
           'upload_type'  => 'image',
           'button_title' => 'Upload',
           'frame_title'  => 'Select an White logo image',
           'insert_title' => 'Use this image',
          ),
        ),
      )
    ), // end: Header Option 


    

  ) // end: General section
); // end: General Setting

// ------------------------------
// Google analytics                      -
// ------------------------------
$options[]   = array(
  'name'     => 'google_analytics',
  'title'    => 'Google Analytics',
  'icon'     => 'fa fa-code',
  'fields'   => array(

    array(
      'id'      => 'ganalytics',
      'type'    => 'text',
      'help'    => 'Example : UA-71326319-1',
      'title'   => 'Google Analytics Tracking ID',
      'attributes' => array(
        'placeholder' => 'UA-12345678-0'
      )
    ),
    

  )
);

// ------------------------------
// donate                       -
// ------------------------------
$options[]   = array(
  'name'     => 'donate_section',
  'title'    => 'Donate',
  'icon'     => 'fa fa-heart',
  'fields'   => array(

    array(
      'type'    => 'heading',
      'content' => 'You Guys!'
    ),

    array(
      'type'    => 'content',
      'content' => 'If you want to see more functions and features for this framework, you can buy me a coffee. I need a lot of it when I am creating new stuff for you. Thank you in advance.',
    ),

    array(
      'type'    => 'content',
      'content' => '<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=56MAQNCNELP8J" target="_blank"><img src="https://www.paypal.com/en_US/i/btn/btn_donateCC_LG.gif" alt="Donate" /></a>',
    ),

  )
);

// ------------------------------
// license                      -
// ------------------------------
$options[]   = array(
  'name'     => 'license_section',
  'title'    => 'License',
  'icon'     => 'fa fa-info-circle',
  'fields'   => array(

    array(
      'type'    => 'heading',
      'content' => '100% GPL License, Yes it is free!'
    ),
    array(
      'type'    => 'content',
      'content' => 'Codestar Framework is <strong>free</strong> to use both personal and commercial. If you used commercial, <strong>please credit</strong>. Read more about <a href="http://www.gnu.org/licenses/gpl-2.0.txt" target="_blank">GNU License</a>',
    ),

  )
);

CSFramework::instance( $settings, $options );