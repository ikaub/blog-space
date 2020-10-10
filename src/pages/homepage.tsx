import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Post_I, PostState_I} from "../redux/types";
import {fetchPosts} from "../redux/actions";
import Post from "../components/post.component";
import {Grid, makeStyles, Container} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    page: {
        paddingTop: "3rem"
    }
}));

const HomePage: React.FC = () => {

    const posts: Post_I[] = useSelector((state: PostState_I) => state.posts);
    const dispatch = useDispatch();
    const styles = useStyles();

    useEffect(() => {
        if (!posts.length) {
            dispatch(fetchPosts());
        }
    }, [posts, dispatch]);

    return (
        <Container maxWidth="xl">
            <Grid className={styles.page} container spacing={3}>
                {
                    posts.map(post => (
                        <Grid key={post.id} item xs={12} sm={6} md={4}>
                            <Post {...post}/>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
}

export default HomePage;