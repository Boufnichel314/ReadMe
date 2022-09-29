import * as React from 'react';
import { useState } from 'react';
import './topnav.css'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Api from '../Axios/Api';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
export default function TopNav() {
  const [searchh, setSearchh] = useState('');
  const [onKeyPress, setOnKeyPress] = useState('');
  const [style, setStyle] = useState([]);
  const [toggle, setToggle] = useState(true);
  const newStyle = [
    {
      transition: 'all 0.5s ease-in-out',
      transform: 'rotate(90deg)',
      marginTop: '0.7rem',
    },
    {
      display : 'none',
    },
    {
      position : 'absolute',
      top : '0.7rem',
      transition: 'all 0.3s ease-in-out'
    }
  ]
  const handleStyleChange = () => {
    setStyle(newStyle);
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleClick = () => {
    handleToggle();
    toggle ? handleStyleChange() : setStyle([{transition: 'all 0.5s ease-in-out'}]);
  };
  console.log(toggle);
  return (
    <div className='TopBar'>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='navbar'>
        <div className="hidden" onClick={handleClick}>
          <div className="hid" style={style[0]}></div>
          <div className="hid" style={style[1]}></div>
          <div className="hid" style={style[2]}></div>
        </div>
            <div className="readme">Readme</div>
            <div className="navigation">
              <div className="nav">الرئيسية</div>
              <div className="nav">اتصل بنا</div>
              <div className="nav">العروض</div>
            </div>
          <Search className='search'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase 
              onChange={(e)=>setSearchh(e.target.value)} onKeyPress={(e)=>setOnKeyPress(e.key)}
              placeholder="...البحث"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
    {onKeyPress === 'Enter' ? <Api searchValue={searchh} /> : null}
    </div>
  )
}
