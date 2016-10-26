<?php 
/**/
get_header(); ?>
<div class="content_wrapper theme-dark page page-blog">

            <section class="content-section animate-up">
              <header class="section-header section-header--no-border section-header--masthead">
                <h1>Perspectives: Thoughts and stories by real Handsome people</h1>
                <h4>48 ARTICLES IN 7 JOURNALS</h4>
              </header>
            </section>

            <!-- BLOG GRID LIST -->
            <div class="animate-up">
              <ul class="blog-grid" >

              <?php 

      $Dj_perspectives_item = new wp_Query(array(
        'post_type' => 'Dj_perspectives',
        'post_per_pages' => -1
      ));
      
       while( $Dj_perspectives_item -> have_posts() ) : $Dj_perspectives_item -> the_post();

         $image_prospective = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'djprospective350x235' ); 

    ?>


            <li class="blog-grid__item"> 
                  <a class="blog-grid__item__content" href="<?php the_permalink(); ?>">     
                    <div class="blog-grid__item__img">
                      <img width="600" height="360" src="<?php echo $image_prospective[0]; ?>" />     
                    </div>      
                    <h3><?php  the_title(); ?></h3>      
                    <p><?php the_excerpt(); ?><br /><span class="readmore">Read 11 Articles</span></p> 
                  </a>
                </li>


     <?php endwhile; ?>

                
                

              </ul>

            </div>

 
          <div class="container articles-list">
            <h4 class="gray-highlight">Most Recent Articles</h4>
            <ul>
              <li>
                <a href="#">
                  <time>Sep 23 2016</time>
                  <h3>Annette Neu Joins Handsome as a User Experience Designer!</h3>
                </a> 
              </li> 
              <li>
                <a href="#">
                  <time>Aug 5 2016</time>
                  <h3>Valerie Harmon Joins Handsome as a Product Manager!</h3>
                </a> 
              </li> 
            </ul>
          </div>

      </div>

      <?php get_footer(); ?>