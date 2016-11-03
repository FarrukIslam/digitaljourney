<?php 

add_action( 'init', 'digitaljourney_slider_init' );

function digitaljourney_slider_init() {
	$labels = array(
		'name'               => _x( 'Sliders', 'Digitaljourney Sliders', 'digitaljourney' ),
		'singular_name'      => _x( 'Slider', 'Digitaljourney Slider', 'digitaljourney' ),
		'menu_name'          => _x( 'DJ Slider', 'admin menu', 'digitaljourney' ),
		'name_admin_bar'     => _x( 'Slider', 'add new on admin bar', 'digitaljourney' ),
		'add_new'            => _x( 'Add DJ New Slider', 'slider', 'digitaljourney' ),
		'add_new_item'       => __( 'Add New Slider', 'digitaljourney' ),
		'new_item'           => __( 'New Slider', 'digitaljourney' ),
		'edit_item'          => __( 'Edit Slider', 'digitaljourney' ),
		'view_item'          => __( 'View Slider', 'digitaljourney' ),
		'all_items'          => __( 'All DJ Sliders', 'digitaljourney' ),
		'search_items'       => __( 'Search Sliders', 'digitaljourney' ),
		'parent_item_colon'  => __( 'Parent Sliders:', 'digitaljourney' ),
		'not_found'          => __( 'No Sliders found.', 'digitaljourney' ),
		'not_found_in_trash' => __( 'No Sliders found in Trash.', 'digitaljourney' )
	);

	$args = array(
		'labels'             => $labels,
        'description'        => __( 'Digitaljourney Slider Section.', 'digitaljourney' ),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'slider' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'menu_icon'           => 'dashicons-slides',
		'hierarchical'       => false,
		'menu_position'      => null,
		'supports' 			 => array(  'editor', 'thumbnail', 'comments' ),
	);

	register_post_type( 'Dj_slider', $args );
}

//meta box area show above on editor 
function slider_title_editor_regination_fun() {
    # Get the globals:
    global $post, $wp_meta_boxes;

    # Output the "advanced" meta boxes:
    do_meta_boxes(get_current_screen(), 'slider_title_editor', $post);

    # Remove the initial "advanced" meta boxes:
    unset($wp_meta_boxes['Dj_slider']['slider_title_editor']);

}

add_action('edit_form_after_title', 'slider_title_editor_regination_fun');


function slider_ttile_metaboxes(){
	add_meta_box(
		'slider_title_editor',
		'Slider Title Editor',
		'callbackfun_slider_ttile',
		'Dj_slider',
		'slider_title_editor',
		'high'
	
	);	

}
add_action('add_meta_boxes','slider_ttile_metaboxes');

function callbackfun_slider_ttile(){
	?>
	<label for="djslider_title">
	<?php echo __('Enter Slider Title','digitaljourney'); ?></label>
	<p>
		<textarea cols="50" rows="5" name="djslider_title"  class="widefat" />
			<?php echo  get_post_meta(get_the_ID(),'djslider_title',true); ?>
		</textarea>
	</p>	
	<?php 
}

function save_post_meta_slider_ttile($post_id){

	$value = isset($_POST['djslider_title']) ? $_POST['djslider_title'] : '';
	
	update_post_meta($post_id,'djslider_title',$value );	

}
add_action('save_post','save_post_meta_slider_ttile');


/* propestive post type */


add_action( 'init', 'digitaljourney_perspectives_init' );

function digitaljourney_perspectives_init() {
	$labels = array(
		'name'               => _x( 'Perspectives', 'Digitaljourney perspectives', 'digitaljourney' ),
		'singular_name'      => _x( 'perspective', 'Digitaljourney perspective', 'digitaljourney' ),
		'menu_name'          => _x( 'DJ perspectives', 'admin menu', 'digitaljourney' ),
		'name_admin_bar'     => _x( 'perspectives', 'add new on admin bar', 'digitaljourney' ),
		'add_new'            => _x( 'Add DJ New perspective', 'perspective', 'digitaljourney' ),
		'add_new_item'       => __( 'Add New perspective', 'digitaljourney' ),
		'new_item'           => __( 'New perspectives', 'digitaljourney' ),
		'edit_item'          => __( 'Edit perspective', 'digitaljourney' ),
		'view_item'          => __( 'View perspective', 'digitaljourney' ),
		'all_items'          => __( 'All DJ perspectives', 'digitaljourney' ),
		'search_items'       => __( 'Search perspectives', 'digitaljourney' ),
		'parent_item_colon'  => __( 'Parent perspectives:', 'digitaljourney' ),
		'not_found'          => __( 'No perspectives found.', 'digitaljourney' ),
		'not_found_in_trash' => __( 'No perspectives found in Trash.', 'digitaljourney' )
	);

	$args = array(
		'labels'             => $labels,
        'description'        => __( 'Digitaljourney perspectives Section.', 'digitaljourney' ),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'perspectives' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'menu_icon'           => 'dashicons-groups',
		'hierarchical'       => false,
		'menu_position'      => null,
		'supports' 			 => array(  'title','editor', 'thumbnail', 'excerpt' ),
	);

	register_post_type( 'Dj_perspectives', $args );
}


/* Case Studies post type */


add_action( 'init', 'digitaljourney_case_studies_init' );

function digitaljourney_case_studies_init() {
	$labels = array(
		'name'               => _x( 'Case Studies', 'Digitaljourney Case Studies', 'digitaljourney' ),
		'singular_name'      => _x( 'Case study', 'Digitaljourney Case Studies', 'digitaljourney' ),
		'menu_name'          => _x( 'DJ Case Studies', 'admin menu', 'digitaljourney' ),
		'name_admin_bar'     => _x( 'Case Studies', 'add new on admin bar', 'digitaljourney' ),
		'add_new'            => _x( 'Add DJ New Case Studies', 'Case Studies', 'digitaljourney' ),
		'add_new_item'       => __( 'Add New Case Studies', 'digitaljourney' ),
		'new_item'           => __( 'New Case Studies', 'digitaljourney' ),
		'edit_item'          => __( 'Edit Case Studio', 'digitaljourney' ),
		'view_item'          => __( 'View Case Studio', 'digitaljourney' ),
		'all_items'          => __( 'All DJ Case Studies', 'digitaljourney' ),
		'search_items'       => __( 'Search Case Studies', 'digitaljourney' ),
		'parent_item_colon'  => __( 'Parent Case Studies:', 'digitaljourney' ),
		'not_found'          => __( 'No Case Studies found.', 'digitaljourney' ),
		'not_found_in_trash' => __( 'No Case Studies found in Trash.', 'digitaljourney' )
	);

	$args = array(
		'labels'             => $labels,
        'description'        => __( 'Digitaljourney Case Studies Section.', 'digitaljourney' ),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'case-studies' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'menu_icon'           => 'dashicons-portfolio',
		'hierarchical'       => false,
		'menu_position'      => null,
		'supports' 			 => array(  'title','editor', 'thumbnail', 'excerpt' ),
	);

	register_post_type( 'Dj_case_studies', $args );
}

