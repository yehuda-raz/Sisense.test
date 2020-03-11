<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _themename
 */

?>

	</div><!-- #content -->


	<footer id="colophon" class="site-footer" >

		<div class="container-lg">
			<div class="row main-footer">

				<div class='col-md-8  footer-menu-continer'>
					<?php 	echo _themename_Footer_menu() ?>
				</div>

				<div class='col-md-4 text-center social-footer'>
				
					<h6><?= (APT_AFC) ? wp_kses_post(get_field( 'social_header_text', 'option' )) : 'Active AFC'?></h6>
					<?php if (APT_AFC) {?>
						<div class="row">
							<?php
								if ( have_rows( 'social_buttons', 'option' ) ) :
									?>
										
									<?php
									while ( have_rows( 'social_buttons', 'option' ) ) :
										the_row();
										?>
										<div class="col sis-circle-col ">
											<a class=" social-circle" target="_blank" href="<?php esc_url_raw(the_sub_field( 'social_links', 'option' )); ?>"><i class="fab <?php sanitize_text_field( the_sub_field( 'font_awesome_icon', 'option' )); ?>"></i></a>

										</div>
									<?php
									endwhile;
								endif;
							?>
						</div>
					<?php }?>	
				</div>
				
			</div>	
		</div>

		<div class="sis-full-width">
			<div class="row ">
				<div class="col d-flex flex-column flex-md-row align-items-md-center">
					<div class="sis-copyright">
						<span><?= (APT_AFC) ? sanitize_text_field(get_field( 'copyright_text', 'option' )) : 'Active AFC'?></span>
					</div>

					<div class="ml-md-auto sis-footer-sub-menu">
						<?php 	echo _themename_Footer_sub_menu() ?>
					</div>
				</div>

			</div>
		</div>

	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
