<?php 





/** dj button **/

function djbutton_shortcode_func( $atts ) {
    extract( shortcode_atts( array(
    'link' => 'http://example.com/',
    'button_text' => 'View Services',
   ), $atts) );


 ob_start();

 ?>
<div class="centered">
            <div class="entry-content entry-content--homepage">
              <a class="arrow-check-btn arrow-check-btn-full arrow-check-btn-whitebg" href="<?php echo $link; ?>">
                <span class="arrow-check">
                  <span class="arrow-check-copy"><?php echo $button_text; ?></span>
                  <svg id="form-arrow-svg" viewBox="0 0 12 12" preserveAspectRatio="xMidYMid">
                    <g id="arrow-group-top" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Artboard-1-Copy-10" transform="translate(-918.000000, -1194.000000)" fill="#FFFFFF">
                            <g id="Group-9" transform="translate(817.000000, 1197.000000)">
                                <g id="Page-1-Copy-5" transform="translate(105.500000, 3.000000) rotate(0.000000) translate(-105.500000, -3.000000) translate(102.500000, -2.500000)">
                                    <path d="M0.128157447,10.2445558 C-0.0426510638,10.417486 -0.0426510638,10.6974744 0.128157447,10.8704047 C0.298838298,11.0429512 0.575731915,11.043207 0.746668085,10.8704047 L5.74441277,5.8130907 C5.91522128,5.64016047 5.91522128,5.35991628 5.74441277,5.18698605 L0.746668085,0.129672093 C0.575731915,-0.0432581395 0.299093617,-0.0432581395 0.128157447,0.129672093 C-0.0426510638,0.302474419 -0.0426510638,0.582590698 0.128029787,0.755393023 L4.68598723,5.49997442 L0.128157447,10.2445558 Z" id="arrow"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                  </svg>
                </span>
              </a>
            </div>
          </div>


 <?php 
 $html = ob_get_contents();
 ob_get_clean();
 return $html;
}

add_shortcode('Dj_button', 'djbutton_shortcode_func');


/** dj button style 2 **/

function djbutton2_shortcode_func( $atts ) {
    extract( shortcode_atts( array(
    'link' => 'http://example.com/',
    'button_text' => 'View more perspectives',
   ), $atts) );


 ob_start();

 ?>
 <div class="h2style">
      <a class="arrow-check-btn" href="<?php echo $link; ?>">
        <span class="arrow-check-btn__text"><?php echo $button_text; ?></span>
        <span class="arrow-check">
          <svg id="form-arrow-svg" viewBox="0 0 12 12" preserveAspectRatio="xMidYMid">
            <g id="arrow-group-top" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Artboard-1-Copy-10" transform="translate(-916.000000, -1194.000000)" fill="#FFFFFF">
                    <g id="Group-9" transform="translate(817.000000, 1197.000000)">
                        <g id="Page-1-Copy-5" transform="translate(105.500000, 3.000000) rotate(0.000000) translate(-105.500000, -3.000000) translate(102.500000, -2.500000)">
                            <path d="M0.128157447,10.2445558 C-0.0426510638,10.417486 -0.0426510638,10.6974744 0.128157447,10.8704047 C0.298838298,11.0429512 0.575731915,11.043207 0.746668085,10.8704047 L5.74441277,5.8130907 C5.91522128,5.64016047 5.91522128,5.35991628 5.74441277,5.18698605 L0.746668085,0.129672093 C0.575731915,-0.0432581395 0.299093617,-0.0432581395 0.128157447,0.129672093 C-0.0426510638,0.302474419 -0.0426510638,0.582590698 0.128029787,0.755393023 L4.68598723,5.49997442 L0.128157447,10.2445558 Z" id="arrow"></path>
                        </g>
                    </g>
                </g>
            </g>
          </svg>
        </span>
      </a>
    </div>


 <?php 
 $html = ob_get_contents();
 ob_get_clean();
 return $html;
}

add_shortcode('Dj_button2', 'djbutton2_shortcode_func');





/* services page */


/** dj offering services title **/

