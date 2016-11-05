<?php


				 
/* Slider section  */

vc_map( array(
  "name" => __("Digital Journey Slider", 'Digitaljourney'),
  "base" => "Dj_slider",
  "icon" => "dj_slidericon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Digitaljourney Slider', 'Digitaljourney'),
  "params" => array(
  		
  		array(
		  "type" => "textfield",
		  "heading" => __("Slider Per page", 'Digitaljourney'),
		  "param_name" => "post_per_pages",
		  "admin_label" => true,
		  "value" => __("-1", 'text-domin')
		),
	
  )
) );

				 
/* propestive section  */

vc_map( array(
  "name" => __("Digital Journey Perspectives Fontpage", 'Digitaljourney'),
  "base" => "Dj_font_page_perspectives_item",
  "icon" => "Dj_font_page_perspectives_item_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Digitaljourney Perspectives Font page', 'Digitaljourney'),
  "params" => array(
  		
  		array(
		  "type" => "textfield",
		  "heading" => __("Propestives Item", 'Digitaljourney'),
		  "param_name" => "numberpost",
		  "admin_label" => true,
		  "value" => __("1", 'Digitaljourney')
		),
  		array(
		  "type" => "textfield",
		  "heading" => __("Propestives Name of Item", 'Digitaljourney'),
		  "param_name" => "item_name",
		  "admin_label" => true,
		  "value" => __("propestives", 'Digitaljourney')
		),
	
  )
) );


vc_map( array(
  "name" => __("Digital Journey Perspectives", 'Digitaljourney'),
  "base" => "Dj_perspectives",
  "icon" => "Dj_perspectives_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Digitaljourney Perspectives', 'Digitaljourney'),
  "params" => array(
  		
  		array(
		  "type" => "textfield",
		  "heading" => __("Propestives Item", 'Digitaljourney'),
		  "param_name" => "numberpost",
		  "admin_label" => true,
		  "value" => __("1", 'Digitaljourney')
		),
	
  )
) );


/* DJ Button 1 */

vc_map( array(
  "name" => __("DJ Button 1", 'Digitaljourney'),
  "base" => "Dj_button",
  "icon" => "dj_button_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Add Digitaljourney Button', 'Digitaljourney'),
  "params" => array(
  		 
		array(
		  "type" => "textfield",
		  "heading" => __("Button Link", 'Digitaljourney'),
		  "param_name" => "link",
		  "admin_label" => true,
		  "value" => __("http://example.com/", 'Digitaljourney')
		),
		
		array(
		  "type" => "textfield",
		  "heading" => __("Button Text", 'Digitaljourney'),
		  "param_name" => "button_text",
		  "admin_label" => true,
		  "value" =>  __("View Services", 'Digitaljourney')
		)

  )
) );


/* DJ Button 2 */

vc_map( array(
  "name" => __("DJ Button 2", 'Digitaljourney'),
  "base" => "Dj_button2",
  "icon" => "dj_button2_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Add Digitaljourney Button 2', 'Digitaljourney'),
  "params" => array(
  		 
		array(
		  "type" => "textfield",
		  "heading" => __("Button Link", 'Digitaljourney'),
		  "param_name" => "link",
		  "admin_label" => true,
		  "value" => __("http://example.com/", 'Digitaljourney')
		),
		
		array(
		  "type" => "textfield",
		  "heading" => __("Button Text", 'Digitaljourney'),
		  "param_name" => "button_text",
		  "admin_label" => true,
		  "value" =>  __("View more perspectives", 'Digitaljourney')
		)

  )
) );




/* Services offering title */

vc_map( array(
  "name" => __("DJ services Offering Title", 'Digitaljourney'),
  "base" => "Dj_services_offering_title",
  "icon" => "offering title icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Service Offering Title', 'Digitaljourney'),
  "params" => array(
  		
		array(
		  "type" => "textfield",
		  "heading" => __("Offering Subtitle", 'Digitaljourney'),
		  "param_name" => "services_offering_subtitle",
		  "admin_label" => true,
		  "value" => __("OFFERINGS", 'Digitaljourney')
		),
		array(
		  "type" => "textarea_html",
		  "heading" => __("Offering Title", 'Digitaljourney'),
		  "param_name" => "services_offering_title",
		  "admin_label" => true,
		  "value" =>  __("The Title Content", 'Digitaljourney')
		)

  )
) );


