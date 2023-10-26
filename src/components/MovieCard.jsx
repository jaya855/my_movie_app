
import React from 'react'
import { NavLink } from 'react-router-dom'

const MovieCard = ({match,imgUrl}) => {
    const {imdbID}=match
    return (
            <NavLink to={`/movie/${imdbID}`}>
            <div className='transition duration-300 ease-in-out flex flex-col justify-center items-center  hover:bg-slate-600  text-slate-600 hover:text-white  shadow-lg hover:shadow-2xl  shadow-stone-600 hover:shadow-stone-900    h-[20rem] w-[90%]  border-slate-600 rounded-[1rem] border-[0.2rem] '>
                 
                <h1 className='text-[1rem] pb-[0.5rem] font-bold  hover:translate-y-2 '>{
                    match.Title.length > 20 ? `${match.Title.slice(0, 20)}...` : match.Title


                }</h1>
               
                <img className="rounded-[0.5rem] hover:h-[15rem] hover:w-[11rem]    h-[14rem] w-[10rem]" src={match.Poster === "N/A" ? imgUrl : match.Poster} alt="#" />


            </div>
            </NavLink>
        
    )
}

export default MovieCard
