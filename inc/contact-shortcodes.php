<?php 

/** contact page title **/

function page_title_shortcode_func( $atts ) {
    extract( shortcode_atts( array(
    'subtitle' => 'Contact Us',
    'title' => 'View Services',
   ), $atts) );


 ob_start();

 ?>
<header class="section-header section-header--centered section-header--masthead">
	<h4><?php echo $subtitle; ?></h4>
	<h1 style="max-width:84rem"><?php echo $title; ?></h1>
</header>


 <?php 
 $html = ob_get_contents();
 ob_get_clean();
 return $html;
}

add_shortcode('page_title_subtitle', 'page_title_shortcode_func');


// contact form 
function dj_contactform_shortcode_func( $atts ) {

extract( shortcode_atts( array(
    'contact_form_text' => 'Love filling out forms? Click Here.',
    'contactform_img' => 'http://localhost/digitaljourney/wp-content/uploads/2016/10/map@2x.jpg',
    'contact_form' => ' ',

   ), $atts) );

$image = wp_get_attachment_image_src( $contactform_img, 'full');
	$image_src = $image['0'];	

 ob_start();

 ?>


 <div class="container">
              <div class="form-section">
                  <div>
                      <div class="tabs">

                        <div class="tab tab-1 ">
                          <h3>New Business</h3>
                          <p><a class="mailto" href="mailto:john@handsome.is">John Roescher <br /><span>john@handsome.is</span></a></p>
                          <h3>Careers</h3>
                          <p><a class="mailto" href="mailto:careers@handsome.is">Josh Babetski <br /><span>careers@handsome.is</span></a></p>
                          <h3>Media &amp; Other</h3>
                          <p><a class="mailto" href="mailto:valerie@handsome.is">Valerie Vacante <br /><span>valerie@handsome.is</span></a></p>
                          <p class="tab-toggle"><?php echo $contact_form_text; ?></p>
                        </div>

                        <div class="tab tab-2 tab-active">

                        <?php echo $contact_form; ?>

                          <form class="contact-form" novalidate="novalidate">

                            <div class="form-input">
                              <label>My name is</label>
                              <div id="name-input-wrap" class="form-input__inline">
                                <input type="text" name="NAME" required>
                                <p class="error-message">Please enter your name. </p>
                              </div>
                              <label class="and-desktop">and</label>
                            </div>


                            <div id="subject-input-wrap" class="form-input">
                              <label><span class="and-mobile">and</span> I want to talk about</label>
                              <div  class="form-input__inline">
                                <div class="custom-select">
                                  <select name="SUBJECT"  style="width: 100%" required>
                                    <option value="New Business" selected="selected">new business</option>
                                    <option value="Career">a career</option>
                                    <option value="Media">media or other</option>
                                  </select>
                                </div>
                                <p class="error-message subject-error-message">Tell us what you are interested in.</p>
                              </div>
                            </div>

                            <div class="form-input">
                              <label>My email address is</label>
                              <div class="form-input__inline" id="email-input-wrap">
                                <input type="email" name="email_address" required>
                                <p class="error-message">Please enter a valid email address.</p>
                              </div>
                            </div>

                            <div class="form-input">
                              <textarea name="MESSAGE" placeholder="Optional details"></textarea>
                            </div>

                            <div class="form-input">
                              <button type="submit" class="arrow-check-btn">
                                <span class="arrow-check-btn__text">Submit</span>
                                <span class="arrow-check">
                                  <svg id="form-arrow-svg" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid">
                                    <g class="arrow-group"><path id="arrow" d="M 3,3  8,3  13,8  8,13  3,13  8,8  3,3 Z"></path></g>
                                  </svg>
                                </span>
                              </button>
                            </div>

                          </form>

                          <p class="tab-toggle"><?php echo $contact_form_text; ?></p>
                        </div>
                      </div>
                </div>

                <div style="background: url(<?php echo $image_src;  ?>)no-repeat center center; background-size:cover;"></div>

              </div>
            </div>

 <?php 
 $html = ob_get_contents();
 ob_get_clean();
 return $html;
}

add_shortcode('Dj_contactform', 'dj_contactform_shortcode_func');






/*contact form image */
function contactimg_shortcode_func( $atts ) {
    extract( shortcode_atts( array(
    'con_img' => 'http://localhost/digitaljourney/wp-content/uploads/2016/11/contact-b.jpg',
    'title' => 'View Services',
   ), $atts) );


 ob_start();

 ?>





<div style="background:url(<?php echo $con_img; ?>) no-repeat center center; background-size:cover;"></div>

 <?php 
 $html = ob_get_contents();
 ob_get_clean();
 return $html;
}

add_shortcode('contact_img', 'contactimg_shortcode_func');





// contact maps and image
/*

function dj_contactmap_shortcode_func( $atts ) {
    extract( shortcode_atts( array(
    'contact_address_title' => 'Stop by our Austin office',
    'contactmaps_img' => 'http://localhost/digitaljourney/wp-content/uploads/2016/10/services-business@2x.jpg',
    'contact_address_content' => 'add your content',

   ), $atts) );


 ob_start();

 ?>


  <div class="container">
    <div class="hrow">
      <div class="hrow__col1" style="background:url(<?php echo $contactmaps_img; ?>)"></div>
      <div class="hrow__col2">
        <div class="hrow__text">
          <h3><?php echo $contact_address_title; ?></h3>
          <address>
            <?php echo $contact_address_content; ?>
          </address>
        </div>
      </div>
    </div>
  </div>
 <?php 
 $html = ob_get_contents();
 ob_get_clean();
 return $html;
}

add_shortcode('Dj_contactmaps_address', 'dj_contactmap_shortcode_func');

*/



if(!function_exists('dj_contactmap_shortcode_func')) {
	function dj_contactmap_shortcode_func( $atts, $content =  null) {
		extract(shortcode_atts(array(
			'contactmaps_img' => 'http://localhost/digitaljourney/wp-content/uploads/2016/10/map@2x.jpg',
			'contact_address_content' => 'content ',
			'contact_address_title' => 'title',			
		), $atts ));
		
	$image = wp_get_attachment_image_src( $contactmaps_img, 'full');
	$image_src = $image['0'];	
	$output = '
				 


            <div class="container">
              <div class="hrow">
                <div class="hrow__col1" style="background-image:url('.$image_src.')"></div>
                <div class="hrow__col2">
                  <div class="hrow__text">
                    <h3>'.$contact_address_title.'</h3>
                    <address>
                     '.$contact_address_content.'
                    </address>
                  </div>
                </div>
              </div>
            </div>
					
				 ';
	return $output;
}
add_shortcode( 'Dj_contactmaps_address', 'dj_contactmap_shortcode_func' );
}




// contact form 
function dj_contact_location_shortcode_func( $atts ) {
    extract( shortcode_atts( array(
    'subtitle' => 'Careers',
    'location' => '<li><a target="_blank" href="#"><h2>User Experience Designer</h2><p>Austin, TX</p></a></li>',

   ), $atts) );


 ob_start();

 ?>


 <div class="container">

    <header class="section-header">
      <h4><?php echo $subtitle; ?></h4>
    </header>


    <div class="team-list">
        

          <?php echo $location; ?>

          
    </div>
  </div>

 <?php 
 $html = ob_get_contents();
 ob_get_clean();
 return $html;
}

add_shortcode('Dj_contactlocation_address', 'dj_contact_location_shortcode_func');
