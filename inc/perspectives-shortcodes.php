<?php 

/* Perspectives title shortcodes */


function Dj_perspectives_title_shortcode_func($atts,$post_ID) {

   extract( shortcode_atts( array(
    'title' => 'Perspectives: Thoughts and stories by real Handsome people',
    'all_numberof_post_content' => '48 ARTICLES IN 7 JOURNALS',
   ), $atts) );

	ob_start();
	?>
       <section class="content-section animate-up">
          <header class="section-header section-header--no-border section-header--masthead">
            <h1><?php echo $title; ?></h1>
            <h4><?php echo $all_numberof_post_content; ?></h4>
          </header>
        </section>


 <?php 
 $html = ob_get_contents();
 ob_get_clean();
 return $html;
}

add_shortcode('Dj_perspectives_title', 'Dj_perspectives_title_shortcode_func');



/* Perspectives shortcodes */


function Dj_perspectives_shortcode_func($atts,$post_ID) {

   extract( shortcode_atts( array(
    'numberpost' => '1',
   ), $atts) );

	ob_start();
	?>
        <div class="animate-up">
              <ul class="blog-grid" >

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
                      <img width="600" height="360" src="<?php echo $image_prospective[0]; ?>" />     
                    </div>      
                    <h3><?php  the_title(); ?></h3>      
                    <?php the_excerpt(); ?><br /><span class="readmore">Read 11 Articles</span>
                  </a>
                </li>


     <?php endwhile; ?>

                
                

              </ul>

            </div>


 <?php 
 $html = ob_get_contents();
 ob_get_clean();
 return $html;
}

add_shortcode('Dj_perspectives_item', 'Dj_perspectives_shortcode_func');


/* recent post airtical */

function Dj_perspectives_recent_airticle_shortcode_func($atts,$post_ID) {

   extract( shortcode_atts( array(
    'title' => 'Most Recent Articles',
    'numberpost' => '1',
   ), $atts) );

	ob_start();
	?>
          <div class="container articles-list">
            <h4 class="gray-highlight"><?php echo $title; ?></h4>
            <ul>

              <?php
                $args = array(
                  'numberposts' => $numberpost,
                  'offset' => 0,
                  'category' => 0,
                  'orderby' => 'post_date',
                  'order' => 'DESC',
                  'include' => '',
                  'exclude' => '',
                  'meta_key' => '',
                  'meta_value' =>'',
                  'post_type' => 'Dj_perspectives',
                  'post_status' => 'draft, publish, future, pending, private',
                  'suppress_filters' => true
                );

                $recent_posts = wp_get_recent_posts( $args );
               
                $recent_posts = wp_get_recent_posts();
                foreach( $recent_posts as $recent ){ 


                  echo '<li>
                    <a href="' . get_permalink($recent["ID"]) . '">
                      <time>'. get_the_time('M j Y').'</time>
                      <h3>' .   $recent["post_title"].'</h3>
                    </a> 
                  </li> ';
                  }
                wp_reset_query();
              ?>



            </ul>
          </div>

 <?php 
 $html = ob_get_contents();
 ob_get_clean();
 return $html;
}

add_shortcode('Dj_recent_post_perspective', 'Dj_perspectives_recent_airticle_shortcode_func');

