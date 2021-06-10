/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { ToolbarButton } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { rawHandler } from '@wordpress/blocks';
import { store as blockEditorStore } from '@wordpress/block-editor';

const ConvertToBlocksButton = ({ clientId, content }) => {
	const { replaceBlocks } = useDispatch(blockEditorStore);
	const block = useSelect(
		(select) => {
			return select(blockEditorStore).getBlock(clientId);
		},
		[clientId]
	);
	return (
		<ToolbarButton onClick={() => replaceBlocks(block.clientId, rawHandler({ HTML: content }))}>
			{__('Convert to blocks')}
		</ToolbarButton>
	);
};

export default ConvertToBlocksButton;
