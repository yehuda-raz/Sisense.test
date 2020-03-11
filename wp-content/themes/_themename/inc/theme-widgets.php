<?php
/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function _themename_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', '_themename' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', '_themename' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', '_themename_widgets_init' );


/*
 * Search Widget
 */
function _themename_search_form( $form ) {
	$form = '<form role="search" method="get" id="searchform"  class="search-form" action="' . esc_url( home_url( '/' ) ) . '" >
	<label>
		<span class="screen-reader-text">' . esc_html__( 'Search for:', '_themename' ) . '</span>
		<input type="text" class="search-field" placeholder="' . esc_html__( 'Type Here', '_themename' ) . '" value="' . esc_attr( get_search_query() ) . '" name="s">
	</label>
	<input type="submit" class="search-submit sis-btn btn btn-fillded searchsubmit" id="searchsubmit" value="' . esc_attr__( 'Search', '_themename' ) . '" />
    </form>';

	return $form;
}

add_filter( 'get_search_form', '_themename_search_form', 100 );


// function shapely_search_form( $form ) {
// 	$form = '<form role="search" method="get" id="searchform" class="search-form" action="' . esc_url( home_url( '/' ) ) . '" >
//     <label class="screen-reader-text" for="s">' . esc_html__( 'Search for:', 'shapely' ) . '</label>
//     <input type="text" placeholder="' . esc_html__( 'Type Here', 'shapely' ) . '" type="text" value="' . esc_attr( get_search_query() ) . '" name="s" id="s" />
//     <input type="submit" class="btn btn-fillded searchsubmit" id="searchsubmit" value="' . esc_attr__( 'Search', 'shapely' ) . '" />

//     </form>';

// 	return $form;
// }

// add_filter( 'get_search_form', 'shapely_search_form', 100 );