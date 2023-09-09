import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//router
import { useRouter } from 'next/router';

//link
import Link from 'next/link';

//image
import Image from 'next/image'

//SASS
import styles from './navbar.module.sass'

//RWD
import { useMediaQuery } from '@mui/material';


const theme = createTheme({
  palette: {
    ochre: {
      main: '#677510',
      light: '#B5CC22',
      dark: '#F6F6F6',
      contrastText: '#ffffff',
    },
  },
});
const pages = [
  { title: '使用說明', link: 'http://localhost:3000/ubike/directions' },
  { title: '收費方式', link: 'http://localhost:3000/ubike/fee' },
  { title: '站點資訊', link: 'http://localhost:3000/ubike/stations' },
  { title: '最新消息', link: 'http://localhost:3000/ubike/news' },
  { title: '活動專區', link: 'http://localhost:3000/ubike/activities' }
];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  // const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const isXsScreen = useMediaQuery('(max-width:767px)'); // 定義 xs 螢幕尺寸的最大寬度
  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false); // 新增狀態變量
  // console.log('Current Path:', router.asPath);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setIsNavMenuOpen(true); // 打開菜單時設置狀態為 true
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setIsNavMenuOpen(false); // 關閉菜單時設置狀態為 false
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <ThemeProvider theme={theme}>
    {/* <div className={`${styles.bgsetting}`}> */}
    <AppBar position="static" className={`${styles.appbar}`}>
      <Container  className={`${styles.container}`}>
        <Toolbar disableGutters>
        <Link href="https://www.youbike.com.tw/region/main/" className={`${styles.link}`}>
      {isXsScreen ? (
        <Image src="/ubike.png" width={65} height={65} alt="ubike" />
      ) : (
        <Image src="/ubike.png" width={95} height={95} alt="ubike" />
      )}
        </Link>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                className={`${styles.bardetail}`}
                sx={{ my: 2, display: 'block',
                color: '#677510' }}
                
              >
                <Link href={page.link}>{page.title}</Link>
              </Button>
            ))}
          </Box>

          <Box>
            <Tooltip title="login">
              <IconButton onClick={handleOpenUserMenu} sx={{
                display: { xs: 'none', md: 'block' },
              }}>
                <Image src='/button.png' width={85} height={40} alt="login" />
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, paddingLeft: '63%' }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={isNavMenuOpen ? handleCloseNavMenu : handleOpenNavMenu}
                sx={{ color: 'ochre.light' }}
              >
                {isNavMenuOpen ? <CloseIcon /> : <MenuIcon />} 
                {/* 根據狀態顯示不同的圖標 */}
              </IconButton>


          {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}
          paddingLeft='63%'>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color:'ochre.light'}}
            >
              <MenuIcon />
            </IconButton> */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                <Link href={page.link}>
                  <Typography textAlign="center">{page.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    {/* </div> */}
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
