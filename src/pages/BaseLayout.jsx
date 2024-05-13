import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Container, Row, Col } from "react-grid-system"
import { useContext } from "react"
import { ThemeContext } from "styled-components"

export const BaseLayout = () => {

    const theme = useContext(ThemeContext)

    return (
        <Container style={{ backgroundColor: theme.colors.white, padding: '60px', marginTop: '86px' }}>
            <Row style={{ minHeight: '100vh'}} justify="center" align="start" >
                <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                    <Header/>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}