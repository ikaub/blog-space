import React from "react";
import {useLocation} from "react-router-dom";
import {Post_I} from "../../redux/types";
import {Container, Typography, makeStyles} from "@material-ui/core";

const PostPage: React.FC = () => {

    const {title, id, body} = useLocation().state as Post_I;
    const styles = useStyles();

    return (
        <Container className={styles.page}>
            <Typography component="h1" variant="h2">
                {title}
            </Typography>
            <Typography color="textSecondary" className={styles.article}>
                {body}
            </Typography>

        </Container>
    );
}

const useStyles = makeStyles(() => ({
    page: {
        padding: "2rem"
    },

    article: {
        fontSize: "1.6rem",
        margin: "2rem 0"
    }
}));

export default PostPage;