import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from '../../components/elements/Header/Header';
import Home from '../../components/Home/Home';
import NotFound from "../elements/NotFound/NotFound";
import Movie from "../Movie/Movie";

const App= () => {
  return (
      <BrowserRouter>
          <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/:movieId" component={Movie} exact/>
                <Route component={NotFound}/>
            </Switch>
          </div>
      </BrowserRouter>
  )
};

export default App;