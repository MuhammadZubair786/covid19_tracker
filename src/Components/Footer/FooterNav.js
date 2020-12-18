import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';



const useStyles = makeStyles({
  root: {
    backgroundColor:'#E5E5E5',
    position:'absolute',
    bottom:0,
    right:0,
    left:0,
    
  },
});

export default function FooterNav({screenConfig}) {
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  console.log("SCREEN CONFIG :",screenConfig[0])

  return (
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
        console.log(newValue)
        screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home"  style={{border:'2px solid white',backgroundColor:'white',boxShadow:'10px 10px 8px #888888',borderRadius:'20px',fontWeight:'bold',fontSize:'40px'}} elevation={3}/>
      <BottomNavigationAction label="Cases" style={{border:'2px solid #E5E5E5',backgroundColor:'white',boxShadow:'10px 10px 8px #888888',borderRadius:'20px',fontWeight:'bold',fontSize:'40px'}}/>
      <BottomNavigationAction label="Graph"  style={{border:'2px solid white',backgroundColor:'white',boxShadow:'10px 10px 8px #888888',borderRadius:'20px',fontWeight:'bold',fontSize:'40px'}} />
    </BottomNavigation>
  );
}
