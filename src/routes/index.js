import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import PostsScreen from '../pages/PostsScreen';
import CommentsScreen from '../pages/CommentsScreen';

function Routes() {
  return (
    <Switch>
        <Route exact path="/posts" component={PostsScreen} />
        <Route exact path="/post/:id" component={CommentsScreen} />
        <Redirect to="/posts" />
    </Switch>
  )
}

export default Routes;