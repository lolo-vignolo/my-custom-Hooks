 import { useState } from 'react';
 
 
 export const useCounter = (initialValue = 10) => {

    const [counter, setstate] = useState(initialValue)

    const increment = () =>{
        setstate ( counter + 1);
    };

    const decrement = () => {
        setstate (counter - 1)
    };

    const reset = ()=>{
        setstate ( initialValue )
    };
    
     return {
         counter,
         increment,
         decrement,
         reset
        }; 
    }
 
    // const increment = (fragment = 1) =>{
    //     setstate ( counter + fragment);
    // };

    // const decrement = (fragment = 1) => {
    //     setstate (counter - fragment)
    // };

    // const reset = ()=>{
    //     setstate ( initialValue )
    // };
