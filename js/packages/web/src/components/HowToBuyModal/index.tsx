import { InstructionsModal } from '../InstructionsModal';
import React from 'react';
import { LABELS } from '../../constants';
import { ConnectButton } from '@oyster/common';

interface HowToBuyModalProps {
  buttonClassName: string;
  onClick?: any;
}

export const HowToBuyModal: React.FC<HowToBuyModalProps> = ({
  buttonClassName,
  onClick,
}) => {
  return (
    <InstructionsModal
      buttonClassName={buttonClassName}
      buttonText="How to Buy"
      modalTitle={`Buying ET-NFTs on SB2J`}
      cardProps={[
        {
          title: 'Create a SOL wallet',
          imgSrc: '/modals/how-to-buy-1.svg',
          description: `SOL is the cryptocurrency we use for purchases on SB2J. To keep your SOL safe, you’ll need a crypto wallet.`,
        },
        {
          title: 'Add funds to your wallet',
          imgSrc: '/modals/how-to-buy-2.svg',
          description: `To fund your wallet, you’ll need to purchase SOL tokens.`,
        },
        {
          title: `Connect your wallet to SB2J.`,
          imgSrc: '/modals/how-to-buy-3.jpg',
          description: `To connect your wallet, tap “Connect Wallet” here on the site.`,
          endElement: <ConnectButton className={'secondary-btn'} />,
        },
      ]}
      onClick={onClick}
    />
  );
};
