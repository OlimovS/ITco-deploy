import React from 'react';
import clsx from 'clsx';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const styleText = makeStyles(theme => ({
  welcome: {
    textAlign: 'center',
    maxWidth: '600px',
    width:'90%',
    margin: '0 auto',
  },
  text: {
    textAlign: 'center',
    textTransform: 'uppercase',
    '&::after': {
      display: 'block',
      content: '""',
      width: '5rem',
      height: '2px',
      margin: '2rem auto',
    },
  },
  whiteColor: {
    color: '#fff',
    '&::after': {
      backgroundColor:  '#fff',
    }
  },
  blackColor: {
    color: '#222222',
    '&::after': {
      backgroundColor:  '#222222',
    }
  },
}));
export function Text ({isWhite, children, head, ...others }) {
  const classes = styleText();
  const color = isWhite ? classes.whiteColor : classes.blackColor;
  return(
    <div className={classes.welcome}>
      <Typography {...others} className={clsx(classes.text, color)}>
        {head}
      </Typography>
      {children == null
        ? null
        : <Typography  variant='subtitle1'>
            {children}
          </Typography>
      }

    </div>
  );
}



const styleSection = makeStyles({
  section: ({
     backgroundImage: props => `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${props.img})`,
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     width: '100%',
     height: '280px',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     padding: '30px auto',
  }),
});

export function SectionDivider (props) {
  const classes = styleSection(props);
  return(
    <div className={classes.section}>
         {props.children}
    </div>
  );
}

const styleButton = makeStyles({
  btn: {
    textTransform: 'capitalize',
    padding: '15px 30px',
    letterSpacing: '1.2px',
  },
});
export function StyledButton(props) {
  const classes = styleButton();
  return(
    <Button variant='outlined' color='secondary' size='large' className={classes.btn}>
      {props.children}
    </Button>
  );
}
