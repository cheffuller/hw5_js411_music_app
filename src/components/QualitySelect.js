import { useState } from 'react';
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
} from '@mui/material';

export default function QualitySelect() {
  const [quality, setQuality] = useState(2);

  const handleChange = (e) => {
    setQuality(e.target.value);
  };

  const QualityWarning = ({ quality }) => {
    return quality === 1 ? (
      <Box sx={{ marginTop: 1 }}>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Music quality is degraded. Increase quality if your connection allows
          it.
        </Typography>
      </Box>
    ) : (
      ''
    );
  };

  return (
    <Box sx={{ minWidth: 100, marginTop: 3 }}>
      <FormControl fullWidth size='small'>
        <InputLabel id='quality'>Quality</InputLabel>
        <Select value={quality} label='quality' onChange={handleChange}>
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>Normal</MenuItem>
          <MenuItem value={3}>High</MenuItem>
        </Select>
      </FormControl>
      <QualityWarning quality={quality} />
    </Box>
  );
}
