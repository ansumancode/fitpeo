import { Grid } from '@mui/material'
import React from 'react'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#eee',
    },
  }));

const progressBar = () => {
  return (
    <Grid container spacing={2} sx={{margin: 0, padding: 0, marginLeft: "-16px"}}>
        <Grid item xs={6}  style={{padding: 0}}>
         <div className="box-content" >
         <div className='inner-content'>
                <h4>Available Room Today</h4>
                <p>620</p>
            </div>
            <BorderLinearProgress variant="determinate" value={50} sx={{marginTop: "20px"}} />
         </div>
        </Grid>
        <Grid item xs={6}  style={{padding: 0}}>
         <div className="box-content" >
         <div className='inner-content'>
                <h4>Available Room Today</h4>
                <p>156</p>
            </div>
            <BorderLinearProgress variant="determinate" value={20} sx={{marginTop: "20px"}} />
         </div>
        </Grid>
    </Grid>
  )
}

export default progressBar
