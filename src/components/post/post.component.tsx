import React from "react";
import {Card, CardContent, Typography, CardActions, Button, makeStyles} from "@material-ui/core";
import {Post_I} from "../../redux/types";
import {useHistory} from "react-router-dom";

const Post: React.FC<Post_I> = ({title, body, id}: Post_I) => {

    const styles = useStyles();
    const history = useHistory();

    const handleCLick = () => {
        history.push({
            pathname: `/posts/${id}`,
            state: {title, body, id}
        });
    }

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography noWrap className={styles.title} variant="h2">
                    {title}
                </Typography>
                <Typography noWrap className={styles.article} component="div" variant="body2">
                    {body}
                </Typography>
            </CardContent>
            <CardActions className={styles.buttonContainer}>
                <Button variant="contained" className={styles.button} onClick={handleCLick}>
                    Learn more...
                </Button>
            </CardActions>
        </Card>
    );
}

const useStyles = makeStyles(() => ({
    title: {
        fontWeight: "normal",
        fontSize: "3rem"
    },

    article: {
        fontSize: "1.4rem"
    },

    buttonContainer: {
        padding: "16px"
    },

    button: {
        backgroundColor: "black",
        color: "white",
        transition: ".4s",
        fontSize: "1.2rem",

        '&:hover': {
            backgroundColor: "white",
            color: "black"
        }
    }
}));

export default Post;