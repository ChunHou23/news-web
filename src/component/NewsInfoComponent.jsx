import { Col, Container, Row } from "react-bootstrap";
import '../stylesheet/NewsInfoComponent.css'; // Import custom CSS for additional styling

const NewsInfoComponent = ({key, newsInformation}) => {
    const handleClickNews = () => {
        window.open(newsInformation.url)
    }
    return (
        <>
            <Container className="mt-5 clickable-container" key={key} onClick={handleClickNews}>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <div className="info-box">
                            <h3>{newsInformation.title}</h3>
                            <img src={newsInformation.urlToImage} />
                            <p>{newsInformation.description}</p>

                            <Row className="pt-5">
                                <strong>Author: {newsInformation.author}</strong>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default NewsInfoComponent;