<?php get_header(); ?>

    <div class="page__content">
      <div class="content_wrapper ">

      <?php echo do_shortcode('[Dj_slider]'); ?>

     

        <section class="content-section">
           <div class="hero__headline hero__headline--centered hero__headline--homepage">
            <h4><span class="">Welcome to Handsome</span></h4>
            <h1><span class="">We create beautiful experiences</span><br>
              <span class="">that drive successful businesses.</span></h1>
          </div>

         <?php echo do_shortcode('[Dj_button]'); ?>

        </section>

        
       
     <section class="featured-blog-posts">
        <div class="content-section">

          
          
         <?php echo do_shortcode('[Dj_font_page_perspectives_item]'); ?>
         <?php echo do_shortcode('[Dj_button2]'); ?>
         
        </div>
      </section>

        <section class="content-section" style="margin:5rem auto 0 auto;">
          <header class="section-header ">
            <h4>Clients</h4>
          </header>
          <ul class="bullet-tiles">
            <li><h3>Facebook</h3></li>
            <li><h3>HomeAway</h3></li>
            <li><h3>Nickelodeon</h3></li>
            <li><h3>Silvercar</h3></li>
            <li><h3>Indeed</h3></li>
            <li><h3>Bell Labs</h3></li>
            <li><h3>ERCOT</h3></li>
            <li><h3>Housing.com</h3></li>
          </ul>
        </section>

      </div>

		</div><!-- end page content -->

		<?php get_footer(); ?>