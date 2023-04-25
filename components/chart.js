import React, { useState } from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

export const Data=[
    {
        id: 0,
        day: "Sunday",
        checkIn: 35,
        checkOut: 30,
        userLost: 823
    },
    {
        id: 1,
        day: "Monday",
        checkIn: 10,
        checkOut: 65,
        userLost: 883
    },
    {
        id: 2,
        day: "Tuesday",
        checkIn: 20,
        checkOut: 39,
        userLost: 783
    },
    {
        id: 3,
        day: "Wednesday",
        checkIn: 30,
        checkOut: 22,
        userLost: 883
    },
    {
        id: 4,
        day: "Thrusday",
        checkIn: 40,
        checkOut: 25,
        userLost: 389
    },
    {
        id: 5,
        day: "Friday",
        checkIn: 50,
        checkOut: 10,
        userLost: 233
    },
    {
        id: 6,
        day: "Saturday",
        checkIn: 92,
        checkOut: 38,
        userLost: 653
    }
]

const chart = () => {
    const userData = {
        labels: Data.map((barData)=> barData.day),
        datasets: [
            {
            label: "Check In",
            data: Data.map((barData)=> barData.checkIn),
            backgroundColor: "#145846",
            borderRadius: 25,
            barThickness: 10, 
            borderColor: "#fff",
            borderWidth: 1,
            },
            {
            label: "Check Out",
            data: Data.map((barData)=> barData.checkOut),
            backgroundColor: "#14a2b8",
            borderRadius: 25,
            barThickness: 10,
            borderColor: "#fff",
            borderWidth: 1,
            }
    ]
    }
    
  return (
    <div style={{marginTop: "20px", padding: "20px"}}>
      <Bar data={userData} />
      test
    </div>
  )
}

export default chart


