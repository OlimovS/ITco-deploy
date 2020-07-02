import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { Text, SectionDivider, StyledButton } from './custom/Custom.js';
import phone from '../images/why/phone.png';
import ipad from '../images/why/ipad.png';
import pc from '../images/why/macbook.png';
import mac from '../images/why/mac.png';

const useStyles = makeStyles({
  choose: {
    padding: '3rem 0',
    backgroundColor: '#fff',
  },
  preferences: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  preference: {
    margin: '15px 3px',
    width: '320px',
  },
  image: {
    width: '100%',
    height: '152px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
});

function Choose() {
  const classes = useStyles();
  return (
    <>
    <section className={classes.choose} id="Why Us ?">
    <Text
        variant='h5'
        component='h2'
        isWhite={false}
        head={'Why Choose Us'}
    >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
    </Text>
    <div className={classes.preferences}>
       <div className={classes.preference}>
         <div className={classes.image}>
          <img src={phone} alt='' />
         </div>
          <Typography variant='h6' gutterBottom>
          App Design
          </Typography>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adip- isicing elit, sed do eiusmod tempor
          ilabore et dolore.
          </Typography>
       </div>

       <div className={classes.preference}>
         <div className={classes.image}>
          <img src={ipad} alt='' />
         </div>
          <Typography variant='h6' gutterBottom>
          Responsive Layout
          </Typography>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adip- isicing elit, sed do eiusmod tempor
          ilabore et dolore.
          </Typography>
       </div>

       <div className={classes.preference}>
        <div className={classes.image} >
          <img src={pc} alt='' style={{maxWidth: '100%', maxHeight: '100%'}} />
        </div>
          <Typography variant='h6' gutterBottom>
          Pixel Perfect Design
          </Typography>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adip- isicing elit, sed do eiusmod tempor
          ilabore et dolore.
          </Typography>
       </div>
    </div>
    </section>
    <SectionDivider img={mac}>
      <StyledButton>
      Get a quote now.
      </StyledButton>
    </SectionDivider>
    </>
  );
}

export default Choose;
