<?php 

/* Why handsome images  */


function Dj_whyhandsome_images_shortcode_func($atts ) {

extract( shortcode_atts( array(
   
    'why_handsome_img1' => 'http://localhost/digitaljourney/wp-content/uploads/2016/11/why-topright@2x.jpg',
    'why_handsome_img2' => 'http://localhost/digitaljourney/wp-content/uploads/2016/10/cs-entryfield@2x.jpg',

   ), $atts) );

	$image1 = wp_get_attachment_image_src( $why_handsome_img1, 'full');
	$image2 = wp_get_attachment_image_src( $why_handsome_img2, 'full');
	$image_src1 = $image1['0'];	
	$image_src2 = $image2['0'];	


	ob_start();
	?>
    
	 <div class="image-row image-row--2 ">
        <div class="image-row__img"></div>
        <div class="image-row__img"></div>
      </div>

       <style type="text/css">
        .page-why-handsome .image-row__img:nth-child(1) {
			    background-image: url(<?php echo $image_src1; ?>);
			}
		.page-why-handsome .image-row__img:nth-child(2) {
			    background-image: url(<?php echo $image_src2; ?>);
			}	
      </style>

	 <?php 
	 $html = ob_get_contents();
	 ob_get_clean();
	 return $html;
	}

add_shortcode('Dj_whyhandsome_images', 'Dj_whyhandsome_images_shortcode_func');



/* Why Handsome items with Image list */

function Dj_whyhandsome_item_img_list_func($atts ) {

extract( shortcode_atts( array(
   
    'img' => 'http://localhost/digitaljourney/wp-content/uploads/2016/11/why-topright@2x.jpg',
    'title' => 'Title Here',
    'item_content' => 'Content Goes To Here',
    'numberof_item' => '01',


   ), $atts) );

	$img = wp_get_attachment_image_src( $img, 'full');
	
	$image = $img['0'];	

	ob_start();
	?>
      <div class="block-grid__item block-grid__item--featured">
        <div>            
          <div class="block-grid__item__img">
          	<img src="<?php echo $image; ?>" >
          </div>
          <div class="block-grid__item__content">
          	<div class="number_item"><?php echo $numberof_item; ?></div>
            <h3><?php echo $title; ?></h3>
            <p><?php echo $item_content; ?></p>
          </div>
        </div>

      </div>          

	 <?php 
	 $html = ob_get_contents();
	 ob_get_clean();
	 return $html;
	}

add_shortcode('Dj_whyhandsome_item_img_list', 'Dj_whyhandsome_item_img_list_func');




/* Why Handsome items list */

function Dj_whyhandsome_item_list_func($atts ) {

extract( shortcode_atts( array(  
    'title_item_list' => 'Title Here',
    'content_list' => 'Content Goes To Here',
    'numberof_item' => '02',
   ), $atts) );

	ob_start();
	?>
       <div class="block-grid__item">
        <div>
            <div class="block-grid__item__content">
            	<div class="number_item"><?php echo $numberof_item; ?></div>
              <h3><?php echo $title_item_list; ?></h3>
              <p><?php echo $content_list; ?></p>
            </div>
        </div>
      </div>
	 <?php 
	 $html = ob_get_contents();
	 ob_get_clean();
	 return $html;
	}

add_shortcode('Dj_whyhandsome_item_list', 'Dj_whyhandsome_item_list_func');



/* Why Handsome Features  list */

function Dj_whyhandsome_features_list_func($atts ) {

extract( shortcode_atts( array(
   
    'feature_img' => 'http://localhost/digitaljourney/wp-content/uploads/2016/11/why-topright@2x.jpg',
    'feature_title' => 'Title Here',
    'feature_content' => 'Content Goes To Here',


   ), $atts) );

	$img = wp_get_attachment_image_src( $feature_img, 'full');
	
	$image_fea = $img['0'];	
	

	ob_start();
	?>
  <div class="col-md-12">
     <div class="card-grid__item">
        <div class="card-grid__item-img_custom">
          
          <img src="<?php echo $img['0']; ?>" class="img-responsive">
        </div>
       
        <div class="card-grid__item-content">
          <h3><?php echo $feature_title; ?></h3>
          <p><?php echo $feature_content; ?></p>
        </div>
      </div>
      </div>
    
	 <?php 
	 $html = ob_get_contents();
	 ob_get_clean();
	 return $html;
	}

add_shortcode('Dj_whyhandsome_features_list', 'Dj_whyhandsome_features_list_func');

