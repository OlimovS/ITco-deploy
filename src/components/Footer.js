import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,  Link } from '@material-ui/core';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';

const useStyles = makeStyles({
   footer: {
     backgroundColor: '#222222',
     color: '#fff',
     padding: '2rem 1rem',
     '& > div': {
     height: '160px',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     }
   },
   profesion: {
     color: 'rgba(255, 255, 255, 0.82)'
   },
   name: {
     letterSpacing: '1px',
     textTransform: 'uppercase',
   },
   comIcon: {
     fontSize: '60px',
     color: 'rgb(25, 120, 185)',
     marginRight: '20px',
   }
});

export default function Footer() {
  const classes = useStyles();
  return(
    <footer className={classes.footer} id="Developer">
     <div>
       <ImportantDevicesIcon className={classes.comIcon}/>
       <div>
       <Typography variant='h6' component='h2' className={classes.name}>
         Olimov Sulaymon
       </Typography>
       <Typography className={classes.profesion} variant='subtitle2'>
        Front-end developer
       </Typography>
       </div>
     </div>
     <Typography align='center' style={{color: '#E4E4E4'}}>
     {new Date().getFullYear()} &copy; <Link style={{color: '#f6762c'}}>Olimov Sulaymon.</Link>  All Rights Reserved.
     </Typography>
    </footer>
  );
}
