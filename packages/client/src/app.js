import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Compose = () => <p>Compose</p>
const Edit = () => <p>Edit</p>
const Post = () => <p>Post</p>
const Posts = () => <p>Posts</p>

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/compose" component={Compose} />
        <Route path="/edit" component={Edit} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/posts" component={Posts} />
        <Route render={() => <Redirect to="/posts" />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
