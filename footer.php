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

    


  <?php $ganalytics = cs_get_option('ganalytics'); ?>
      <?php if($ganalytics) : ?>
      <script>
         (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
               (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
               m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
         })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

         ga('create', '<?php echo $ganalytics; ?>', 'auto');
         ga('send', 'pageview');
      </script>
    <?php endif; ?>
  <?php wp_footer(); ?>

  </body>
</html>