import React, { useState, useEffect } from 'react';
import './Dogs.css';
import axios from 'axios';
import DogCard from './dogcard/DogCard';
import { TextField, Button, Grid, Pagination } from '@mui/material';


const Dogs = () => {

    const [dogs, setDogs] = useState([])
    const [search, setSearch] = useState('')
    const [noDog, setNoDog] = useState(false);
    const [page, setPage] = useState(1);


    const fetchDogs = () => {
        const URL = `https://api.thedogapi.com/v1/breeds?api_key=${process.env.REACT_APP_API_KEY}&?page=${10}`;
        axios(URL).then((response) => {
            setNoDog(false)
            setDogs(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    const searchForDog = () => {
        const URL = `https://api.thedogapi.com/v1/breeds/search?q=${search}&?api_key=${process.env.REACT_APP_API_KEY}&?page=${page}`;
        axios(URL).then((response) => {
            if (response.data.length !== 0) {
                setNoDog(false)
                setDogs(response.data)
            } else {
                setNoDog(true)
            }

        }).catch((error) => {
            console.log(error);
        })
        setSearch('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchForDog();
    }


    useEffect(() => {
        const Dogs = fetchDogs();
    }, [page])

    return (

        <div className='dogs'>
            <h1 className='heading'>
                The Dog App
            </h1>

            <div className='searchBar'>

                <div className='dogsearch'>


                    <TextField
                        id="outlined-basic"
                        label="Search Dogs"
                        variant="outlined"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>
                <div className='searchButton'>
                    <Button variant="outlined" onClick={handleSubmit}>Search</Button>
                </div>

            </div>
           
            {
                noDog
                    ?
                    <h2 style={{display:'flex', justifyContent:'center'}}>This dog does not exist.</h2>
                    :
                    <Grid className='dogResultContainer' container rowSpacing={2} columnSpacing={2}>
                        {
                            dogs.map((dog) => {
                                return (

                                    <Grid key={dog.id} item xs={12} sm={6} md={4} lg={3}>
                                        <DogCard dog={dog} />
                                    </Grid>

                                )
                            })
                        }
                         <Pagination count={12}
                        onChange={(event, value)=> setPage(value)}/>

                    </Grid>
                       
            }

            
        </div>

    )
}

export default Dogs
