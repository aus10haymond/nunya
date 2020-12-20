import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import ScavengerHunt from "./pages/ScavengerHunt";

function App() {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/scavengerhunt" component={ScavengerHunt} />
        </Router>
    );
}

export default App;