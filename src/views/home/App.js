import React, { useEffect, useState } from 'react';
import '../../styles/components/home/App.css';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextBox from "../../components/home/textBox";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from "../../hooks/useTranslation";


const useStyles = makeStyles(theme => ({
  error: {
    fontSize: 20,
    color: 'red'
  },
  textBoxText: {
    textAlign: 'center',
    fontSize: 26
  }
}));


function App() {
  const classes = useStyles();
  const [kanji, setKanji] = useState("");
  const [translation,errorText ] = useTranslation(kanji);

  const handleChange = event => {
    setKanji(event.target.value);
  };

  useEffect(() => {
    
  }, [kanji]);

  return (
    <div className="App">
      <CssBaseline />
      <Container fixed>
        <Grid
          container
          spacing={3}
        >
          <Grid item xs={3} />
          <Grid item xs={6}>
            <p className={classes.textBoxText}>漢字</p>
            <TextBox value={kanji} handleChange={handleChange} disabled={false}/><br />
          </Grid>
          <Grid item xs={3} />

          <Grid item xs={3} />
          <Grid item xs={6}>
            <p className={classes.textBoxText}>ひらがな</p>
            <TextBox value={translation} handleChange={handleChange} disabled={true}/>
            {errorText ? <p className={classes.error}>Input is not Japanese</p> : null}
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
