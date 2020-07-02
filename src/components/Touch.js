import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, IconButton, TextField } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { Text } from './custom/Custom.js';

const useStyles = makeStyles({
  touch: {
    paddingTop: '3rem',
  },
  contact: {
    marginTop: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    ['@media(max-width: 750px)']:{
      flexDirection: 'column-reverse',
    },
  },
  firstPart: {
    padding: '3rem',
    backgroundColor: '#F2F2F2',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  box: {
    margin: '0 auto',
  },
  secondPart: {
    flex: 2,
    padding: '3rem 4rem',
    backgroundColor: '#E4E4E4',
    ['@media(max-width: 750px)']: {
      padding: '2rem 1rem',
    },
  },
  inputs: {
    width: '90%',
    maxWidth: '420px',
    ['@media(max-width: 750px)']: {
      margin: '0 auto',
    }
  },
  input: {
    marginBottom: '1.5rem',
  },
  btnDiv: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  btn: {
    textTransform: 'capitalize',
    marginTop: '25px',
    padding: '5px 20px',
  },
  rootInput: {
    marginRight: 'auto',
  },
  oneLine: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: '1rem',
  },
});

function Touch() {
  const classes = useStyles();
  return (
    <section className={classes.touch} id="Contact Us">
      <Text
          variant='h5'
          component='h2'
          isWhite={false}
          head={'Get in touch'}
      >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </Text>
      <div className={classes.contact}>
        <div className={classes.firstPart}>
          <div className={classes.box}>
          <Typography variant='h6' gutterBottom>
           OUR LOCATION
          </Typography>
          <Typography style={{fontStyle: 'italic'}}>
          174 Mimosa ST. NW<br />
          Casablanca, MA 20370<br />
          (212) 123 456 7<br />
          Samir Timezguida
          </Typography>
          <div className={classes.icons}>
            <IconButton>
              <TwitterIcon className={classes.icon}/>
            </IconButton>
            <IconButton>
              <InstagramIcon className={classes.icon}/>
            </IconButton>
            <IconButton>
              <TelegramIcon className={classes.icon}/>
            </IconButton>
            <IconButton>
              <LinkedInIcon className={classes.icon}/>
            </IconButton>
          </div>
          </div>
        </div>

        <form className={classes.secondPart}>
          <div className={classes.inputs}>
          <div className={classes.oneLine}>
          <TextField id="standard-basic" label="Name" className={classes.input} style={{marginRight: '20px'}}/>
          <TextField id="standard-basic" label="Email"  className={classes.input}/>
          </div>
          <TextField id="standard-basic" label="Message" fullWidth />

          <div className={classes.btnDiv}>
            <Button variant='outlined' className={classes.btn}>
             Send
            </Button>
          </div>
          </div>
        </form>
      </div>

    </section>
  );
}

export default Touch;
