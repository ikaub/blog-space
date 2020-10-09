import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import "./basic.styles.scss";
import HomePage from "./pages/homepage/homepage";
import PostPage from "./pages/post/post-page";
import CreatePostPage from "./pages/create-post/create-post-page";

const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/posts/new" component={CreatePostPage} />
            <Route path="/posts/:id" component={PostPage} />
            <Route path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
    );
}

export default App;
