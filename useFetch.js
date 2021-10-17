import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setstate] = useState({data:null, loading: true , error:null})

    useEffect(() => {
    
        return ()=>{
            isMounted.current = false;
        }
    }, [])
    
    useEffect(() => {

        setstate({data:null, loading: true , error:null})

            fetch(url)
                .then (resp => resp.json())
                .then(data =>{

                    if(isMounted.current){
                        setstate({
                        loading: false, 
                        error:null,
                        data
                        });
                    }
                })
               .catch (()=>{
                    setstate({
                        data:null,
                        loading: true ,
                        error: "no se puedo cargar la info"
                    })

               })    
            }
    , [url])

    return state;

}


//https://www.breakingbadapi.com/api/quotes/3


// ASI ES EL CODIGO ORIGINAL, PERO HACIENDOLO ASI ME FALLA EL TEST, POR LO CUAL AL ORIGINAL LE QUITE EL IF STATEMENT.


// useEffect(() => {

//     if(isMounted.current){

//     setstate({data:null, loading: true , error:null})

//     fetch(url)
//     .then (resp => resp.json())
//     .then(data =>{
//         setstate({
//           loading: false, 
//            error:null,
//            data
//         })
//     })
// }else{
//     console.log("setState no se llamo por que esta desmontado")
// }
// }, [url])

// return state;
