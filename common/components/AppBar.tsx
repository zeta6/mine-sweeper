import { BaseSyntheticEvent, useEffect, useState } from 'react'
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
import { Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'

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

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}))

const ResponsiveAppBar = ({ children }: Props) => {
  const router = useRouter()
  const [anchorElNav, setAnchorElNav] = useState(null)
  const handleOpenNavMenu = (e: BaseSyntheticEvent) => {
    setAnchorElNav(e.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const path = router.pathname
  const _gameMode = path.substring(1, 5) === 'game' ? 'server' : 'local'
  const [gameMode, setGameMode] = useState(_gameMode)
  const gameDiff =
    _gameMode === 'server' ? path.substring(6) : path.substring(11)

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
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ ml: 4, mr: 4 }}
            >
              <Typography>GameMode:</Typography>
              <Typography>local</Typography>
              <AntSwitch
                defaultChecked={gameMode === 'server' ? true : false}
                inputProps={{ 'aria-label': 'ant design' }}
                onChange={(e) => {
                  e.target.checked
                    ? router.push(`/game/${gameDiff}`)
                    : router.push(`/localGame/${gameDiff}`)
                }}
              />
              <Typography>server</Typography>
            </Stack>
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
                  <Link
                    href={
                      gameMode === 'server'
                        ? `/game/${page.diff}`
                        : `/localGame/${page.diff}`
                    }
                    key={index}
                  >
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
                <Link
                  href={
                    gameMode === 'server'
                      ? `/game/${page.diff}`
                      : `/localGame/${page.diff}`
                  }
                  key={index}
                >
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
