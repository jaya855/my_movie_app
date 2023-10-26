import React from 'react'
import MovieCard from './MovieCard';
import '../App.css';

import { useGlobalContext } from '../Context';
const Movies = () => {
  const imgUrl = "https://via.placeholder.com/200/200";
  const { movie, setMovie, matches, err, setErr,loading } = useGlobalContext();
   const handleBack = ()=>{
    setMovie("titanic")
   }

  const handleinput = (e) => {
    setMovie(e.target.value);
  }
  console.log(movie)
  return (

    <div className='text-white pt-[2rem] bg-slate-100 min-h-screen  w-full' >
      <div className='h-[10rem] flex flex-col justify-center items-center gap-5'>
        <div className='font-bold text-xl md:text-2xl text-slate-600 '>
          Search Your Favourite Movie
        </div>
        <div>
      
      
          <input type="text"
            name="movie"
            value={movie}
            className='border-slate-600  border-[0.14rem] rounded-[1rem] h-[2rem]  md:h-[3rem]  text-slate-600  text-center lg:font-bold md:font-extrabold shadow-lg shadow-stone-400 '
            onChange={handleinput}
          />
        </div>
        {
          err && 
        <div className='font-semibold text-lg text-black flex flex-col justify-center items-center'>
          <div className='text-red-600'> movie not found</div>
          
           <div > <button  onClick={handleBack} className='underline'>Go Back</button></div>
        </div>
       }
      </div>
      

      <div className='  min-h-[calc(100vh-8rem)] w-full   flex justify-center items-center '>
          
        {
         loading === true ?
            (
              <div className="spinner-container "><div className="loading-spinner "></div></div>
            ) :
            (
              <div className="h-[90%] w-[60%]  grid lg:grid-cols-4 md:grid-cols-2 gap-10 py-[1rem] place-content-center">
                {
              matches && matches.map((match, i) => (
                <div key={i} className='flex justify-center items-center  '>
                  <MovieCard match={match} imgUrl={imgUrl}/>
                </div>
                 ))
                
              }
               </div>
            )
        }
       
      </div>

    </div>

  )
}

export default Movies
