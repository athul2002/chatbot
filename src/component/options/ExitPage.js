import React, { useEffect, useState } from 'react'
const ExitPage = () => {

    const [count,setCount]=useState(5);
    useEffect(()=>{
        const timer=setTimeout(()=> {
          setCount(count-1);
            if(count===2)
            window.location.replace('/exit');
          }, 1000);
          return ()=>clearTimeout(timer);
    },[count]);
  return (
    <div style={{color:'white'}}>
        {`${count}..`}
    </div>
  ) 
}
export default ExitPage
