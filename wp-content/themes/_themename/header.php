<?php
/**
 * 
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _themename
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">

<div class="mask"></div>
	<header id="masthead" class="site-header">
			
			<div class="nav-container">
				<nav id="site-navigation" class="main-navigation" role="navigation">
					<div class="sis-full-width nav-bar">
						<div class="row align-items-center">

							<div id="brandLogo">
								<?php the_custom_logo(); ?>
							</div>

							<div class="mr-auto">		
														
								<?php echo _themename_header_menu()  ?>
							</div>

							<div class="ml-auto  module widget-handle search-widget-handle  d-none d-md-block">
								<div class="search">
									<i class="fa fa-search"></i>
									<span class="title"><?php esc_html_e( "Site Search", 'shapely' ); ?></span>
								</div>
								<div class="function"><?php
									get_search_form(); ?>
								</div>
							</div>
							
							<a href="#" class="watchDemo sis-animation sis-btn"><?= (APT_AFC) ? sanitize_text_field(get_field( 'header_demo_btn', 'option' )) : 'Active AFC'?></a>
							
						
							
								
						
							<a href="#" class="nav-toggle "  aria-hidden="true">Menu</a>


						</div>
					</div>
				</nav><!-- #site-navigation -->
			</div>

	</header><!-- #masthead -->

	<div id="content" class="site-content">
