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

    return (
        <Container style={{ backgroundColor: theme.colors.white, padding: '0 60px'}}>
            <Row style={{ minHeight: '100vh'}} justify="center" align="center" >
                <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                    <Header/>
                    <Outlet />
                    { modalVisibility && <Modal><p style={{fontSize: theme.spacing.l}}>{ modalText }</p></Modal>}
                </Col>
            </Row>
        </Container>
    )
}