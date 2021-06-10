/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { align, value } = attributes;

	return (
		<blockquote {...useBlockProps.save()}>
			<RichText.Content multiline value={value} />
		</blockquote>
	);
}
