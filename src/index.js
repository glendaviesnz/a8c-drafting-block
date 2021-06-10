/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { pencil as icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import './style.scss';
import edit from './edit';
import save from './save';

registerBlockType('a8c/draft', {
	icon,
	edit,
	save,
});
