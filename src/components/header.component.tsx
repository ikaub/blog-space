import React from "react";
import {AppBar, Toolbar, Button, Typography, makeStyles} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const Header: React.FC = () => {

    const history = useHistory();
    const styles = useStyles();

    return (
        <AppBar position="sticky">
            <Toolbar className={styles.toolbar}>
                <Button color="inherit" onClick={() => history.push("/")}>
                    <Typography variant="h6">
                        Main
                    </Typography>
                </Button>
                <Button color="inherit" onClick={() => history.push("/posts/new")}>
                    <Typography variant="h6">
                        Add new post
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
}

const useStyles = makeStyles(() => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    }
}));

export default Header;