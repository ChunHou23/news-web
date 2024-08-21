import { Col, Container, Row } from "react-bootstrap";
import { connect } from 'react-redux';
import HeaderComponent from "../component/HeaderComponent";
import { findNewsData } from '../redux/actions/NewsAction';
import NewsInfoComponent from "../component/NewsInfoComponent";

const HomePage = ({ newsInformation }) => {
    return (
        <>
            <HeaderComponent />
            <Container>
                {
                    newsInformation.length === 0 ? (
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={8}>
                                    <div className="info-box">
                                        No Content
                                    </div>
                                </Col>
                            </Row>  
                        </Container>
                    ) : (
                        newsInformation.map((element, index) => (
                            <NewsInfoComponent key={index} newsInformation={element} />
                        ))
                    )
                }
            </Container>
        </>
    )
}

const mapStateToProps = (state) => ({
    newsInformation: state.newsInfo.articles,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);