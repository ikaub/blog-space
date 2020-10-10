import React from "react";
import {useLocation} from "react-router-dom";
import {Post_I} from "../redux/types";
import {Container, Typography, makeStyles} from "@material-ui/core";
import CommentsSection from "../components/comments-section.component";

const PostPage: React.FC = () => {

    const currentPost: Post_I = useLocation().state as Post_I;
    const styles = useStyles();

    return (
        <Container className={styles.page}>
            <Typography component="h1" variant="h1">
                {currentPost.title}
            </Typography>
            <Typography color="textSecondary" className={styles.article}>
                {currentPost.body}
            </Typography>
            <CommentsSection currentPost={currentPost}/>
        </Container>
    );
}

const useStyles = makeStyles(() => ({
    page: {
        padding: "1rem"
    },

    article: {
        fontSize: "1.4rem",
        margin: "2rem 0"
    }
}));

export default PostPage;