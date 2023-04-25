import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Toolbar } from '@mui/material';
import Calender from './calender';
import Chart from './chart';
import RoomDetails from './roomDetails';
import Divider from '@mui/material/Divider';
import ProgressBar from './progressBar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function dashboard() {
  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} className="mainContainer">
        <Box gridColumn="span 6" className="leftBox">
        <h2 style={{margin: "8px, 0"}}>Recent Booking Schedule</h2>
          <Calender />
          <Divider light sx={{margin: "40px 0"}} />
          <RoomDetails />
        </Box>
        <Box gridColumn="span 6" >
            <Box gridColumn="span 12" className="innerBox" >
            <h2 style={{margin: "8px, 0"}}>Reservation Stats</h2>
            <Chart />
            </Box>
            <Toolbar style={{minHeight: "20px"}}/>
            <Box gridColumn="span 12">
            <ProgressBar />
            </Box>
        </Box>     
      </Box>
    </Box>
  );
}