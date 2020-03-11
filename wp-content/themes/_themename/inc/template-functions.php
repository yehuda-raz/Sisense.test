<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package _themename
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function _themename_body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'no-sidebar';
	}

	return $classes;
}
add_filter( 'body_class', '_themename_body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function _themename_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', '_themename_pingback_header' );



// if( function_exists('acf_add_options_page') ) {
//     acf_add_options_page();
// }

// add_action('acf/init', 'my_acf_op_init');
// function my_acf_op_init() {

//     // Check function exists.
//     if( function_exists('acf_add_options_page') ) {

//         // Register options page.
//         $option_page = acf_add_options_page(array(
//             'page_title'    => __('Theme General Settings'),
//             'menu_title'    => __('Theme Settings'),
//             'menu_slug'     => 'theme-general-settings',
//             'capability'    => 'edit_posts',
//             'redirect'      => false
//         ));
//     }
// }

add_action('acf/init', 'my_acf_op_init');
function my_acf_op_init() {

    // Check function exists.
    if( function_exists('acf_add_options_page') ) {

        // Add parent.
        $parent = acf_add_options_page(array(
            'page_title'  => __('Theme General Settings'),
            'menu_title'  => __('Sisense Settings'),
            'redirect'    => false,
        ));

        // Add sub page.
        $socialLinks = acf_add_options_page(array(
            'page_title'  => __('Social Settings'),
            'menu_title'  => __('Social'),
            'parent_slug' => $parent['menu_slug'],
		));
		
    }
}