import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Card } from "react-bootstrap";
import axios from "axios";
import moment from "moment";

import Loader from "../components/Loader";

function MovieDetails () {
    const {movieId} = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetchMovieDetails();
    }, [])

    const fetchMovieDetails = async () => {
        try {
            setLoading(true);
            const response = await axios({
                method: 'get',
                url: `http://localhost:4000/api/movies/${movieId}`
            });
            setLoading(false);
            setDetails(response.data.movie);
        }
        catch (e) {
            setError(e.message);
        }
    }

    return (
        <Card bg="primary" text="white">
            {error && <Alert variant='dander'>{error}</Alert>}
            {loading ?
             <Loader/>
             :
                <>   
                    <Card.Header><h1>{details.title}</h1></Card.Header>            
                    <Card.Body>
                        <Card.Img variant="top" src={details.poster} /> 
                        <p>Rating: {details.rating}</p>               
                        <p>CreatedAt: {moment(details.createdAt).format('DD-MMM-YYYY')}</p>               
                        <p>UpdatedAt: {moment(details.updatedAt).format('DD-MMM-YYYY')}</p>               
                    </Card.Body>
                </>
            }
        </Card>
    )
}

export default MovieDetails;