/* page title here */
vc_map( array(
  "name" => __("Page Title", 'Digitaljourney'),
  "base" => "page_title_subtitle",
  "icon" => "page_title_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Add Page Title and sub Title', 'Digitaljourney'),
  "params" => array(

		array(
		  "type" => "textfield",
		  "heading" => __("Page Subtitle", 'Digitaljourney'),
		  "param_name" => "subtitle",
		  "admin_label" => true,
		  "value" => __("Subtitle Here", 'Digitaljourney')
		),
		array(
		  "type" => "textarea_html",
		  "heading" => __("Title", 'Digitaljourney'),
		  "param_name" => "title",
		  "admin_label" => true,
		  "value" => __("Page Ttile Here", 'Digitaljourney')
		)

  )
) );



/* Why Hansome section Content */
vc_map( array(
  "name" => __("Why Handsome Content Section Title", 'Digitaljourney'),
  "base" => "Dj_Whyhandsome_content_section",
  "icon" => "Dj_Whyhandsome_content_section_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Add Why Handsome Content Section Title and sub Title', 'Digitaljourney'),
  "params" => array(

		array(
		  "type" => "textfield",
		  "heading" => __("Page Subtitle", 'Digitaljourney'),
		  "param_name" => "whyhandsome_content_title",
		  "admin_label" => true,
		  "value" => __("Subtitle Here", 'Digitaljourney')
		),
		array(
		  "type" => "textarea_html",
		  "heading" => __("Why", 'Digitaljourney'),
		  "param_name" => "whyhandsome_content",
		  "admin_label" => true,
		  "value" => __("Why Handsome Content Section", 'Digitaljourney')
		)

  )
) );

/* conatct fomr image */
vc_map( array(
  "name" => __("Contact Form Image", 'Digitaljourney'),
  "base" => "contact_form_img",
  "icon" => "contact_form_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Add Contact Form Image', 'Digitaljourney'),
  "params" => array(
  		 array(
		  "type" => "attach_image",
		  "heading" => __("Contact Form Image", 'Digitaljourney'),
		  "param_name" => "img",
		  "value" => "",
		  "description" => __("Select image from media library.", 'Digitaljourney')
		),
  )
) );



/* Contact form and image  */

vc_map( array(
  "name" => __("Contact Form & Image", 'Digitaljourney'),
  "base" => "Dj_contactform",
  "icon" => "Dj_contactform_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Add Contact Form Image', 'Digitaljourney'),
  "params" => array(
  		 array(
		  "type" => "attach_image",
		  "heading" => __("Content Form Image", 'Digitaljourney'),
		  "param_name" => "contactform_img",
		  "value" => "",
		  "description" => __("Select image from media library.", 'Digitaljourney')
		),
		array(
		  "type" => "textfield",
		  "heading" => __("Contact Form text bottom", 'Digitaljourney'),
		  "param_name" => "contact_form_text",
		  "admin_label" => true,
		  "value" => __("Contact Form Text", 'Digitaljourney')
		),
		array(
		  "type" => "textarea_html",
		  "heading" => __("Contact Form", 'Digitaljourney'),
		  "param_name" => "contact_form",
		  "admin_label" => true,
		  "value" => __("Contact Form", 'Digitaljourney')
		)

  )
) );



/* Contact maps and Address */

vc_map( array(
  "name" => __("Contact Us Maps Image & Address", 'Digitaljourney'),
  "base" => "Dj_contactmaps_address",
  "icon" => "Dj_contactmaps_address_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Add Google Maps Image and Address', 'Digitaljourney'),
  "params" => array(
  		 array(
		  "type" => "attach_image",
		  "heading" => __("Content Maps", 'text-domin '),
		  "param_name" => "contactmaps_img",
		  "value" => "",
		  "description" => __("Select image from media library.", 'Digitaljourney')
		),
		array(
		  "type" => "textfield",
		  "heading" => __("Contact Address Title", 'Digitaljourney'),
		  "param_name" => "contact_address_title",
		  "admin_label" => true,
		  "value" => __("Contact Address", 'Digitaljourney')
		),
		array(
		  "type" => "textarea_html",
		  "heading" => __("Contact Address Content", 'Digitaljourney'),
		  "param_name" => "contact_address_content",
		  "admin_label" => true,
		  "value" => __("Contact Address Content", 'Digitaljourney')
		)

  )
) );


/* Location Addresss */

