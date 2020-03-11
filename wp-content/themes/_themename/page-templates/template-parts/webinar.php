<?php
/**
 * Section 4 - Webinar
 *
 * @author Yehuda raz
 * @package _themename
 * @since   1.0.0
 */

?>


<section id="webinar" >

			<div class="container-lg">
				<div class="row align-items-center">

					<div class="col-md-6">
				        <h4 class="mb-1"><?php echo  sanitize_text_field(get_field('webinar_title')) ?></h4>
						<h3 ><?php echo  sanitize_text_field(get_field('webinar_sub_title')) ?></h3>
						<p class="mt-3 mb-4"><?php echo  sanitize_text_field(get_field('webinar_run_text')) ?></p>
                        <a href="#" class="sis-arrow-link mb-3 mb-md-0"><?php echo  sanitize_text_field(get_field('webinar_call_to_action_text')) ?></a>
					</div>
					
					<div class="col-md-6  text-center">
						<a href="#" class="sis-video-look">
								<img class="sis-max-w" src="<?php echo esc_url_raw(get_field( 'webinar_section_image' )); ?>" />	
								<i class="far fa-play-circle"></i>
						</a>
					</div>

			</div><!-- .row -->
		</div><!-- .container-lg -->

</section>
    

    