<?php get_header(); ?>

    <div class="page__content">
      <div class="content_wrapper ">

      <div class="row">
      <div class="container">

       <?php if(have_posts()) : ?>
 
        <?php while(have_posts())  : the_post(); ?> 
        
        <?php the_content(); ?> <?php endwhile; ?> 
        
       <?php endif; ?> 

          </div>
          </div>

        
     
      </div>

		</div><!-- end page content -->

		<?php get_footer(); ?>