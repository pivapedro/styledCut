import React from 'react';
import { Icon } from '../Icons';
import { Container } from './styles';

interface PropsAlert {
    icon: Boolean;
    closable: Boolean;
    label: string;
    status: Boolean;
    type: 'error' | 'alert' | 'sucess' | 'info' | 'primary';
}

export const Alert: React.FC<PropsAlert> = ({
    icon,
    closable,
    label,
    status,
    type,
}) => {
    return (
        <Container className={type} >
            {icon && <Icon name="tags" type={type} />}
            {status && <>{type}</>}
            <label>{label}</label>
            {closable && <Icon name="tags" type="close" />}
        </Container>
    );
};
