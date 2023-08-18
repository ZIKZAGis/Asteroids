import React from 'react'
import {MdClose} from 'react-icons/md'

type ModalProps = {
    children: React.ReactNode
    title: string
    onClose: () => void
}

const Modal = ({children, title, onClose}: ModalProps) => {
    return (
        <>
            <button type='button' onClick={onClose}>
                <MdClose/>
            </button>
            <div>
                <h1>{title}</h1>
                {children}
            </div>
        </>
    )
}

export default Modal