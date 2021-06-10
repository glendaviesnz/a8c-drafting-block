/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
	AlignmentControl,
	BlockControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";

import { createBlock } from "@wordpress/blocks";

export default function DraftingBlockEdit({
	attributes,
	setAttributes,
	mergeBlocks,
	onReplace,
	className,
	mergedStyle,
}) {
	const { align, value } = attributes;
	const blockProps = useBlockProps({
		className: classnames(className, {
			[`has-text-align-${align}`]: align,
		}),
		style: mergedStyle,
	});

	return (
		<>
			<BlockControls group="block">
				<AlignmentControl
					value={align}
					onChange={(nextAlign) => {
						setAttributes({ align: nextAlign });
					}}
				/>
			</BlockControls>
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
					aria-label={__("Start drafting")}
					placeholder={
						// translators: placeholder text used for the quote
						__("Start drafting")
					}
					onReplace={onReplace}
					__unstableOnSplitMiddle={() => createBlock("core/paragraph")}
					textAlign={align}
				/>
			</blockquote>
		</>
	);
}
