import React from "react";
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    IconButton,
    makeStyles,
    CardHeader
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {Post_I} from "../redux/types";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deletePost} from "../redux/actions";

const Post: React.FC<Post_I> = ({title, body, id, comments}: Post_I) => {

    const styles = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const handleCLick = () => {
        history.push({
            pathname: `/posts/${id}`,
            state: {title, body, id, comments}
        });
    }

    const handleDeletePost = () => {
        dispatch(deletePost(id));
    }

    return (
        <Card variant="outlined">
            <CardHeader action={
                <IconButton onClick={handleDeletePost}>
                    <CloseIcon/>
                </IconButton>
            }/>
            <CardContent>
                <Typography noWrap className={styles.title} variant="h2">
                    {title}
                </Typography>
                <Typography noWrap component="div" variant="body2">
                    {body}
                </Typography>
            </CardContent>
            <CardActions className={styles.buttonContainer}>
                <Button variant="contained" color="primary" onClick={handleCLick}>
                    Learn more...
                </Button>
            </CardActions>
        </Card>
    );
}

const useStyles = makeStyles(() => ({
    title: {
        fontWeight: "normal",
        fontSize: "2.2rem"
    },

    buttonContainer: {
        padding: "16px"
    },
}));

export default Post;