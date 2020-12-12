import React from "react";
import {useSelector} from "react-redux";

import {CircularProgress, Grid} from "@material-ui/core";

import Post from "./Post/Post";

import useStyles from "./styles";

const Posts = ({post, setCurrentId}) => {
    const classes = useStyles();
    const posts = useSelector(state => state.posts);
    
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid alignItems="stretch" className={classes.container} container spacing={3}>
                {posts.map(post => (
                    <Grid key={post._id} item sm={6} xs={12}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;