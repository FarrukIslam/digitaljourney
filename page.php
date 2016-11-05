<?php get_header(); ?>

    <div class="page__content">
      <div class="content_wrapper ">

      	 <section style="padding:50px 20px !important" class="content-section">
     

       <?php if(have_posts()) : ?>
 
        <?php while(have_posts())  : the_post(); ?> 
        
        <?php the_content(); ?> <?php endwhile; ?> 
        
       <?php endif; ?> 

         
       </section>
        
     
      </div>

		</div><!-- end page content -->

		<?php get_footer(); ?>