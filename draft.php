<?php
/**
 * Plugin Name:       Draft Block
 * Description:       A block for drafting post or page content, which can later be converted to individual blocks for formatting.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            @glendaviesnz
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       draft-block
 *
 * @package           a8c-draft-block
 */
function a8c_draft_block_init() {
	register_block_type_from_metadata( 
		__DIR__,
		array(
			'render_callback' => 'render_block_draft',
		),
	);
}
add_action( 'init', 'a8c_draft_block_init' );

function render_block_draft( $attributes, $content ) {
	if ( ! current_user_can( 'editor' ) && ! current_user_can( 'administrator' ) ) {
		return;
	}
	$draft_label = '<div class="wp-block-a8c-draft__label">' . __( 'Draft content: only visible to editors' ) . '</div>';
	return $draft_label . $content;
}
