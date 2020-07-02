import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Text, SectionDivider, StyledButton } from './custom/Custom.js';
import keyboard from '../images/keyboard.png';

const useStyles = makeStyles({
  introduction: {
    padding: '3rem',
  },
});

function Introduction(props) {
  const classes = useStyles();

  return (
    <>
    <section className={classes.introduction} id="Introduction">
      <Text
         variant='h5'
         component='h2'
         isWhite={false}
         head={'Introduction'}
      >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </Text>
    </section>
    <SectionDivider img={keyboard}>
      <StyledButton>
       Pure Creativity.
      </StyledButton>
    </SectionDivider>
    </>
  );
}

export default Introduction;
