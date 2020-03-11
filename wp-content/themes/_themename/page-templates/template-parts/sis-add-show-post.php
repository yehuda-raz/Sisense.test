<?php
/**
 * Section 2 -Add Show post 
 *
 * @author Yehuda raz
 * @package _themename
 * @since   1.0.0
 */




?>


	<section id="AddShowPost" class="">
		
			<div class="container-lg">
				<div class="row">
					<div class="col-lg-6 col-md-6 mr-auto ">

							<img class="sis-max-w mb-5" src="<?php echo esc_url_raw(get_field( 'add_show_post__section_image' )); ?>" />
							
							<div class="sis-slider">
								<div class="sis-slider-wrap">
										<?php 
										// the query
										$the_query = new WP_Query( array(
											'posts_per_page' => 1,
										)); 
										?>

										<?php if ( $the_query->have_posts() ) : ?>
											<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

												<article>
														<h3><?php the_title(); ?></h3>
														<p class="date-create"><?php echo get_the_date( ); ?>  <?php the_time(); ?></p>
														<?php the_excerpt(); ?>
												</article>
												
											
											
											
											
												

											<?php endwhile; ?>
											<?php wp_reset_postdata(); ?>

										<?php else : ?>
											<p><?php __('No News'); ?></p>
										<?php endif; ?>
											
								
								</div>
							</div>
                
					</div><!-- .col -->

					<div class="col-lg-5 col-md-6 ">
						<div id="sis-add-post">

							<div class="sis-add-post-continer">
								
								<div class="sis-add-post-row">
									<div class='triangle'></div>
									<h3 class="mb-0 sis-add-post-x  text-center"><?php echo  sanitize_text_field(get_field('post_form__header_test')) ?></h3>
								</div><!-- .sis-add-post-row -->
									
															
								<div class="sis-add-post-x sis-add-post-row">
									<form id="sis-add-post-submission-form">

										<div class="form-group">
											<input type="text" name="sis-add-post-title" class="form-control" id="sis-add-post-title"   placeholder="<?php echo  sanitize_text_field(get_field('post_form__post_tile_placeholder_text')) ?>">
										</div>
						
										<div class="form-group">
											<textarea rows="6" cols="20" name="sis-add-post-excerpt"  class="form-control" id="sis-add-post-excerpt"   placeholder="<?php echo  sanitize_text_field(get_field('post_form__post_run_text')) ?>"></textarea>
										</div>
										<div class='err_msg'><?php //echo  sanitize_text_field(get_field('post_form__post_tile_placeholder_text')) ?> </div>
										<button type="submit" class="mb-lg-2 mt-lg-5 text-center mx-auto d-block sis-btn btn-cta sis-animation "><?php echo  sanitize_text_field(get_field('post_form__send_btn')) ?></button>
								
									</form>

									<p class="py-4 pb-lg-5 disclimer"><?php echo  sanitize_text_field(get_field('post_form__disclimer_text')) ?></p>
								</div><!-- .sis-add-post-row -->

								
							</div><!-- .sis-add-post-continer -->

						<div class="loader-div justify-content-center align-items-center">
										<div class="loader"></div> 
						</div>

						<div id="confirm_msg" class="col py-3 px-4 "> 
							<div>
							<p class="d-flex justify-content-center align-items-center"0><?php echo esc_html__( 'Thanks for adding a post look', '_themename' ) ?> </p>
							<i class="fa"></i> 
									</div>
						</div>
						

						</div><!-- .sis-add-post -->

						
					</div><!-- .col -->

				</div><!-- .row -->
			</div><!-- .container-lg -->
		
    </section>
    



<!-- add_show_post__main_image -->
