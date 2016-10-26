<?php get_header(); ?>

    <div class="page__content">
      <div class="content_wrapper ">

     
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

      

    

        <section class="content-section">
           <div class="hero__headline hero__headline--centered hero__headline--homepage">
            <h4><span class="">Welcome to Handsome</span></h4>
            <h1><span class="">We create beautiful experiences</span><br>
              <span class="">that drive successful businesses.</span></h1>
          </div>
          <div class="centered">
    				<div class="entry-content entry-content--homepage">
              <a class="arrow-check-btn arrow-check-btn-full arrow-check-btn-whitebg" href="/services">
                <span class="arrow-check">
                  <span class="arrow-check-copy">View Services</span>
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
        </section>

        
        <section class="featured-blog-posts">
          <div class="content-section">

            <ul class="blog-grid">

              <li class="blog-grid__item">
                <a class="blog-grid__item__content" href="#">
                  <div class="blog-grid__item__img">
                    <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/img/Annette-Headshot-1200x800.jpg" sizes="(max-width: 1200px) 100vw, 1200px" />                  
                  </div>
                  <h4>Perspectives</h4>
                  <h3>Annette Neu Joins Handsome as a User Experience Designer!</h3>
                  <p class="readmore_p">
                    <span class="readmore">Read it now</span>
                  </p>
                </a>
              </li>

              <li class="blog-grid__item">
                <a class="blog-grid__item__content" href="#">
                  <div class="blog-grid__item__img">
                    <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/img/dsc08235-1200x800.jpg" class="wp-post-image" alt="dsc08235" srcset="" sizes="(max-width: 1200px) 100vw, 1200px" />
                  </div>
                  <h4>Perspectives</h4>
                  <h3>A look inside design at Handsome with Conner Drew</h3>
                  <p class="readmore_p">
                    <span class="readmore">Read it now</span>
                  </p>
                </a>
              </li>

              <li class="blog-grid__item">
                <a class="blog-grid__item__content" href="#">
                  <div class="blog-grid__item__img">
                    <img width="1200" height="800" src="<?php echo get_template_directory_uri(); ?>/img/Handsome_website_blog_article_Embracing_the_unknown_trusting_the_process-1200x800.png" class="wp-post-image" alt="image" srcset="" sizes="(max-width: 1200px) 100vw, 1200px" />     
                  </div>
                  <h4>Perspectives</h4>
                  <h3>Embracing the unknown, trusting the process.</h3>
                  <p class="readmore_p">
                    <span class="readmore">Read it now</span>
                  </p>
                </a>
              </li>

            </ul>

            <div class="h2style">
              <a class="arrow-check-btn" href="#">
                <span class="arrow-check-btn__text">View more perspectives</span>
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