import React, { Fragment } from 'react';

import { Container } from './styles';

export interface PropsButton
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
export const Button: React.FC<PropsButton> = ({ children, ...attrs }) => {
    return (
        <Fragment>
            <Container {...attrs}>{children}</Container>
        </Fragment>
    );
};
