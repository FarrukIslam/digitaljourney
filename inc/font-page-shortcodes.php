<?php 

function djslider_shortcode_func($atts,$post_ID) {

   extract( shortcode_atts( array(
    'numberpost' => '1',
   ), $atts) );

 ob_start();

?>
	<div class="hero ">
      <div class="hero__img">
        <ul class="slides bxslider">

        <?php 

	      $slidersitems = new wp_Query(array(
	        'post_type' => 'Dj_slider',
	        'posts_per_page' => $numberpost,
	      ));
	      
       	  while( $slidersitems -> have_posts() ) : $slidersitems -> the_post();

   		 ?>
      

         <?php 
            $post_thumbnail_id = get_post_thumbnail_id($post_ID);
			$image = wp_get_attachment_image_src($post_thumbnail_id, 'djslider1286x556'); ?>


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





/* Perspectives Font page shortcodes */


function Dj_perspectives_fontpage_shortcode_func($atts,$post_ID) {

   extract( shortcode_atts( array(
    'numberpost' => '3',
    'item_name' => 'Perspectives',
   ), $atts) );

	ob_start();
	?>
        <ul class="blog-grid">


              <?php 

                $Dj_perspectives_item = new wp_Query(array(
                  'post_type' => 'Dj_perspectives',
                  'posts_per_page' => $numberpost,
                ));
                
                 while( $Dj_perspectives_item -> have_posts() ) : $Dj_perspectives_item -> the_post();

                  
                   $post_thumbnail_id = get_post_thumbnail_id($post_ID);
			$image_prospective = wp_get_attachment_image_src($post_thumbnail_id, 'djprospective350x235');

              ?>


            <li class="blog-grid__item">
              <a class="blog-grid__item__content" href="<?php the_permalink(); ?>">
                <div class="blog-grid__item__img">
                  <img width="1200" height="800" src="<?php echo $image_prospective[0]; ?>" sizes="(max-width: 1200px) 100vw, 1200px" />                  
                </div>
                <h4><?php echo $item_name; ?></h4>
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

add_shortcode('Dj_font_page_perspectives_item', 'Dj_perspectives_fontpage_shortcode_func');