vc_map( array(
  "name" => __("Location Address Contact Page", 'Digitaljourney'),
  "base" => "Dj_contactlocation_address",
  "icon" => "Dj_contactlocation_address_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Create Address Information', 'Digitaljourney'),
  "params" => array(
  		 
		array(
		  "type" => "textfield",
		  "heading" => __("write location", 'Digitaljourney'),
		  "param_name" => "subtitle",
		  "admin_label" => true,
		  "value" => __("Careers", 'Digitaljourney')
		),
		array(
		  "type" => "textarea_html",
		  "heading" => __("Write your Location Address", 'Digitaljourney'),
		  "param_name" => "location",
		  "admin_label" => true,
		  "value" =>  __("<li><a href=''><h2>User Experience Designer</h2><p>Austin, TX</p></a></li>", 'Digitaljourney')
		)

  )
) );



/**============================= case studies ========================**/


vc_map( array(
  "name" => __("Case Studies Items", 'Digitaljourney'),
  "base" => "Dj_case_studies",
  "icon" => "Dj_case_studies_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Set Post Per page', 'Digitaljourney'),
  "params" => array(
  		 
		array(
		  "type" => "textfield",
		  "heading" => __("Post per Pages", 'Digitaljourney'),
		  "param_name" => "numberpost",
		  "admin_label" => true,
		  "value" => __("3", 'Digitaljourney')
		),

  )
) );


/* Dj Section Title */

vc_map( array(
  "name" => __("Dj Section Title", 'Digitaljourney'),
  "base" => "Dj_section_title",
  "icon" => "Dj_section_title_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Add Title and Subtitle', 'Digitaljourney'),
  "params" => array(
  		 
		array(
		  "type" => "textfield",
		  "heading" => __("Section Subtitle", 'Digitaljourney'),
		  "param_name" => "subtitle",
		  "admin_label" => true,
		  "value" => __("Section Subtitle Here.", 'Digitaljourney')
		),
		array(
		  "type" => "textfield",
		  "heading" => __("Section Title", 'Digitaljourney'),
		  "param_name" => "title",
		  "admin_label" => true,
		  "value" =>  __("Title Goes to Here Digitaljourney Section", 'Digitaljourney')
		),
		array(
		  "type" => "textfield",
		  "heading" => __("Text Align", 'Digitaljourney'),
		  "param_name" => "float",
		  "admin_label" => true,
		  "value" =>  __("Write Here Text Align (left, right or center)", 'Digitaljourney')
		),

  )
) );



/* DJ mail Subcriber Form */

vc_map( array(
  "name" => __("Dj Mail Subcriber Form & Image", 'Digitaljourney'),
  "base" => "Dj_mail_subcriber_section",
  "icon" => "Dj_mail_subcriber_section_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Add Mail Subcriber form and Image', 'Digitaljourney'),
  "params" => array(
  		 array(
		  "type" => "attach_image",
		  "heading" => __("Mail Subcriber Image", 'Digitaljourney'),
		  "param_name" => "mail_subcriber_img",
		  "value" => "",
		  "description" => __("Select image from media library.", 'Digitaljourney')
		),
		array(
		  "type" => "textfield",
		  "heading" => __("Mail Subcriber Text", 'Digitaljourney'),
		  "param_name" => "mail_subcriber_text",
		  "admin_label" => true,
		  "value" => __("Mail Subcriber Text", 'Digitaljourney')
		)
		,
		array(
		  "type" => "textarea_html",
		  "heading" => __("Add Mail Subcriber Shortcdoe", 'Digitaljourney'),
		  "param_name" => "mail_form",
		  "admin_label" => true,
		  "value" => __("", 'Digitaljourney')
		)

  )
) );


/* Dj Page item name  */

vc_map( array(
  "name" => __("Dj Page Item", 'Digitaljourney'),
  "base" => "Dj_page_item",
  "icon" => "Dj_page_item_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Add Page Item Here', 'Digitaljourney'),
  "params" => array(
  		 
		array(
		  "type" => "textfield",
		  "heading" => __("Subtile title", 'Digitaljourney'),
		  "param_name" => "subtitle",
		  "admin_label" => true,
		  "value" => __("Add Subtile", 'Digitaljourney')
		),
		array(
		  "type" => "textfield",
		  "heading" => __("Add Page Name", 'Digitaljourney'),
		  "param_name" => "page_name",
		  "admin_label" => true,
		  "value" =>  __("Write Page Name", 'Digitaljourney')
		),
		array(
		  "type" => "textfield",
		  "heading" => __("Add page Link", 'Digitaljourney'),
		  "param_name" => "page_link",
		  "admin_label" => true,
		  "value" =>  __("http://www.example.com", 'Digitaljourney')
		),
	

  )
) );




