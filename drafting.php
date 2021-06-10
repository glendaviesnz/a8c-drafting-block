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
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'a8c_draft_block_init' );
