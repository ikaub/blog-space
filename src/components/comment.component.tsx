import React from "react";
import {Avatar, Card, CardContent, CardHeader, makeStyles} from "@material-ui/core";
import {Comment_I} from "../redux/types";
import {blue} from "@material-ui/core/colors";

const Comment: React.FC<{ comment: Comment_I}> = ({comment} : {comment: Comment_I}) => {

    const styles = useStyles();

    return (
        <Card className={styles.card}>
            <CardHeader
                avatar={
                    <Avatar color="primary" className={styles.avatar}>
                        {comment.author[0].toUpperCase()}
                    </Avatar>
                }
                title={comment.author}
                titleTypographyProps={{variant: "h6"}}
            />
            <CardContent>
                {comment.content}
            </CardContent>
        </Card>
    );
}

const useStyles = makeStyles(() => ({
    card: {
        marginTop: "1.5rem"
    },

    avatar: {
        backgroundColor: blue[700]
    }
}));

export default Comment;