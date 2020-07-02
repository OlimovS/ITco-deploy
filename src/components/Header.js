import React, { useState } from 'react';
import { IconButton, AppBar, Toolbar, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MouseIcon from '@material-ui/icons/Mouse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinkIcon from '@material-ui/icons/Link';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { Link as Scroller } from 'react-scroll';

import { Text } from './custom/Custom.js';
import hero from '../images/hero.png';

const useStyles = makeStyles({
   appBar: {
     boxShadow: 'none',
   },
   header: {
     color: '#fff',
     width: '100%',
     height:'100vh',
     backgroundImage: ` linear-gradient(to bottom right, rgba(255, 147, 20, 0.7), rgba(240, 32, 88, 0.7)), url(${hero})`,
     backgroundPosition: '60%',
     backgroundSize: 'cover',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',

     position: 'relative',
   },
   drawer: {
     width: 250,
   },
   iconBtn: {
     position: 'absolute',
     left: '50%',
     bottom: '10px',
     transform: 'translateX(-50%)',
   },
   menuBtn: {
     backgroundColor: 'rgba(227, 108, 32, 0.93)',
     borderRadius: '5px',
   },
   closer: {
     textAlign: 'right',
     paddingRight: 8,
   }
});


function Header(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);


  const drawer = (
    <div  className={classes.drawer} role='presentation'>
      <Divider />
      <List>
        {['Main', 'Introduction', 'Our Work', 'Our Clients', 'About Us', 'Why Us ?', 'Contact Us', 'Developer'].map((text, index) => (
          <Scroller delay={300} key={text}  to={text} time={200} smooth={true}>
            <ListItem button onClick={() => setOpen(false)} >
              <ListItemIcon><LinkIcon color='primary'/></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Scroller>
        ))}
      </List>
    </div>
  );

  return (
    <header className={classes.header} id="Main">
      <AppBar  color='transparent' className={classes.appBar}>
        <Toolbar>
         <div className={classes.menuBtn}>
          <IconButton color='inherit' onClick={() => setOpen(!open)}>
            <MenuIcon fontSize='large'/>
          </IconButton>
        </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor={'left'} open={open} onClose={() => setOpen(!open)} className={classes.drawer}>
        <div className={classes.closer}>
          <IconButton onClick={() => setOpen(false)}>
           <ArrowBackIosIcon  color='primary'/>
          </IconButton>
        </div>
        {drawer}
      </Drawer>

          <Text
             variant='h3'
             component='h1'
             isWhite={true}
             head={'We’ve got the talent'}
          >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Aenean commodo ligula eget dolor. Aenean massa.
          </Text>
        <Scroller to="Introduction" smooth={true} duration={500}>
          <IconButton color='inherit' className={classes.iconBtn} onClick={props.executeScroll}>
            <MouseIcon />
          </IconButton>
        </Scroller>
    </header>
  );
}

export default Header;
