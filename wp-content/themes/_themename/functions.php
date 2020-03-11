<?php
/**
 * _themename functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package _themename
 */

 if ( ! function_exists('write_log')) {
	function write_log ( $log )  {
		if ( is_array( $log ) || is_object( $log ) ) {
			error_log( print_r( $log, true ) );
		} else {
			error_log( $log );
		}
	}
}


// global $APT_AFC;
$is_afc_active;
if( class_exists('acf') ){
	$is_afc_active = TRUE;
}

if ( ! defined( 'APT_AFC' ) ) {
	define( 'APT_AFC', $is_afc_active );
}
/**
 * Theme setup
 */
require get_template_directory() . '/inc/theme-setup.php';


/**
 * Theme widgets
 */
require get_template_directory() . '/inc/theme-widgets.php';

/**
 * Enqueue menus
 */
require get_template_directory() . '/inc/menus.php';




/**
 * Enqueue scripts and styles.
 */
function _themename_scripts() {
	 wp_enqueue_style( '_themename-stylesheet', get_template_directory_uri() . '/dist/css/bundle.css', array(), '1.0.0', 'all' );
	 wp_enqueue_script( '_themename-scripts', get_template_directory_uri() . '/dist/js/bundle.js', array('jquery'), '1.0.0', true );
	 wp_localize_script( '_themename-scripts', 'POST_SUBMITTER', array(
            'root' => esc_url_raw( rest_url() ),
            'nonce' => wp_create_nonce( 'wp_rest' ),
            'success' => __( 'Thanks for your submission!', '_themename' ),
            'failure' => __( 'Your submission could not be processed.', '_themename' ),
			'login' =>is_user_logged_in()
        )
	);
   
	
}
add_action( 'wp_enqueue_scripts', '_themename_scripts' );



/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}









