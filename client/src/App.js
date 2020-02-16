import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Clicky from "./pages/Clicky";
import GameOver from "./pages/GameOver";
import Nav from "./components/Nav";

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Clicky} />
                    <Route exact path="/game-over" component={GameOver} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;