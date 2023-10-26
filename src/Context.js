import {createContext,useContext, useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'

const AppContext = createContext();


const AppProvider = ({children})=>{
    const [movie,setMovie]=useState("titanic"); //input
    const [matches,setMatches]=useState([]);
    const [loading,setLoading]=useState(false);
    const [err,setErr]=useState(false)
    const api=`https://www.omdbapi.com/?apikey=427c68d6&s=${movie}`
    
    const getMovies= async (api)=>{
        setLoading(true);
        try{

        const res=await axios.get(api);
        console.log("my res is ",res)
        setLoading(false);
        setMatches(res.data.Search)
        if(res.data.Response==="False"){
            setErr(true)
        }
       else{
        setErr(false)
       }
        console.log(err)
        }
        catch(error){
         
            console.log(error);
            setLoading(false);
           
        }
    }
    // useEffect(()=>{
    //   getMovies(api);
        
    // },[movie])


    useEffect(() => {
        let timeOut = setTimeout(() => {
            getMovies(api);
        }, 1000);
        console.log("set");
        return () => {
          clearTimeout(timeOut);
          console.log("clear");
        };
      }, [movie]);



    return <AppContext.Provider value={{movie,setMovie,matches,setMatches,err,setErr,loading}}>{children}</AppContext.Provider>
} 

const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppProvider,useGlobalContext}