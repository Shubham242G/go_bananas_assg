import React,{useState} from 'react'
import axios from 'axios';
import { TextField } from '@mui/material';
import './Weather.css'

const Weather = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const [error, setError] = useState(false);

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8a1ddca06c316262a4712a1e22aeda07`;

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(URL).then((response) => {
                setError(false);
                setData(response.data)
            }).catch((error) => {
                if (error.response.data.cod === "404" || "400") {
                    setError(true)
                }
            })
            setLocation('')
        }
    }
    return (
        <div className='weather'>
            <div className='search'>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    onKeyDown={searchLocation}
                    placeholder='Enter Location'
                />
            </div>
            {error ?
                <h1>Please enter a valid city</h1>
                :
                <>
                    <div className='container'>
                        <div className='top'>
                            <div className='location'>
                                <p>{data.name}</p>
                            </div>
                            <div className='temp'>
                                {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
                            </div>
                            <div className='description'>
                                {data.weather ? <p>{data.weather[0].main}</p> : null}
                            </div>
                        </div>

                        {data.name != undefined &&
                            <div className='bottom'>
                                <div className='feels'>
                                    {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
                                    <p>Feels Like</p>
                                </div>
                                <div className='humidity'>
                                    <p className='bold'>20%</p>
                                    <p>Humidity</p>
                                    {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                                </div>
                                <div className='wind'>
                                    {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}KMPH </p> : null}
                                    <p>Wind Speed</p>
                                </div>
                            </div>
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default Weather
