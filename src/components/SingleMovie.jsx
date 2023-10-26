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
    <div className='h-screen w-screen flex justify-center items-center bg-slate-800'>
    
    {
     Loader === true ? (
      <div className="spinner-container "><div className="loading-spinner "></div></div>
     ):(
      <div className='h-[40%] w-[35%] bg-white flex'>
      <div className='h-[100%] w-[40%]'><img src={Poster} className='h-[100%] w-[100%]'/></div>
      <div className='h-[100%] w-[60%] bg-white text-gray-800 flex items-center'>
        <div className='h-[70%] w-[100%]  flex flex-col space-y-3'>
          <div className='h-[20%] w-[100%] '>
            <div className='font-bold text-[1.5rem] pl-[0.5rem] text-slate-600'>{Title}</div>
          </div>
          <div className='h-[80%] w-[100%]  flex flex-col items-center'>
            <div className='h-1/4 w-[100%] font-semibold text-[1rem]  text-slate-700 flex justify-start items-center pl-[0.5rem]'>{Released}</div>
            <div className='h-1/4 w-[100%] font-semibold text-[1rem]  text-slate-700 flex justify-start items-center pl-[0.5rem]'>{Genre}</div>
            <div className='h-1/4 w-[100%] font-semibold text-[1rem] text-slate-700 flex justify-start items-center pl-[0.5rem]'>{imdbRating}</div>
            <div className='h-1/4 w-[100%] font-semibold text-[1rem] text-slate-700 flex justify-start items-center pl-[0.5rem]'>{Country}</div>
          </div>
           <div className=' pl-[0.5rem] h-[30%] w-[100%]  flex items-center text-black '>
            <button className='h-[75%] w-[30%] border-slate-500 border-[0.15rem] rounded-md font-bold text-lg' onClick={handleBack}>
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
