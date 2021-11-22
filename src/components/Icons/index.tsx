import React, { Fragment } from 'react';

import { Container } from './styles';

interface IconProps {
    name:
        | 'menu'
        | 'user'
        | 'arrow'
        | 'filter'
        | 'money'
        | 'shop'
        | 'time'
        | 'search'
        | 'notification'
        | 'archive'
        | 'files'
        | 'companies'
        | 'setting'
        | 'tags'
        | 'grid'
        | 'support'
        | 'computers'
        | 'content'
        | 'type'
        | 'design'
        | 'business'
        | 'messages'
        | 'location'
        | 'media'
        | 'building'
        | 'weather'
        | 'transport'
        | 'school'
        | 'diverse';
    type: string;
}

export const Icon: React.FC<IconProps> = ({ name, type }) => {
    const useIcon = (name: IconProps['name'], type: IconProps['type']) => {
        switch (name) {
            case 'menu':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'user':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'arrow':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'filter':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'money':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'shop':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'time':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'search':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'notification':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'archive':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }

            case 'files':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'archive':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'companies':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'setting':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'tags':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'grid':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'support':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'computers':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'content':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'type':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'design':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'business':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'messages':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'location':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'media':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'building':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'weather':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'transport':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'school':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }
            case 'diverse':
                switch (type) {
                    case 'category':
                        return (
                            <>
                                <svg></svg>
                            </>
                        );

                    default:
                        break;
                }

            default:
                return null;
        }
    };
    return <Container>{useIcon(name, type)}</Container>;
};
