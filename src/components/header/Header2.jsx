import { AddShoppingCartOutlined } from '@mui/icons-material';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    border: "2px solid #777",
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
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
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  //////////////////////////////////////////////handel options
  const options = [
    'All Categories',
    'Show all notification content',
    'Hide sensitive notification content',
    'Hide all notification content',
  ];

const Header2 = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setAnchorEl(null);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <Container sx={{my:3 ,display: "flex", justifyContent:"space-between" }}>
            <Stack alignItems={"center"}>
                <MonitorHeartIcon/>
                <Typography variant="body2">Medicine.me</Typography>
            </Stack>
            <Search sx={{
            borderRadius:"22px",
            display:"flex",
            }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
             <List
                            component="nav"
                            aria-label="Device settings"
                        
                        >
                            <ListItemButton
                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-label="when device is locked"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClickListItem}
                            sx={{"&:hover":{cursor: "pointer"}}}
                            >
                            <ListItemText
                                secondary={options[selectedIndex]}
                            />
                            
                            </ListItemButton>
                        </List>
                        <Menu
                            id="lock-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'lock-button',
                            role: 'listbox',
                            }}
                        >
                            {options.map((option, index) => (
                            <MenuItem
                            sx={{fontSize:"11px", p:"3px 10px", minHeight:"10px"}}
                                key={option}
                                
                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                            >
                                {option}
                            </MenuItem>
                            ))}
                        </Menu>
          </Search>
        <Stack direction={"row"} alignItems={"center"}>
          <IconButton>
            <PersonIcon/>
            </IconButton>
            <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="primary">
                <ShoppingCartIcon />
            </StyledBadge>
            </IconButton>
        </Stack>
        </Container>
    )
}
export default Header2