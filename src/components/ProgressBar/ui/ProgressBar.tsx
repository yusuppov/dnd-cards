import { FC } from 'react';
import { ProgressBarProps } from '../types';
import { ProgressContainer, ProgressFiller } from './ProgressBar.styled';

export const ProgressBar: FC<ProgressBarProps> = ({ completed, ...props }) => {
  return (
    <ProgressContainer {...props}>
      <ProgressFiller completed={completed} />
    </ProgressContainer>
  );
};
