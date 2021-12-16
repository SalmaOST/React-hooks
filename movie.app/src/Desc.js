import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Film } from "./Data";
import MovieList from "./MovieList";
import { Link } from "react-router-dom";


const Desc= props =>{
  const [movie, setMovie] = useState([])
  const {id} = useParams()
    const fetchMovie = ()=>{
      const Data=(MovieList)[id-1]
      setMovie(Data)
    }
    useEffect(() => {
      fetchMovie()
    },[])
    let navigate=useNavigate();
  
    return (
      <>
    {
      Film.map((film , index) =>(
        <div>
        <h3> {film.title} </h3>
        <p>{film.description}</p>
        <iframe width='400px' height='300px' src={film.trailer} title="Youtube Video"/>
        </div>
      )
      )
    }
      
      <Link to='/'>
        <button type="button"> Get back home </button>
      </Link>
                
     </>
     );
    };
export default Desc