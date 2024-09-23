// custom is generally a type of function which can use various built-in hooks like useEffect,useRef,...etc.

import { useEffect,useState } from "react";

function useCurrencyInfo(currency){

    const [data,setData]=useState({})
// useEffect isliye use kiya ki is se automatically fetch call ho jayega, consist krta hai 2 compnents 1) callback fn and 2) dependency array..

useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/cufrrency-api@1/latest/currencies/${currency}.json`)
    .then((res)=>res.json())
    .then((red)=>setData(res[currency]))
    console.log(data);
},[currency]) 

console.log(data);
return data;
}

export default useCurrencyInfo;