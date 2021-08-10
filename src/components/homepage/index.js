import React from 'react'
import { connect } from 'react-redux'
import { Col, Container, Row } from 'reactstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.div`
    height: 50px;
`
const HomePage = () => {
    return (
        <div style={{ height: 100 }}>
            <Container>
                <Col>
                    <Row>
                        <Nav className="d-flex justify-content-between align-items-center">
                            <Col xl={6}></Col>
                            <Col
                                xl={6}
                                className="d-flex justify-content-between"
                            >
                                <Link to="/signin">sign in</Link>
                                <Link to="/register">register</Link>
                            </Col>
                        </Nav>
                    </Row>
                </Col>
            </Container>
            {/* <TransferModal /> */}
        </div>
    )
}

const mapStateToProps = (state) => ({
    isSignedIn: state.user.signIn.isSignedIn,
})
export default connect(mapStateToProps, {})(HomePage)
