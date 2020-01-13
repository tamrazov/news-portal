import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header.js'
import Post from './components/Post.js'

import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'
import AddPost from './pages/AddPost'
import Auth from './pages/Auth.js';


function App() {
  return (
    <Router>
      <div className="main-wrapper container">
        <Header />
        <Switch>
          <Route exact path="/" render={() => {
            return <Redirect to="/Auth" />
          }} />
          <Route path="/Auth" exact component={Auth}  />
          <Route path="/Home" exact component={Home}  />
          <Route path="/About" component={About} />
          <Route path="/Category" component={Category} />
          <Route path="/AddPost" component={AddPost} />
          <Route path="/Post/:id" component={Post} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;