/**============================= Perspectives ========================**/


vc_map( array(
  "name" => __("Perspectives Items", 'Digitaljourney'),
  "base" => "Dj_perspectives_item",
  "icon" => "Dj_perspectives_item_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Set Post Per page', 'Digitaljourney'),
  "params" => array(
  		 
		array(
		  "type" => "textfield",
		  "heading" => __("Post per Pages", 'Digitaljourney'),
		  "param_name" => "numberpost",
		  "admin_label" => true,
		  "value" => __("3", 'Digitaljourney')
		),

  )
) );


/* Perspectives Articles list*/

vc_map( array(
  "name" => __("Perspectives Title", 'Digitaljourney'),
  "base" => "Dj_perspectives_title",
  "icon" => "Dj_perspectives_title_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Add Perspectives Title', 'Digitaljourney'),
  "params" => array(
  		 
		array(
		  "type" => "textfield",
		  "heading" => __("Add Perspectives Title", 'Digitaljourney'),
		  "param_name" => "title",
		  "admin_label" => true,
		  "value" => __("Perspectives: Thoughts and stories by real Handsome people", 'Digitaljourney')
		),
		
		array(
		  "type" => "textfield",
		  "heading" => __("All Number of Post Content", 'Digitaljourney'),
		  "param_name" => "all_numberof_post_content",
		  "admin_label" => true,
		  "value" =>  __("48 ARTICLES IN 7 JOURNALS", 'Digitaljourney')
		),
  )
) );


/* perspectives airticle */
vc_map( array(
  "name" => __("Perspectives Recent Articles", 'Digitaljourney'),
  "base" => "Dj_recent_post_perspective",
  "icon" => "Dj_recent_post_perspective_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Add erspectives Recent Articles', 'Digitaljourney'),
  "params" => array(
  		 
		array(
		  "type" => "textfield",
		  "heading" => __("Add Section Title", 'Digitaljourney'),
		  "param_name" => "title",
		  "admin_label" => true,
		  "value" => __("Perspectives Recent Articles", 'Digitaljourney')
		),
		
		array(
		  "type" => "textfield",
		  "heading" => __("Set how many number show", 'Digitaljourney'),
		  "param_name" => "numberpost",
		  "admin_label" => true,
		  "value" =>  __("5", 'Digitaljourney')
		),
  )
) );


/* DJ Why Handsome Images */

vc_map( array(
  "name" => __("Dj Why Handsome Images", 'Digitaljourney'),
  "base" => "Dj_whyhandsome_images",
  "icon" => "Dj_whyhandsome_images_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Add Dj Why Handsome Images', 'Digitaljourney'),
  "params" => array(
  		 array(
		  "type" => "attach_image",
		  "heading" => __("Why Handsome Image1", 'Digitaljourney'),
		  "param_name" => "why_handsome_img1",
		  "value" => "",
		  "description" => __("Select image from media library.", 'Digitaljourney')
		),
  		 array(
		  "type" => "attach_image",
		  "heading" => __("Why Handsome Image2", 'Digitaljourney'),
		  "param_name" => "why_handsome_img2",
		  "value" => "",
		  "description" => __("Select image from media library.", 'Digitaljourney')
		),
		

  )
) );



/* DJ Why Handsome Item Image List */

vc_map( array(
  "name" => __("Dj Why Handsome Item With Image list", 'Digitaljourney'),
  "base" => "Dj_whyhandsome_item_img_list",
  "icon" => "Dj_whyhandsome_item_img_list_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Add Dj Why Handsome Item With image List', 'Digitaljourney'),
  "params" => array(
  		 array(
		  "type" => "attach_image",
		  "heading" => __("Why Handsome Image", 'Digitaljourney'),
		  "param_name" => "img",
		  "value" => "",
		  "description" => __("Select image from media library.", 'Digitaljourney')
		),
  		 array(
		  "type" => "textfield",
		  "heading" => __("Why Handsome Item Title", 'Digitaljourney'),
		  "param_name" => "title",
		  "admin_label" => true,
		  "value" =>  __("Add Title", 'Digitaljourney')
		),
  		 array(
		  "type" => "textfield",
		  "heading" => __("Why Handsome Item Number", 'Digitaljourney'),
		  "param_name" => "numberof_item",
		  "admin_label" => true,
		  "value" =>  __("01", 'Digitaljourney')
		),
  		array(
		  "type" => "textarea_html",
		  "heading" => __("Why Handsome Item Content", 'Digitaljourney'),
		  "param_name" => "item_content",
		  "admin_label" => true,
		  "value" => __("Add Content", 'Digitaljourney')
		), 

  )
) );


