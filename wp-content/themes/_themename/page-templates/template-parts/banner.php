<?php
/**
 * Section 1 Banner
 *
 * @author Yehuda raz
 * @package _themename
 * @since   1.0.0
 */

?>


<section id="banner"  style=" background-image : url(<?php echo esc_url_raw(get_field( 'banner_image' )) ?>">

	<div class="container-lg">
		<div class="row">
			
		
				<div class="col my-lg-5 my-md-4">
					<h2 class="mb-3"><?php echo  sanitize_text_field(get_field('banner_title')) ?></h2>
					<p><?php echo  sanitize_text_field(get_field('banner_run_text')) ?></p>		
				</div>
			

		</div><!-- .row -->
	</div><!-- .container-lg -->

 </section>
    

    