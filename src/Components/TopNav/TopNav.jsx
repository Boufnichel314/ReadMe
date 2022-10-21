import { useState, useEffect } from 'react';
import './topnav.css'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Api from '../Axios/Api';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
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
  const [value, setValue] = useState(0);
  const [mobilestyle, setMobilestyle] = useState({opacity: 1});
  const navigate = useNavigate();
  useEffect(() => { 
    if(value === 0) navigate("/");
    if(value === 1) navigate("/contact");
    if(value === 2) navigate("/Offers");
  }, [value]);
  const handleNavigate = (value) => {
    setValue(value);
    setOnKeyPress('hhh');
  };
  useEffect(() =>
  dispatch(login), [handleNavigate]);

  /////////////////////////////////////////////
  const newStyle = [
    {
      transition: 'all 0.7s ease-in-out',
      transform: 'rotate(450deg)',
      marginTop: '0.7rem',
    },
    {
      display : 'none',
    },
    {
      position : 'absolute',
      top : '0.7rem',
      transition: 'all 0.7s ease-in-out'
    }
  ];
  const trueMobileStyle =
    {
      display: 'flex',
  transform: 'scale(1)',
  transition: 'all 300ms',
      
    }
  const falseMobileStyle =
    {
      display: 'none',
  transform: 'scale(1.1)',
  transition: 'all 300ms',
    }
  const handleStyleChange = () => {
    setStyle(newStyle);
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleClick = () => {
    handleToggle();
    toggle ? handleStyleChange() : setStyle([{transition: 'all 0.5s ease-in-out'}]);
    toggle ? setMobilestyle(trueMobileStyle) : setMobilestyle(falseMobileStyle);
  };
///////////////////Testing////////////////////////////////
const dispatch = useDispatch();
const login = () => {dispatch({ type: 'SET_USER', payload: onKeyPress }) }
const state = useSelector( state => state.userReducer.username );
if(onKeyPress === 'Enter') dispatch(login);
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
            <div className="readme">
            </div>
            <div className="navigation-pc">
              <div className="nav-pc" onClick={() => {handleNavigate(0)}}>الرئيسية</div>
              <div className="nav-pc" onClick={() => {handleNavigate(1)}}>اتصل بنا</div>
              <div className="nav-pc" onClick={() => {handleNavigate(2)}}>العروض</div>
            </div>
            <div className="searching">
            <div className="cart">
          <span>
            <AddShoppingCartIcon />
          </span>
          <span>{0}</span>
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
            </div>
        </Toolbar>
        <div className="navigation-mobile" style={mobilestyle}>
              <div className="names">
              <div className="nav-pc" onClick={() => {handleNavigate(0); handleClick()}}>الرئيسية</div>
              <div className="nav-pc" onClick={() => {handleNavigate(1); handleClick()}}>اتصل بنا</div>
              <div className="nav-pc" onClick={() => {handleNavigate(2); handleClick()}}>العروض</div>
              </div>
              <div className="icons">
                <div className="logo-mobile"></div>
                <div className="social"><h4>@Readme314</h4></div>
              </div>

        </div>
      </AppBar>
    </Box>
    {onKeyPress === 'Enter' ? <Api searchValue={searchh} /> : null}
    </div>
  )
}
