import React from "react";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Tile from "./components/Tile";
import bachelorettes from "./bachelorette.json";

class App extends React.Component {
    state = {
        message: "Click an image to start.",
        bachelorettes: bachelorettes,
        unclicked_bachelorette: bachelorettes,
        current_score: 0,
        highest_score: 0
    };

    shuffleTiles = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let random = Math.floor(Math.random() * (i + 1));
            [array[i], array[random]] = [array[random], array[i]];
        };
    };

    selectBachelorette = name => {
        const findBachelorette = this.state.unclicked_bachelorette.find(x => x.name === name);

        if (findBachelorette === undefined) {
            this.setState({
                message: "You lose! Start Over.",
                highest_score: (this.state.current_score > this.state.highest_score) ? this.state.current_score: this.state.highest_score,
                current_score: 0,
                bachelorettes: bachelorettes,
                unclicked_bachelorette: bachelorettes
            });
        } else {
            const newBachelorette = this.state.unclicked_bachelorette.filter(x => x.name !== name);

            this.setState({
                message: "That's right! Click again!",
                current_score: this.state.current_score + 1,
                bachelorettes: bachelorettes,
                unclicked_bachelorette: newBachelorette
            });
        }

        this.shuffleTiles(bachelorettes);

    }

    render() {
        return (
            <Wrapper>
                <Nav 
                message={this.state.message}
                current_score={this.state.current_score}
                highest_score={this.state.highest_score}
                />
                <Jumbotron />
                <div className="game-container d-flex d-flex justify-content-around flex-wrap">
                    {this.state.bachelorettes.map(bachelorette => (
                        <Tile
                            name={bachelorette.name}
                            id={bachelorette.id}
                            key={bachelorette.id}
                            image={bachelorette.image}
                            selectBachelorette={this.selectBachelorette}
                            current_score={this.state.current_score}
                            highest_score={this.state.highest_score}
                        />
                    ))}

                </div>
            </Wrapper>
        )
    };

}

export default App;