/* DJ Why Handsome Item List */

vc_map( array(
  "name" => __("Dj Why Handsome Item list", 'Digitaljourney'),
  "base" => "Dj_whyhandsome_item_list",
  "icon" => "Dj_whyhandsome_item_list_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Add Dj Why Handsome Item List', 'Digitaljourney'),
  "params" => array(
  		array(
		  "type" => "textfield",
		  "heading" => __("Why Handsome Item Number", 'Digitaljourney'),
		  "param_name" => "numberof_item",
		  "admin_label" => true,
		  "value" =>  __("02", 'Digitaljourney')
		),
  		 array(
		  "type" => "textfield",
		  "heading" => __("Why Handsome Item Title", 'Digitaljourney'),
		  "param_name" => "title_item_list",
		  "admin_label" => true,
		  "value" =>  __("Add Title", 'Digitaljourney')
		),
  		array(
		  "type" => "textarea_html",
		  "heading" => __("Why Handsome Item Content", 'Digitaljourney'),
		  "param_name" => "content_list",
		  "admin_label" => true,
		  "value" => __("Add Content", 'Digitaljourney')
		), 

  )
) );

/* DJ Why Handsome Features Item List */

vc_map( array(
  "name" => __("Dj Why Handsome Features list", 'Digitaljourney'),
  "base" => "Dj_whyhandsome_features_list",
  "icon" => "Dj_whyhandsome_features_list_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Add Dj Why Handsome Item List', 'Digitaljourney'),
  "params" => array(
  		 array(
		  "type" => "attach_image",
		  "heading" => __("Why Handsome Image", 'Digitaljourney'),
		  "param_name" => "feature_img",
		  "value" => "",
		  "description" => __("Select image from media library.", 'Digitaljourney')
		),
  		 array(
		  "type" => "textfield",
		  "heading" => __("Why Handsome Feature Item Title", 'Digitaljourney'),
		  "param_name" => "feature_title",
		  "admin_label" => true,
		  "value" =>  __("Add Title", 'Digitaljourney')
		),
  		array(
		  "type" => "textarea_html",
		  "heading" => __("Why Handsome Feature Item Content", 'Digitaljourney'),
		  "param_name" => "feature_content",
		  "admin_label" => true,
		  "value" => __("Add Content", 'Digitaljourney')
		), 

  )
) );


/* Services Items list  */

vc_map( array(
  "name" => __("Dj Service Item List", 'Digitaljourney'),
  "base" => "Dj_service_list",
  "icon" => "Dj_service_list_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Add content list here..', 'Digitaljourney'),
  "params" => array(
  		 array(
		  "type" => "textfield",
		  "heading" => __("Service Item Title", 'Digitaljourney'),
		  "param_name" => "service_list_title",
		  "admin_label" => true,
		  "value" =>  __("Add Services Item Title", 'Digitaljourney')
		),
  		 array(
		  "type" => "textfield",
		  "heading" => __("Service Item Content", 'Digitaljourney'),
		  "param_name" => "service_list_content",
		  "admin_label" => true,
		  "value" =>  __("Add Service Item Content", 'Digitaljourney')
		),
  		 
		array(
		  "type" => "textarea_html",
		  "heading" => __("Add Service Item List", 'Digitaljourney'),
		  "param_name" => "service_list",
		  "admin_label" => true,
		  "value" => __("Using ul li style", 'Digitaljourney')
		),
		

  )
) );

/* Dj Single Image */

vc_map( array(
  "name" => __("Dj Single Image", 'Digitaljourney'),
  "base" => "Dj_single_image",
  "icon" => "Dj_single_image_icon",
  "category" =>array('By Digitaljourney', 'Content'),
  "description" => __('Add short desc', 'Digitaljourney'),
  "params" => array(
  		 
		 array(
		  "type" => "attach_image",
		  "heading" => __("Dj singe full Width Image", 'Digitaljourney'),
		  "param_name" => "singe_img",
		  "value" => "",
		  "description" => __("Select image from media library.", 'Digitaljourney')
		),
		

  )
) );


//CUSTOM CONTAINER SECTION


vc_add_param("vc_row", array(
	"type" => "dropdown",
	"group" => "Digitaljourney ROW/CONTAINER",
	"class" => "",
	"heading" => "Type",
	"param_name" => "Dj_section_content",
	
));


