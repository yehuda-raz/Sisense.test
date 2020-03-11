<?php
/**
 * Register Menus
 * register menus in WordPress
 * creates menu functions for use in theme
 *
 * @author  Yehuda raz
 * @package _themename
 * @since   1.0.0
 * @link    http://codex.wordpress.org/Function_Reference/wp_nav_menu
 
 */
 
add_action( 'init', '_themename_register_menus' );

function _themename_register_menus() {

	/**z
	 * Register navigation menus for a theme.
	 *
	 * @since 1.0.0
	 *
	 * @param array $locations Associative array of menu location identifiers (like a slug) and descriptive text.
	 */


	$menus = get_theme_support( '_themename-menus' );

	if ( ! is_array( $menus[0] ) ) {
		return;
	}

	if ( in_array( 'header-menu', $menus[0] ) ) {
		register_nav_menu( 'header-menu', esc_html__( 'Header menu', '_themename' ) );
	}


	if ( in_array( 'footer-menu', $menus[0] ) ) {
		register_nav_menu( 'footer-menu', esc_html__( 'Footer menu', '_themename' ) );
	}
	if ( in_array( 'footer-sub-menu', $menus[0] ) ) {
		register_nav_menu( 'footer-sub-menu', esc_html__( 'Footer sub menu', '_themename' ) );
	}


}

/**
 * Main menu
 *
 * @since 1.0.0
 * @see   wp_nav_menu
 *
 * @param array $locations Associative array of menu location identifiers (like a slug) and descriptive text.
 */

if ( ! function_exists( '_themename_header_menu' ) ) {
	function _themename_header_menu() {

		$defaults = array(
			'theme_location' => 'header-menu',
			'container'      => false,
			'depth'          => 5,
			'echo'           => false,
			'fallback_cb'    => '_themename_menu_fallback',
			'menu_class'     => 'nav nav-sis  align-items-center header-menu-lp1'
		);

		$menu = wp_nav_menu( $defaults );
		return $menu;

	}
}



if ( ! function_exists( '_themename_Footer_menu' ) ) {
	function _themename_Footer_menu() {

		$defaults = array(
			'theme_location' => 'footer-menu',
			'container'      => false,
			'depth'          => 5,
			'echo'           => false,
			'fallback_cb'    => '_themename_menu_fallback',
			'menu_class'     => 'footer-menu flex-column flex-sm-row nav '
		);

		$menu = wp_nav_menu( $defaults );
		return $menu;

	}
}



if ( ! function_exists( '_themename_Footer_sub_menu' ) ) {
	function _themename_Footer_sub_menu() {

		$defaults = array(
			'theme_location' => 'footer-sub-menu',
			'container'      => false,
			'depth'          => 5,
			'echo'           => false,
			'fallback_cb'    => '_themename_menu_fallback',
			'menu_class'     => 'footer-sub-menu  align-items-center nav nav-pills'
		);

		$menu = wp_nav_menu( $defaults );
		return $menu;

	}
}







function init_Theme_setup() {
	add_theme_support(
		'_themename-menus',
		array( 'header-menu' ,'footer-menu' ,'footer-sub-menu') 
	);
}

//theme setup
add_action( 'after_setup_theme', 'init_Theme_setup', 11 );

