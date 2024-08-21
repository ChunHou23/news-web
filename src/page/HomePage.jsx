import { Col, Container, Row } from "react-bootstrap";
import { connect } from 'react-redux';
import HeaderComponent from "../component/HeaderComponent";
import NewsInfoComponent from "../component/NewsInfoComponent";
import { TailSpin } from 'react-loader-spinner';

const HomePage = ({ newsInformation, loading }) => {
    console.log("isloafing", loading)
    if (loading) {
        return (
            <div className="spinner-container">
                <TailSpin color="#00BFFF" height={80} width={80} />
            </div>
        );
    }
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
    loading: state.newsInfo.loading,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);