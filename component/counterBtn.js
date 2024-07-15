"use client";
import { useState } from "react";
import "./counterBtn.css";

 export default function CounterBtn(){
    const [count, setCount]=useState(0);

    return(
        <button
            className="bg-blue-600 font-bold p-2 text-orange-600"
            onClick={()=>{
                setCount(count+1);
            }}
        >
            Count is {count}
        </button>
    );
 }