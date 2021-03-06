import React from "react";
import {useDispatch} from "react-redux";

import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

import moment from "moment";
import useStyles from "./styles";

import {deletePost, likePost} from "../../../actions/posts";

const Post = ({post, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: "White"}} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography color="textSecondary" variant="body2">{post.tags.map(tag => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5">{post.title}</Typography>
            <CardContent>
                <Typography color="textSecondary" component="p"  variant="body2">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button color="primary" onClick={() => dispatch(likePost(post._id))} size="small">
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button color="primary" onClick={() => dispatch(deletePost(post._id))} size="small">
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;