/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { BlockControls, RichText, useBlockProps } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';

import ConvertToBlocksButton from './convert-to-blocks';

export default function DraftEdit({
	attributes,
	setAttributes,
	mergeBlocks,
	onReplace,
	className,
	mergedStyle,
	clientId,
}) {
	const { content } = attributes;
	const blockProps = useBlockProps({
		className,
		style: mergedStyle,
	});

	return (
		<>
			<BlockControls group="block">
				<ConvertToBlocksButton clientId={clientId} content={content} />
			</BlockControls>
			<section {...blockProps}>
				<RichText
					identifier="value"
					multiline
					value={content}
					onChange={(nextValue) =>
						setAttributes({
							content: nextValue,
						})
					}
					onMerge={mergeBlocks}
					aria-label={__('Start drafting')}
					placeholder={__('Start drafting')}
					onReplace={onReplace}
					__unstableOnSplitMiddle={() => createBlock('core/paragraph')}
				/>
			</section>
		</>
	);
}
