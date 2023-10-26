import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import {useParams,useNavigate} from 'react-router-dom'

const SingleMovie = () => {
  const navigate = useNavigate()
  const {id}=useParams();
  const [Loader,setLoader]=useState(false)
  const api=`https://www.omdbapi.com/?apikey=427c68d6&i=${id}`
  const [singleMovie,setSingleMovie]=useState(null)
  const handleBack=()=>{
    navigate("/");
  }
  const getOneMovie = async()=>{
    try{

      setLoader(true);
      const res= await axios.get(api);
      setLoader(false);
      setSingleMovie(res.data);
      

    }
    catch(error){
      console.log(error)
    }
   }
  
  useEffect(()=>{
  getOneMovie();
  },[id])
 
  const {Title,Poster,Released,Genre,imdbRating,Country}=singleMovie || {};
  
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-slate-600 '>
    
    {
     Loader === true ? (
      <div className="spinner-container "><div className="loading-spinner "></div></div>
     ):(
      <div className='lg:h-[40%] lg:w-[35%] md:h-[40%] md:w-[65%] h-[40%] w-[80%] flex shadow-lg shadow-stone-400 rounded-lg overflow-hidden'>
      <div className='h-[100%] w-[40%] '><img src={Poster} className='h-[100%] w-[100%] '/></div>
      <div className='h-[100%] w-[60%]  bg-slate-100 text-gray-800 flex items-center'>
        <div className='h-[70%] w-[100%]  flex flex-col space-y-3'>
          <div className='h-[20%] w-[100%] '>
            <div className='font-bold text-[1.5rem] pl-[0.5rem] text-slate-600'>{
            Title && (Title.length > 15 ? `${Title.slice(0, 15)}...` : Title)

            }</div>
          </div>
          <div className='h-[80%] w-[100%]  flex flex-col items-center'>
            <div className='h-1/4 w-[100%] font-semibold text-[1rem]  text-slate-700 flex justify-start items-center pl-[0.5rem]'>{Released}</div>
            <div className='h-1/4 w-[100%] font-semibold text-[1rem]  text-slate-700 flex justify-start items-center pl-[0.5rem]'>{Genre}</div>
            <div className='h-1/4 w-[100%] font-semibold text-[1rem] text-slate-700 flex justify-start items-center pl-[0.5rem]'>{imdbRating}</div>
            <div className='h-1/4 w-[100%] font-semibold text-[1rem] text-slate-700 flex justify-start items-center pl-[0.5rem]'>{
            
            Country && (Country.length > 26 ? `${Country.slice(0, 26)}...` : Country)
            
            }</div>
          </div>
           <div className=' pl-[0.5rem] h-[30%] w-[100%]  flex items-center text-slate-500 '>
            <button className='hover:shadow-md hover:shadow-stone-500 lg:h-[80%] lg:w-[50%] md:h-[75%] md:w-[50%] sm:h-[75%] sm:w-[70%] h-[95%] w-[85%] border-slate-500 border-[0.15rem] rounded-md font-bold text-lg  hover:bg-slate-600 hover:text-white flex justify-center items-center' onClick={handleBack}>
            Go Back
            </button>
           </div>
          
        </div>
      </div> 
     </div>

     )
     }
     </div>
   
  )
}

export default SingleMovie
