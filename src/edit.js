/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { BlockControls, RichText, useBlockProps } from '@wordpress/block-editor';

import { createBlock } from '@wordpress/blocks';

export default function DraftingBlockEdit({
	attributes,
	setAttributes,
	mergeBlocks,
	onReplace,
	className,
	mergedStyle,
}) {
	const { value } = attributes;
	const blockProps = useBlockProps({
		className,
		style: mergedStyle,
	});

	return (
		<>
			<BlockControls group="block"></BlockControls>
			<blockquote {...blockProps}>
				<RichText
					identifier="value"
					multiline
					value={value}
					onChange={(nextValue) =>
						setAttributes({
							value: nextValue,
						})
					}
					onMerge={mergeBlocks}
					aria-label={__('Start drafting')}
					placeholder={__('Start drafting')}
					onReplace={onReplace}
					__unstableOnSplitMiddle={() => createBlock('core/paragraph')}
				/>
			</blockquote>
		</>
	);
}
