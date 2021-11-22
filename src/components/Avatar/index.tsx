import React, { ReactChild } from 'react';
import { Container } from './styles';
interface PropsAvatar {
    fullName?: string;
    icon?: ReactChild;
    photo?: string;
}
export const Avatar: React.FC<PropsAvatar> = ({ fullName, icon, photo }) => {
    const initialName = (name) => {
        const temp = name.split(' ');
        const firstName = temp[0];
        const lastName = temp[temp.length - 1];

        return `${firstName[0] + lastName[0]}`;
    };
    if (fullName) {
        return <Container className='initial'>{initialName(fullName)}</Container>;
    } else if (photo) {
        return <Container className='photo'><img src={photo} alt='' /></Container>;
    } else if (icon) {
        return <Container className='icon'>{icon}</Container>;
    } else {
        return null;
    }
};
