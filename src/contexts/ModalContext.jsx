import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ( { children } ) => {
    const [modalVisibility, setModalVisibility] = useState(false)
    const [modalData, setModalData] = useState('')

    const openModal = (data) => {
        setModalData(data);
        setModalVisibility(true);
    } 

    const closeModal = () => {
        setModalData('');
        setModalVisibility(false);
    } 

    const context = { modalVisibility, 
                      setModalVisibility, 
                      modalData, 
                      setModalData, 
                      openModal, 
                      closeModal }

    return (
        <ModalContext.Provider value={context}>
            { children }
        </ModalContext.Provider>
    )
}