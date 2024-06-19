import React, { useEffect, useState } from 'react'
import './DogInfo.css'
import { Container } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const DogInfo = () => {


    const [singleDog, setSingleDog] = useState([])
    const { name } = useParams();
    const URL = `https://api.thedogapi.com/v1/breeds/search?q=${name}&?api_key=api_key=${process.env.REACT_APP_API_KEY}`;

    const fetchDog = () => {
        axios(URL).then((response) => {
            setSingleDog(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        fetchDog()
    }, [name])

    return (
        <>
            {
                singleDog.map((item) => {
                    return (
                        <Container style={{overflow:'hidden'}} key={item.id} >
                            <h1 className='dogname'>{item.name}</h1>
                            <Link className='back_button' to='/dogs'>Back</Link>
                            <div className='content'>
                                <img className='dogimage' src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`} />
                                <article>
                                    
                                    {item.breed_group && <>This dog belongs to the {item.breed_group} breed of dogs.</>}
                                    They normally have a height of {item.height.metric} cms and
                                    their weight is in the bracket of {item.weight.metric} kgs. {item.life_span && <>The life
                                    span of a {item.name} is around {item.life_span}</>}. {item.origin && <>These hounds are beleived to
                                    be originated in {item.origin}.</>}
                                    {item.temperament && <>They are generally {item.temperament} dogs.</>}

                                </article>
                            </div>
                        </Container>
                    )
                })}
        </>
    )
}

export default DogInfo
