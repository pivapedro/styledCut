import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import closeBtn from '../../assets/icon/closeModal.svg'

interface PropsModal {
    open: boolean,
    setOpen: (e: boolean) => any,
    title: string
}

export const Modal: React.FC<PropsModal> = ({ open, setOpen, title, children, ...attrs }) => {
    const toggleModal = () => {
        setOpen(!open)
    }
    return (
        <Container {...attrs} open={open} >
            <div>
                <header>
                    <h4>{title}</h4>
                    <div onClick={() => toggleModal()}>
                        <img src={closeBtn} alt='Fechar' />
                    </div>

                </header>
                <div className='content'>
                    {children}
                </div>
            </div>

        </Container>
    )
}
