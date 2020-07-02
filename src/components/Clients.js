import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Text } from './custom/Custom.js';
import logo1 from '../images/logos/logo1.png';
import logo2 from '../images/logos/logo2.png';
import logo3 from '../images/logos/logo3.png';
import logo4 from '../images/logos/logo4.png';
import logo5 from '../images/logos/logo5.png';

const useStyles = makeStyles({
  clients: {
    padding: '3rem 0',
    backgroundColor: '#F4F4F4',
  },
  logos: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',

    '& img': {
      margin: '15px 20px',
    },
  },
})

function Clients() {
  const classes = useStyles();
  return (
    <section className={classes.clients} id="Our Clients">
      <Text
          variant='h5'
          component='h2'
          isWhite={false}
          head={'Our Clients'}
      >
      </Text>
      <div className={classes.logos}>
        <img src={logo1} alt="logo" />
        <img src={logo2} alt="logo" />
        <img src={logo3} alt="logo" />
        <img src={logo4} alt="logo" />
        <img src={logo5} alt="logo" />
      </div>
    </section>
  );
}

export default Clients;
