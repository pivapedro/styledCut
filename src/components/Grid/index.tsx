import React from 'react';
import { Container } from './styles';

interface PropsGrid {
    col: number;
}

export const Grid: React.FC<PropsGrid> = ({ children, col, ...attr }) => {
    return <Container {...attr}>{children}</Container>;
};
