import { useEffect, useState } from "react";
import {Alert, Button, Card} from "react-bootstrap";
import axios from 'axios';
import { useHistory } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchText, setSearchText] = useState('');
    const history = useHistory();
  
    useEffect(() => {
      fetchMovies();
    }, []);
  
    const fetchMovies = async() => {
      try {
        setLoading(true);
        const response = await axios(`http://localhost:4000/api/movies?searchText=${searchText}`);
        setLoading(false);
        setMovies(response.data);
        setError(null);
      }catch(e) {
        setLoading(false);
        setError(`Server Error:${e.message} ${e.stack}`);
      }
    } 

    const onClickViewMovie = ({id}) => {
        history.push(`/${id}`);
    } 

    return (
        <>
            <SearchBar onClickRefresh={fetchMovies} setSearchText={setSearchText} />
            {error && <Alert variant="danger">{error}</Alert>}
            {loading ? 
              <Loader/>
            :<div className="d-flex flex-wrap">            
              {movies.map(movie => {
                  const {title, id} = movie;

                return (
                  <Card key={id} className="m-3 movie-card justify-content-start  ">
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales.
                      </Card.Text>
                      <Button 
                        variant="success"
                        onClick={() => onClickViewMovie(movie)}>
                            View Movie
                      </Button>
                    </Card.Body>
                  </Card>
                )
              })
            }
          </div>}
        </>
    )
 }

export default Home;