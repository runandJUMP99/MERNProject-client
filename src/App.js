import {useEffect, useState} from "react";
import {AppBar, Container, Grid, Grow, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";

import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

import {getPosts} from "./actions/posts";

import useStyles from "./styles";
import memories from "./images/memories.png";

function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} color="inherit" position="static">
        <Typography className={classes.heading} align="center" variant="h2">Memories</Typography>
        <img className={classes.image} src={memories} alt="Memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid alignItems="stretch" className={classes.mainContainer} container justify="space-between" spacing={3}>
            <Grid item sm={7} xs={12}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
