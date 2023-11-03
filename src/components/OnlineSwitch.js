import { useState } from 'react';
import { Box, Switch, Typography } from '@mui/material';

export default function OnlineSwitch() {
  const [online, setOnline] = useState(true);

  const handleOnlineChange = () => {
    setOnline(!online);
  };

  const OfflineWarning = ({ online }) => {
    return online ? (
      ''
    ) : (
      <Box>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Your application is offline. You won't be able to share or stream
          music to other devices.
        </Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ minWidth: 100, marginTop: 3 }}>
      <Switch
        sx={{ margin: 'auto' }}
        checked={online}
        onChange={handleOnlineChange}
      />
      <OfflineWarning online={online} />
    </Box>
  );
}
