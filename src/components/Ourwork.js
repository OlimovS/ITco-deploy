import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import Carousel from 'react-elastic-carousel';

import useWindowDimentions from './custom/useWindowDimentions.js';
import { Text, SectionDivider, StyledButton } from './custom/Custom.js';
import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.png';
import pic4 from '../images/pic4.png';
import pic5 from '../images/pic5.png';
import pic6 from '../images/pic6.png';
import hand from '../images/hand.png';

const useStyles = makeStyles({
  ourwork: {
    padding: '3rem 0px',
  },
  projects: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 190px)',
    gridTemplateRows: '1fr 1fr',
    gridGap: '5px',

    maxWidth: '630px',
    width: '90%',
    margin: '0 auto',
  },
  project: {
    width: '190px',
    height: '200px',
    '& img': {
      objectFit: 'cover',
      objectPosition: '0% 0%',
      width: '100%',
      height: '100%',
      display: 'block',
    },
  },
  btn: {
    textTransform: 'capitalize',
    marginTop: '25px',
    padding: '5px 20px',
  },
  btnDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
  carousel: {
    margin: '2rem 1rem',
  },
});

const Images = () => {
  const classes = useStyles();

  return (
    <>
    <div className={classes.project}>
      <img src={pic1} alt='project'/>
    </div>
    <div className={classes.project}>
      <img src={pic2} alt='project'/>
    </div>
    <div className={classes.project}>
      <img src={pic3} alt='project'/>
    </div>
    <div className={classes.project}>
      <img src={pic4} alt='project'/>
    </div>
    <div className={classes.project}>
      <img src={pic5} alt='project'/>
    </div>
    <div className={classes.project}>
      <img src={pic6} alt='project'/>
    </div>
    </>
  )
};


function Ourwork() {
  const classes = useStyles();
  const { width } = useWindowDimentions();
  return (
    <>
    <section className={classes.ourwork} id="Our Work">
      <Text
          variant='h5'
          component='h2'
          isWhite={false}
          head={'Some of our work'}
       >

      </Text>
      <Typography align='center' variant='h6' gutterBottom style={{fontWeight: 'bold'}}>
       All
      </Typography>
      {width >= 662
          ? <section className={classes.projects}> <Images/> </section>
          :
          <div className={classes.carousel}>
          <Carousel itemsToShow={width >= 560 ? 2 : 1}>
            <div className={classes.project}>
              <img src={pic1} alt='project'/>
            </div>
            <div className={classes.project}>
              <img src={pic2} alt='project'/>
            </div>
            <div className={classes.project}>
              <img src={pic3} alt='project'/>
            </div>
            <div className={classes.project}>
              <img src={pic4} alt='project'/>
            </div>
            <div className={classes.project}>
              <img src={pic5} alt='project'/>
            </div>
            <div className={classes.project}>
              <img src={pic6} alt='project'/>
            </div>
          </Carousel>
          </div>
        }

      <div className={classes.btnDiv}>
      <Button variant='outlined' className={classes.btn}>
       Show me more
      </Button>
      </div>
   </section>
   <SectionDivider img={hand}>
     <StyledButton>
      We’re here to help.
     </StyledButton>
   </SectionDivider>
   </>
  );
}

export default Ourwork;
