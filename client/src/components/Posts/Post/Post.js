import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/post";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Post({ post, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [likes, setLikes] = useState(post?.likes);

  const [hasLikedPost, setHasLikedPost] = useState(false);
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const getUserId = async (user) => {
    const decode = await jwtDecode(user?.token);
    const isCustomAuth = user?.token.length < 500;
    if (isCustomAuth) {
      // console.log(decode.id);
      setUserId(decode.id);
    } else {
      // console.log(decode.sub);
      setUserId(decode.sub);
    }

    if (user?.token && userId)
      setHasLikedPost(post.likes.find((like) => like === userId));
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("profile"));
    getUserId(user);
  }, []);

  const handleLike = async () => {
    dispatch(likePost(post._id));
    console.log(post.likes);
    console.log(post.creator);
    console.log(userId);
    console.log("hasLikedPost", hasLikedPost);
    if (hasLikedPost) {
      console.log(post.likes);
      setLikes(post.likes.filter((id) => id !== userId));
      console.log(post.likes);
    } else {
      setLikes([...post.likes, userId]);
    }
  };
  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {likes.length > 2
            ? `You and ${likes.length - 1} others`
            : `${likes.length} like${likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };
  return (
    <>
      <Card className={classes.card} raised elevation={6}>
        <CardMedia
          className={classes.media}
          image={
            post.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          title={post.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        {userId === post.creator && (
          <div className={classes.overlay2}>
            <Button
              style={{ color: "white" }}
              size="small"
              onClick={() => setCurrentId(post._id)}
            >
              <MoreHorizIcon fontSize="medium" />
            </Button>
          </div>
        )}
        <div
          onClick={() => navigate("/posts/" + post._id)}
          style={{ cursor: "pointer" }}
        >
          <div className={classes.details}>
            <Typography variant="body2" component="h2">
              {post.tags.map((tag) => `#${tag} `)}
            </Typography>
          </div>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {post.title}
          </Typography>
          <CardContent>
            <Typography
              variant="body2"
              style={{
                color: "#fffbf7",
              }}
              component="p"
            >
              {post.message}
            </Typography>
          </CardContent>
        </div>

        <CardActions
          className={`${classes.cardActions} ${classes.cardActions2}`}
        >
          <Button size="small" style={{ color: "white" }} onClick={handleLike}>
            <Likes />
          </Button>

          {userId === post.creator && (
            <Button
              size="small"
              style={{ color: "white" }}
              onClick={() => dispatch(deletePost(post._id))}
            >
              <DeleteIcon fontSize="small" /> &nbsp; DELETE
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  );
}

export default Post;
