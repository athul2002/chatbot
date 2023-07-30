import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addAge } from '../../redux/Action';
const ExitPage = (props) => {

    const [count,setCount]=useState(5);
    useEffect(()=>{
        setTimeout(()=> {

          setCount(count-1);
            if(count===2)
            window.location.replace('/exit');
          }, 1000);

    },[count]);
  return (
    <div style={{color:'white'}}>
        {`${count}..`}
    </div>
  )
}

export default ExitPage
