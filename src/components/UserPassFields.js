import { useState } from 'react';
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function UserPassFields() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
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
        mt='100px'
      >
        <TextField id='username' label='Username' variant='outlined' required />
      </Box>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 2, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <FormControl sx={{ m: 1, width: '25ch' }} variant='outlined' required>
          <InputLabel htmlFor='password'>
            Password
          </InputLabel>
          <OutlinedInput
            required
            id='password'
            type={showPassword ? 'text' : 'password'}
            label='Password*'
            variant='outlined'
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    </>
  );
}
