import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ( { children } ) => {
    const [modalVisibility, setModalVisibility] = useState(false)
    const [modalText, setModalText] = useState('')

    const openModal = (text) => {
        setModalText(text);
        setModalVisibility(true);
    } 

    const closeModal = () => {
        setModalText('');
        setModalVisibility(false);
    } 

    const context = { modalVisibility, setModalVisibility, modalText, openModal, closeModal }

    return (
        <ModalContext.Provider value={context}>
            { children }
        </ModalContext.Provider>
    )
}