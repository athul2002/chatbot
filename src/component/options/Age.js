import React, { useState } from 'react'
import { addAge, addName } from '../../redux/Action';
import { useDispatch } from 'react-redux';
import './Age.css'
const Age = (props) => {
    const dispatch=useDispatch()

   const [show,setShow]=useState(true);
    const ageClick=(e)=>{
      setShow(false);
      const age1=e.target.value
      dispatch(addAge(age1))
      const len=(props.state.messages.length)-2;
      dispatch(addName(props.state.messages[len].message))
      props.actionProvider.agePage(age1);
    }
  return (
    <div className='ageContainer'>
      <select className='selectContainer' style={{display:show?'block':'none'}} onChange={(e)=>{ageClick(e)}}>
        <option value={''}>Select Age</option>
        <option value={`18`}>18</option>
        <option value={`19`}>19</option>
        <option value={`20`}>20</option>
        <option value={`21`}>21</option>
        <option value={`22`}>22</option>
        <option value={`23`}>23</option>
        <option value={`24`}>24</option>
        <option value={`25`}>25</option>
        <option value={`26`}>26</option>
        <option value={`27`}>27</option>
        <option value={`28`}>28</option>
        <option value={`29`}>29</option>
        <option value={`30`}>30</option>
        <option value={`31`}>31</option>
        <option value={`32`}>32</option>
        <option value={`33`}>33</option>
        <option value={`34`}>34</option>
        <option value={`35`}>35</option>
        <option value={`36`}>36</option>
        <option value={`37`}>37</option>
        <option value={`38`}>38</option>
        <option value={`39`}>39</option>
        <option value={`40`}>40</option>
      </select>
    </div>
  )
}

export default Age
