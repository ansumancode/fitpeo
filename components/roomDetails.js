import { Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const roomDetails = () => {
  return (
    <>
    <Grid container spacing={2} sx={{marginBottom: "30px", alignItems: "center"}} >
        <Grid item xs={3} md={3} className="image-grid content-p">
            {/* <Item>xs=6 md=8</Item> */}
            <Image src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=" width={100} height={60}  style={{ borderRadius: "4px"}} />
        </Grid>
        <Grid item xs={7} md={7} className='content-p'>
            <h3>Queen Bed A 12324</h3>
            <div style={{display: "flex", alignItems: "center"}} >
            <Image src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=" width={30} height={30}  style={{ borderRadius: "25px", marginRight: "10px"}} />
            <p style={{marginRight: "10px", fontSize: "12px", color:"gray", fontWeight: "bold"}}>James Sukardi</p>
            <time style={{fontSize:"12px", color:"gray"}}>12min ago</time>
            </div>
        </Grid>
        <Grid item xs={2} md={2} className='content-p' style={{display: "flex", justifyContent: "flex-end"}}>
            <p style={{padding:"8px", borderRadius:"12px", background:"#145846", color: "#fff", textAlign:"center", width: "60px"}}>3</p>
        </Grid>
    </Grid>
    <Grid container spacing={2} sx={{marginBottom: "20px", alignItems: "center"}} >
        <Grid item xs={3} md={3} className="image-grid content-p">
            {/* <Item>xs=6 md=8</Item> */}
            <Image src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=" width={100} height={60}  style={{ borderRadius: "4px"}} />
        </Grid>
        <Grid item xs={7} md={7} className='content-p'>
            <h3>Queen Bed A 12324</h3>
            <div style={{display: "flex", alignItems: "center"}} >
            <Image src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=" width={30} height={30}  style={{ borderRadius: "25px", marginRight: "10px"}} />
            <p style={{marginRight: "10px", fontSize: "12px", color:"gray", fontWeight: "bold"}}>James Sukardi</p>
            <time style={{fontSize:"12px", color:"gray"}}>12min ago</time>
            </div>
        </Grid>
        <Grid item xs={2} md={2} className='content-p' style={{display: "flex", justifyContent: "flex-end"}}>
            <p style={{padding:"8px", borderRadius:"12px", background:"#169db3", color: "#fff", textAlign:"center"}}>16, 17, 18</p>
        </Grid>
    </Grid>
    
    </>
  )
}

export default roomDetails
