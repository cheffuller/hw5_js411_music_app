import {
  Box,
  Card,
  CardContent,
  Typography,
  Switch,
} from '@mui/material/';
import OnlineSwitch from './OnlineSwitch';
import VolumeSlider from './VolumeSlider';
import QualitySelect from './QualitySelect';

export default function Dashboard() {
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
      mt='100px'
    >
      <Card sx={{ minWidth: 275, textAlign: 'center' }}>
        <CardContent>
          <Typography variant='h5' component='div'>
            Online Mode
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            adjective
          </Typography>
          <Typography variant='body2'>
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        <OnlineSwitch />
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, textAlign: 'center' }}>
        <CardContent>
          <Typography variant='h5' component='div'>
            Master Volume
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            adjective
          </Typography>
          <Typography variant='body2'>
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
          <VolumeSlider />
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, textAlign: 'center' }}>
        <CardContent>
          <Typography variant='h5' component='div'>
            Sound Quality
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            adjective
          </Typography>
          <Typography variant='body2'>
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
          <QualitySelect />
        </CardContent>
      </Card>
    </Box>
  );
}

// value={value} onChange={handleChange}
