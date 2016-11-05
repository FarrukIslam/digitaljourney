<?php 
/* Case Studies shortcodes */


function Dj_casestudies_shortcode_func($atts,$post_ID) {

   extract( shortcode_atts( array(
    'numberpost' => '1',
   ), $atts) );


	ob_start();
	?>
     <section class="case-study-list__wrapper content-section">
         <ul class="case-study-list">

		<?php 

		  $Dj_case_studies_item = new wp_Query(array(
			'post_type' => 'Dj_case_studies',
			'posts_per_page' => $numberpost
		  ));
		  
		   while( $Dj_case_studies_item -> have_posts() ) : $Dj_case_studies_item -> the_post();
			$post_thumbnail_id = get_post_thumbnail_id($post_ID);
			$image_case_studies = wp_get_attachment_image_src($post_thumbnail_id, 'djcasestudies350x225');
		?>


		 <li class="case-study-list__item">
                <a href="<?php the_permalink(); ?>" class="case-study-list__item__image">
                <img width="1200" height="800" src="<?php echo $image_case_studies[0]; ?>" /></a>
                <h3 class="case-study-list__item__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                <p>
                 <?php the_excerpt();  ?><br />
                  <a href="<?php the_permalink(); ?>">Read more...</a>
                </p>
              </li>

     <?php endwhile; ?>


     </ul>
    </section>


 <?php 
 $html = ob_get_contents();
 ob_get_clean();
 return $html;
}

add_shortcode('Dj_case_studies', 'Dj_casestudies_shortcode_func');


/* Section title shortcodes */


function Dj_sectiontitle_shortcode_func($atts,$post_ID) {

   extract( shortcode_atts( array(
    'subtitle' => 'Section Subtitle',
    'title' => 'Section Title',
    'float'   => 'left',
   ), $atts) );

	ob_start();
	?>
    
	<header class="section-header">
	  <h4><?php echo $subtitle; ?></h4>
	  <h1><?php echo $title; ?></h1>
	</header>

  

	<style>
		.section-header {
		    text-align: <?php echo $float; ?> !important;
		}
		<?php if($float == 'left') :

		echo '.section-header h1 {    
		    text-align: '.$float.';
		}';

		else :
			echo '.section-header h1 {
			    max-width: 960px;
			    max-width: 96rem;
			    margin: 0 auto;
			    line-height: 1.5;
			}';
		endif;
		?>
	</style>

	 <?php 
	 $html = ob_get_contents();
	 ob_get_clean();
	 return $html;
	}

add_shortcode('Dj_section_title', 'Dj_sectiontitle_shortcode_func');



/* Section Mail Subcriber Fomr shortcodes */


function Dj_mailsubcriber_form_shortcode_func($atts ) {

extract( shortcode_atts( array(
    'mail_subcriber_text' => 'Enter your email and a strategist will be in touch with you shortly.',
    'mail_subcriber_img' => 'http://localhost/digitaljourney/wp-content/uploads/2016/10/cs-entryfield@2x.jpg',
    'mail_form' => '<form novalidate="novalidate">
                      <p class="email-field-wrap">
                        <span class="your-email">
                          <input type="email" name="your-email" placeholder="Enter email address" />
                        </span>
                        <button class="arrow-check-btn" type="submit">
                          <span class="arrow-check">
                            <svg id="form-arrow-svg" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid">
                               <g class="arrow-group"><path id="arrow" d="M 3,3  8,3  13,8  8,13  3,13  8,8  3,3 Z" /></g>
                            </svg>
                          </span>
                        </button>
                      </p>
                    </form>',

   ), $atts) );

$image = wp_get_attachment_image_src( $mail_subcriber_img, 'full');
	$image_src = $image['0'];	



	ob_start();
	?>
    
	   <div class="casestudy-form">
              <div class="casestudy-form__image"></div>
              <div class="casestudy-form__form-wrap">
                <div class="casestudy-form__form">
                  <h3 class="casestudy-title"><?php echo $mail_subcriber_text; ?></h3>
                  <div class="casestudy-form__form__inner">


                  <?php  echo $mail_form; ?>


                    <p class="msg sendingMsg">Sending...</p>
                    <p class="msg successMsg">We got it. Thanks!</p>
                    <div class="progress-bar"><div class="progress-bar__progress"></div></div>
                  </div>
                </div>
              </div>
            </div>

             <style type="text/css">
            .casestudy-form__image {
				    padding-bottom: 190px;
				    padding-bottom: 19rem;
				    background: url(<?php echo $image_src; ?>) no-repeat;
				    background-size: cover;
				}
          </style>

	 <?php 
	 $html = ob_get_contents();
	 ob_get_clean();
	 return $html;
	}

add_shortcode('Dj_mail_subcriber_section', 'Dj_mailsubcriber_form_shortcode_func');




/* Section pages shortcodes */


function Dj_page_item_shortcode_func($atts ) {

extract( shortcode_atts( array(
    'page_link' => 'http://digitaljourney.com',
    'subtitle' => 'A vision, an approach and a team',
    'page_name' => 'Why Handsome',

   ), $atts) );


	ob_start();
	?>
    
	  <div>
              <div class="page-list__item">
                <a href="<?php echo $page_link; ?>">
                  <h3><?php echo $subtitle; ?></h3>
                  <p><?php echo $page_name; ?></p>
                </a>
                <div class="page-list__item__hover"></div>
              </div>
            
</div>            

	 <?php 
	 $html = ob_get_contents();
	 ob_get_clean();
	 return $html;
	}

add_shortcode('Dj_page_item', 'Dj_page_item_shortcode_func');


