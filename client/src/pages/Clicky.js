import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
//import Card from "../components/Card";
//import CardTop from "../components/Card-Top";
import API from "../utils/API";

class Clicky extends Component {
    state = {
        bachelorettes: [],
        src: "",
        clicked: false,
        current_score: 0,
        highest_score: 0
    };

    componentDidMount() {
        this.loadBachelorettes();
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    loadBachelorettes = () => {
        API.getBachelorettes()
        .then(res =>
            this.setState({bachelorettes: res.data})
        )
        .catch(err => console.log(err));
    };

    render() {
        return (
            <Container fluid>
                <Jumbotron />
                <Row>
                    <Col size="md-3">
                        <div className="card">
                            <img className="card-img-top" alt="Bachelor Contestant" src="/assets/bachelorette_1.jpg"/>
                        </div>
                    </Col>
                    <Col size="md-3">
                        <div className="card">
                            <img className="card-img-top" alt="Bachelor Contestant" src="/assets/bachelorette_2.jpg"/>
                        </div>
                    </Col>
                    <Col size="md-3">
                        <div className="card">
                            <img className="card-img-top" alt="Bachelor Contestant" src="/assets/bachelorette_3.jpg"/>
                        </div>
                    </Col>
                    <Col size="md-3">
                        <div className="card">
                            <img className="card-img-top" alt="Bachelor Contestant" src="/assets/bachelorette_4.jpg"/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-3">
                        <div className="card">
                            <img className="card-img-top" alt="Bachelor Contestant" src="/assets/bachelorette_5.jpg"/>
                        </div>
                    </Col>
                    <Col size="md-3">
                        <div className="card">
                            <img className="card-img-top" alt="Bachelor Contestant" src="/assets/bachelorette_6.jpg"/>
                        </div>
                    </Col>
                    <Col size="md-3">
                        <div className="card">
                            <img className="card-img-top" alt="Bachelor Contestant" src="/assets/bachelorette_7.jpg"/>
                        </div>
                    </Col>
                    <Col size="md-3">
                        <div className="card">
                            <img className="card-img-top" alt="Bachelor Contestant" src="/assets/bachelorette_8.jpg"/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-3">
                        <div className="card">
                            <img className="card-img-top" alt="Bachelor Contestant" src="/assets/bachelorette_9.jpg"/>
                        </div>
                    </Col>
                    <Col size="md-3">
                        <div className="card">
                            <img className="card-img-top" alt="Bachelor Contestant" src="/assets/bachelorette_10.jpg"/>
                        </div>
                    </Col>
                    <Col size="md-3">
                        <div className="card">
                            <img className="card-img-top" alt="Bachelor Contestant" src="/assets/bachelorette_11.jpg"/>
                        </div>
                    </Col>
                    <Col size="md-3">
                        <div className="card">
                            <img className="card-img-top" alt="Bachelor Contestant" src="/assets/bachelorette_12.jpg"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        );   
    }
}

export default Clicky;

