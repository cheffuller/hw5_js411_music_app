import { useState } from 'react';
import { Box, Stack, Slider, Typography } from '@mui/material';
import { VolumeDown, VolumeUp } from '@mui/icons-material';

export default function VolumeSlider() {
  const [volume, setVolume] = useState(20);

  const handleChange = (e, newValue) => {
    setVolume(newValue);
  };

  const VolumeWarning = ({ volume }) => {
    return volume > 80 ? (
      <Box>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Listening to music at a high volume could cause long-term hearing
          loss.
        </Typography>
      </Box>
    ) : (
      ''
    );
  };

  return (
    <Box sx={{ minWidth: 100, marginTop: 3 }}>
      <Stack spacing={2} direction='row' sx={{ mb: 1 }} alignItems='center'>
        <VolumeDown />
        <Slider
          aria-label='Volume'
          value={volume}
          onChange={handleChange}
          min={0}
          max={100}
        />
        <VolumeUp />
      </Stack>
      <VolumeWarning volume={volume} />
    </Box>
  );
}
