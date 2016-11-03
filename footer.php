  
      <footer class="page__footer">

		 <?php if (is_active_sidebar('footer-sidebar')) : ?>
	     	<?php dynamic_sidebar( 'footer-sidebar' ); ?>
	     <?php else : ?> 
	     <?php endif; ?>


      <?php $footer_logo = cs_get_option('footer_logo'); ?>
        <?php if($footer_logo) : ?>
        <style>
           .page__footer:after {  
                background-image: url(<?php echo $footer_logo; ?>);
            } 
      </style>

      <?php else : ?>
          <style>
          .page__footer:after {  
                background-image: url(http://digitaljourney.com/wp-content/uploads/2016/11/handsome_logo_footer-1.png);
            } 
          </style>
          
      <?php endif; ?>


     
      </footer>


    </div>
</div><!-- End Page wrapper -->

    

  
  <script type='text/javascript' src='<?php echo get_template_directory_uri(); ?>/js/bootstrap.min.js'></script>
  <script type='text/javascript' src='<?php echo get_template_directory_uri(); ?>/js/vendor.js'></script>
  <script type='text/javascript' src='<?php echo get_template_directory_uri(); ?>/js/setting.js'></script>
  <?php wp_footer(); ?>

  </body>
</html>