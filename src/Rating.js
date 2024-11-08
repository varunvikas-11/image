import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
  const [value, setValue] = React.useState(3);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <img 
          src="rrr.jpg" // Replace with actual image URL or import path
          alt="RRR"
          style={{ width: '450px', height: '450px', objectFit: 'cover',marginTop:'100px' }}
        />
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography component="legend">RRR</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <img 
          src="kalki.jpg" // Or use {kalkiImage} if importing
          alt="KALKI"
          style={{ width: '450px', height: '450px', objectFit: 'cover',marginTop:'100px' }}
        />
        <Rating name="read-only" value={value} readOnly />
        <Typography component="legend">KALKI</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <img 
          src="shangchi.jpg" // Or use {shangChiImage} if importing
          alt="Shang Chi"
          style={{ width: '450px', height: '450px', objectFit: 'cover',marginTop:'100px' }}
        />
        <Rating name="read-only" value={value} readOnly />
        <Typography component="legend">Shang Chi</Typography>
      </Box>
    </Box>
  );
}
