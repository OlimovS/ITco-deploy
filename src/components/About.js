import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, IconButton } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import { Text, SectionDivider } from './custom/Custom.js';
import pic1 from '../images/team/pic1.png';
import pic2 from '../images/team/pic2.png';
import pic3 from '../images/team/pic3.png';
import play from '../images/team/play.png';


const useStyles = makeStyles(theme => ({
  about: {
    padding: '3rem 0px',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    margin: '30px 0px',
  },
  team: {
     display: 'flex',
     flexWrap: 'wrap',
     justifyContent: 'center',
  },
  member: {
    width: '140px',
    height: '200px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative',
    color: '#fff',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: '3px 3px',
  },

  hiring: {
    color: 'rgba(0, 0, 0, 0.87)',
    '&::after': {
      display: 'block',
      content: '""',
      width: '5rem',
      height: '1px',
      margin: '1em auto',
      backgroundColor: 'rgba(0, 0, 0, 0.87)',
    },
  },
  applyDiv:{
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '0px 4px',
    width: '140px',
    height: '200px',
    margin: '3px 3px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid rgba(0, 0, 0, 0.87)'
  },
  apply: {
    textTransform: 'capitalize',

  },
}));

function About() {
  const classes = useStyles();
  return (
    <>
    <section className={classes.about} id="About Us">
      <Text
          variant='h5'
          component='h2'
          isWhite={false}
          head={'About Us'}
      >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </Text>
      <div className={classes.wrapper}>
      <div className={classes.team}>
         <div className={classes.member} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${pic1})`}}>
           <Typography variant='h6' color='inherit'>
           John
           </Typography>
           <Typography variant='subtitle1' color='inherit' gutterBottom>
           CEO/Founder
           </Typography>
         </div>

         <div className={classes.member} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${pic2})`}}>
           <Typography variant='h6' color='inherit'>
           Maria
           </Typography>
           <Typography variant='subtitle1' color='inherit' gutterBottom>
           Manger
           </Typography>
         </div>

         <div className={classes.member} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${pic3})`}}>
           <Typography variant='h6' color='inherit'>
           Alica
           </Typography>
           <Typography variant='subtitle1' color='inherit' gutterBottom>
            Programmer
           </Typography>
         </div>

         <div className={classes.applyDiv}>
         <div>
         <Typography className={classes.hiring} align='center'>
           We are hiring!
         </Typography>
         <Button variant='outlined' className={classes.apply} fullWidth color='inherit'>
          Apply
         </Button>
         </div>
         </div>
      </div>
      </div>
    </section>
    <SectionDivider img={play}>
      <IconButton color='secondary'>
        <PlayCircleOutlineIcon fontSize='large'/>
      </IconButton>
    </SectionDivider>
    </>
  );
}

export default About;
