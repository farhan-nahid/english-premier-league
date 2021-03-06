import {
    BrowserRouter as Router,

    Route, Switch
} from "react-router-dom";
import Home from './Component/Home/Home';
import NavBar from "./Component/NavBar/NavBar";
import NotFound from "./Component/NotFound/NotFound";
import TeamDetails from "./Component/TeamDetails/TeamDetails";


function App() {
  return (
      <Router>
          <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/team/:idTeam">
                    <TeamDetails />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
      </Router>  
  );
}

export default App;
