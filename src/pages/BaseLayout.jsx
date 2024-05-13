import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Container, Row, Col } from "react-grid-system"
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { ModalContext } from "../contexts/ModalContext"
import { Modal } from "../components/Modal/Modal"

export const BaseLayout = () => {

    const theme = useContext(ThemeContext)
    const { modalVisibility, modalText } = useContext(ModalContext)

    const containerStyle = {
        backgroundColor: theme.colors.white,
        padding: '0 60px'
    };

    const rowStyle = {
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
        <Container style={containerStyle}>
            <Row style={rowStyle} justify="center" align="center" >
                <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                    <Header/>
                    <Outlet />
                    { modalVisibility && <Modal $fontSize={`${theme.spacing.l}`}>{ modalText }</Modal>}
                </Col>
            </Row>
        </Container>
    )
}