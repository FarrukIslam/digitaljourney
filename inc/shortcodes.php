<?php 

function djslider_shortcode_func() {
 ob_start();

?>
<div class="hero ">
      <div class="hero__img">

        <ul class="slides bxslider">

          <?php 
      $slidersitems = new wp_Query(array(
        'post_type' => 'Dj_slider',
        'post_per_pages' => -1
      ));
      
       while( $slidersitems -> have_posts() ) : $slidersitems -> the_post();
    ?>
      
    
    <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'djslider2000x2000' ); ?>


          <li style="background-image: url('<?php echo $image[0]; ?>" />

            <a class="casestudy-cta" href="<?php the_permalink(); ?>">
              <h3><?php echo get_post_meta( get_the_ID(), 'djslider_title', true ); ?></h3>
              <span class="arrow-check-btn">
                <span class="arrow-check">
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
              </span>
            </a>
          </li>
        <?php endwhile; ?>  

        </ul>
        <a class="learnmore-arrow-homepage" href="#">
          <svg id="form-arrow-svg" viewBox="0 0 12 12">
            <g id="arrow-group-top" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Artboard-1-Copy-10" transform="translate(-917.000000, -1197.000000)" fill="#FFFFFF">
                    <g id="Group-9" transform="translate(817.000000, 1197.000000)">
                        <g id="Page-1-Copy-5" transform="translate(105.500000, 3.000000) rotate(-270.000000) translate(-105.500000, -3.000000) translate(102.500000, -2.500000)">
                            <path d="M0.128157447,10.2445558 C-0.0426510638,10.417486 -0.0426510638,10.6974744 0.128157447,10.8704047 C0.298838298,11.0429512 0.575731915,11.043207 0.746668085,10.8704047 L5.74441277,5.8130907 C5.91522128,5.64016047 5.91522128,5.35991628 5.74441277,5.18698605 L0.746668085,0.129672093 C0.575731915,-0.0432581395 0.299093617,-0.0432581395 0.128157447,0.129672093 C-0.0426510638,0.302474419 -0.0426510638,0.582590698 0.128029787,0.755393023 L4.68598723,5.49997442 L0.128157447,10.2445558 Z" id="Fill-1"></path>
                        </g>
                    </g>
                </g>
            </g>
          </svg>
          <span>Learn More</span>
        </a>

      </div>
    </div>


 <?php 
 $html = ob_get_contents();
 ob_get_clean();
 return $html;
}

add_shortcode('Dj_slider', 'djslider_shortcode_func');


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


/* prospector shortcodes */


function Dj_perspectives_shortcode_func($post_ID) {
	ob_start();
	?>
    <ul class="blog-grid">
		<?php 

		  $Dj_perspectives_item = new wp_Query(array(
			'post_type' => 'Dj_perspectives',
			'post_per_pages' => 3
		  ));
		  
		   while( $Dj_perspectives_item -> have_posts() ) : $Dj_perspectives_item -> the_post();
			$post_thumbnail_id = get_post_thumbnail_id($post_ID);
			$image_prospective = wp_get_attachment_image_src($post_thumbnail_id, 'djprospective350x235');
		?>
		<li class="blog-grid__item">
		  <a class="blog-grid__item__content" href="<?php the_permalink(); ?>">
			<div class="blog-grid__item__img">
			  <img src="<?php echo $image_prospective[0]; ?>">                
			</div>
			<h4>Perspectives</h4>
			<h3><?php  the_title(); ?></h3>
			<p class="readmore_p">
			  <span class="readmore">Read it now</span>
			</p>
		  </a>
		</li>
     <?php endwhile; ?>
     </ul>


 <?php 
 $html = ob_get_contents();
 ob_get_clean();
 return $html;
}

add_shortcode('Dj_perspectives', 'Dj_perspectives_shortcode_func');


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
    'service_list_title' => 'Sensemaking',
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
          <ul>
            <li>Prototyping</li>
            <li>System Integration</li>
            <li>Systems Analysis</li>
            <li>Full-stack Web &amp; Mobile Development</li>
            <li>Quality Assurance &amp; Testing</li>
          </ul>
        </div>
      </div>
    </div>


 <?php 
 $html = ob_get_contents();
 ob_get_clean();
 return $html;
}

add_shortcode('Dj_service_list', 'service_list_shortcode_func');
