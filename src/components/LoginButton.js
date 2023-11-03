import { Box, Button } from '@mui/material';

export default function LoginButton({ loggedIn, setLoggedIn }) {

  const LogToggle = () => {
    return loggedIn ? 'Logout' : 'Login'
  }

  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Button variant='contained' onClick={() => setLoggedIn(!loggedIn)}>{LogToggle()}</Button>
    </Box>
  );
}
