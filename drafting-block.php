<?php
/**
 * Plugin Name:       Drafting Block
 * Description:       A block for drafting post or page content, which can later be converted to individual blocks for formatting.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       drafting-block
 *
 * @package           a8c-drafting-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 */
function a8c_drafting_block_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'a8c_drafting_block_block_init' );
