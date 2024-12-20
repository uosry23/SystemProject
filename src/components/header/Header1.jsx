import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Facebook } from '@mui/icons-material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu'


const options = [
    'AR',
    'EN',
  ];

const Header1 = () => {
        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
        const [selectedIndex, setSelectedIndex] = React.useState(1);
        const open = Boolean(anchorEl);
        const handleClickListItem = (event) => {
          setAnchorEl(event.currentTarget);
        };
      
        const handleMenuItemClick = (event,index) => {
          setSelectedIndex(index);
          setAnchorEl(null);
        };
      
        const handleClose = () => {
          setAnchorEl(null);
        };

    return (
        <Box sx={{
            bgcolor: "#000",
            py:"4px",
            borderBottomRightRadius: 4,
            borderBottomLeftRadius: 4,
        }}>
            <Container>
                <Stack direction={"row"} alignItems={"center"}>
                    
                    <Typography sx={{
                        fontSize:"12px",
                        fontWeight:300,
                        color:"#fff",
                    }}
                    variant='body2'
                    >
                        medicien.me
                    </Typography>
                    <Box flexGrow={1} />
                
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
                        <FacebookIcon sx={{
                            fontSize:"16px",
                            color : "#fff",
                        }}/>
                        <WhatsAppIcon
                        sx={{
                            fontSize:"16px",
                            mx:1,
                            color : "#fff",
                        }}/>
                        <InstagramIcon sx={{
                            fontSize:"16px",
                            color : "#fff",
                        }}/>
                </Stack>
            </Container>    
        </Box>
    )
}

export default Header1