<?php
 /**
 * Template Name: Sisense Yehuda Raz test
 * Template Post Type: page
 * The template for building landing pages with afc 
 * @package _themename
 */


get_header();
?>


	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<?php if (APT_AFC) {?>
					<?php  get_template_part('./page-templates/template-parts/banner');?>
					<?php  get_template_part('./page-templates/template-parts/sis-add-show-post');?>
					<?php  get_template_part('./page-templates/template-parts/join-us');?>
					<?php  get_template_part('./page-templates/template-parts/webinar');?>
					<?php  get_template_part('./page-templates/template-parts/learn-about');?>

				
			<?php }
			else{
				?>
				<h1>Active AFC</h1>
				<?php
			}?>	
				
			
		</main><!-- #main -->
	</div><!-- #primary -->



<?php
get_footer();