function offering_title_services_shortcode_func( $atts ) {
    extract( shortcode_atts( array(
    'services_offering_subtitle' => 'Offerings',
    'services_offering_title' => 'View more perspectives',
   ), $atts) );


 ob_start();

 ?>
 <div class="verticals__intro">
    <h4><?php echo $services_offering_subtitle; ?></h4>
    <h1><?php echo $services_offering_title; ?></h1>
  </div>


 <?php 
 $html = ob_get_contents();
 ob_get_clean();
 return $html;
}

add_shortcode('Dj_services_offering_title', 'offering_title_services_shortcode_func');

/** dj services item **/

function service_item_shortcode_func( $atts ) {
    extract( shortcode_atts( array(
    'service_item_title' => 'Digital Business',
    'service_item_content' => 'Write your Service Info',
    'service_item_img' => 'http://localhost/digitaljourney/wp-content/uploads/2016/10/services-business@2x.jpg',
   ), $atts) );


 ob_start();

 ?>
 <div class="media">
    <div class="img">
      <img src="<?php echo $service_item_img; ?>" />
    </div>
    <div class="bd">
      <h3><?php echo $service_item_title; ?></h3>
      <p><?php echo $service_item_content; ?></p>
    </div>
  </div>


 <?php 
 $html = ob_get_contents();
 ob_get_clean();
 return $html;
}

add_shortcode('Dj_service_item', 'service_item_shortcode_func');


function service_vertical_item_shortcode_func(  $atts, $content = null ) {
   
return '<div class="verticals__items">' . do_shortcode($content) . '</div>';
}

add_shortcode('Dj_vertical_item_colum', 'service_vertical_item_shortcode_func');


/** dj services item list**/






function service_list_wrapper_func(  $atts, $content = null ) {
   
return '<section class="content-section block-grid">' . do_shortcode($content) . '</section>';
}

add_shortcode('Dj_services_list_wrapper', 'service_list_wrapper_func');


function dj_section_content_fun(  $atts, $content = null ) {
   
return '<section class="content-section ">' . do_shortcode($content) . '</section>';
}

add_shortcode('Dj_section_content', 'dj_section_content_fun');


function service_list_shortcode_func( $atts ) {
    extract( shortcode_atts( array(
    'service_list_title' => 'Title Service Item ',
    'service_list_content' => 'Write your Service list content',
    'service_list' => '',
   ), $atts) );


 ob_start();

 ?>


   <div class="block-grid__item">
      <div>
        <div class="block-grid__item__content">
          <h3><?php echo $service_list_title; ?></h3>
          <p><?php echo $service_list_content; ?></p>
         <?php echo $service_list; ?>
        </div>
      </div>
    </div>


 <?php 
 $html = ob_get_contents();
 ob_get_clean();
 return $html;
}

add_shortcode('Dj_service_list', 'service_list_shortcode_func');



function why_handsome_content_section_shortcode_func( $atts ) {
    extract( shortcode_atts( array(
    'whyhandsome_content_title' => 'Title ',
    'whyhandsome_content' => 'Write your  content',
   ), $atts) );


 ob_start();

 ?>
<section class="content-section">
    <header class="section-header">
      <h4><?php echo $whyhandsome_content_title; ?></h4>
      <h1 style="max-width:80rem; margin-bottom:0;"><?php echo $whyhandsome_content; ?></h1>
    </header>
 <?php 
 $html = ob_get_contents();
 ob_get_clean();
 return $html;
}

add_shortcode('Dj_Whyhandsome_content_section', 'why_handsome_content_section_shortcode_func');














function Dj_singe_image_section_func($atts ) {

extract( shortcode_atts( array(
    'singe_img' => 'http://localhost/digitaljourney/wp-content/uploads/2016/10/services-bottom@2x.jpg',
   ), $atts) );

$image = wp_get_attachment_image_src( $singe_img, 'full');
  $image_src = $image['0']; 

  ob_start();
  ?>
    
     <div class="core-services-image">
        <img width="100%" src="<?php echo $image_src; ?>" alt="" >
      </div>    

   <?php 
   $html = ob_get_contents();
   ob_get_clean();
   return $html;
  }

add_shortcode('Dj_single_image', 'Dj_singe_image_section_func');


