<?php
/**
 * Section 3 -Join US
 *
 * @author Yehuda raz
 * @package _themename
 * @since   1.0.0
 */

?>


<section id="join-us" class="text-center">
	<div class="container-lg">

			<div class="row">
				<div class="col  mx-auto">
					<h3 class="mb-5"><?php echo  sanitize_text_field(get_field('join_us_tille')) ?></h3>

					<div class=sis-flex-3-row>
						<?php
							if ( have_rows( 'join_us_team') ) :
								?>
									
								<?php
								while ( have_rows( 'join_us_team') ) :
									the_row();
									?>

									<figure class="avatar mb-4 mb-sm-5">
										<div class="">
											<img class="" src="<?php echo esc_url_raw(the_sub_field( 'join_us__team_member_image' )); ?>">
										</div>	
										<figcaption class="">
											<h6 class="team-member-name mb-1 mt-3"><?php echo  sanitize_text_field(the_sub_field('join_us__team_member_name')) ?></h6>
											<p class="team-member-role"><?php echo  sanitize_text_field(the_sub_field('join_us__team_member_role')) ?></p>
										</figcaption>

									</figure>


								
								<?php
								endwhile;
							endif;
						?>
					</div>

				</div><!-- .col -->
			</div><!-- .row -->



			<div class="row">
				<div class="col-md-8  mx-auto mb-md-3">
			
						<p> <span class="mb-3 d-block"><?php echo  sanitize_text_field(get_field('join_us_run_text')) ?></span>
							<a href="#" class="sis-btn btn-cta sis-animation text-center mt-3"><?php echo  sanitize_text_field(get_field('join_us_meeting_btn_text')) ?></a>
						</p>
					
			
				</div><!-- .col -->
			</div><!-- .row -->


	</div><!-- .container-lg -->
</section>
    