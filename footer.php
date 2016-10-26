  
      <footer class="page__footer">

		 <?php if (is_active_sidebar('footer-sidebar')) : ?>
	     	<?php dynamic_sidebar( 'footer-sidebar' ); ?>
	     <?php else : ?> 
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