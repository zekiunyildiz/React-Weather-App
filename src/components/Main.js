import React from 'react'
import axios from 'axios';
import Header from './Header'

const API_KEY = "43c7ee22c8621489263185308bf448d3";


function Main() {
    const api_call = async () => {
        const url = `api.openweathermap.org/data/2.5/weather?q=Istanbul&appid=${API_KEY}`
        const request = axios.get(url)
        const response = await request
        console.log(response);
    }
    return (
        <div className='main'>
            <Header/>
        </div>
    )
}

export default Main

