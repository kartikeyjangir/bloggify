import React from "react";
import Post from "./Post/Post";
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";
import { useSelector } from "react-redux";

function Posts({ setCurrentId }) {
  const { posts, isLoading } = useSelector((state) => state?.posts);
  const classes = useStyles();
  if (!posts.length && !isLoading) return <h1>No Posts Found</h1>;
  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid
          className={classes.mainContainer}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts?.map((post) => {
            return (
              <Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
}

export default Posts;
