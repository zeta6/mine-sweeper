import { BaseSyntheticEvent, ReactChildren, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Link from 'common/components/link/Link'
import { useRouter } from 'next/router'

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[]
}

interface GamePage {
  diff: string
  str: string
}

const pages: Array<GamePage> = [
  { str: '초급', diff: 'easy' },
  { str: '중급', diff: 'normal' },
  { str: '상급', diff: 'hard' },
  { str: '커스텀', diff: 'custom' },
]

const ResponsiveAppBar = ({ children }: Props) => {
  const router = useRouter()
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (e: BaseSyntheticEvent) => {
    setAnchorElNav(e.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <>
      {' '}
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                cursor: 'pointer',
              }}
              onClick={() => router.push('/')}
            >
              Mine Sweeper
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
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
                  <Link href={`/game/${page.diff}`} key={index}>
                    <MenuItem key={index}>
                      {/* //  onClick={handleCloseNavMenu}> */}
                      <Typography textAlign="center">{page.str}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              Mine Sweeper
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => (
                <Link href={`/game/${page.diff}`} key={index}>
                  <Button
                    // onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.str}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {children}
    </>
  )
}
export default ResponsiveAppBar
