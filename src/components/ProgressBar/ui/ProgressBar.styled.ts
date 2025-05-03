import styled from 'styled-components';

export const ProgressContainer = styled.div`
    width: 100%;
    background-color: rgba(231, 232, 234, 1);
    border-radius: 999px;
    height: 12px;
`
export const ProgressFiller = styled.div<{completed: number}>`
    width: ${({ completed }) => completed}%;
    background-color: rgba(83, 123, 243, 1);
    transition: 1s all;
    border-radius: 999px;
    height: 100%;
`