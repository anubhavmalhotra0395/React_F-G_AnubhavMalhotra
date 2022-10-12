import React from 'react'
import { NavLink} from 'react-router-dom'
import '../App.css'
import Tick from '../images/tick.png'

const Thanks = () => {
 

    const feedback = {
        display:'flex',
        flexDirection:'column',
        textAlign: 'center',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:'220px'
    }
    const close = {
        background:'violet',
        color:'white',
        paddingLeft:'30px',
        paddingRight:'30px',
        paddingTop:'5px',
        paddingBottom:'5px',
        border:'none',
        borderRadius:'5px'
    }
  return (
    <div style={feedback}>
        <img src={Tick} style={{width:'100px'}}/>
        <h4>Thank you for providing your Feedback</h4>
        <p>We will work towards improving your experience</p>
        <br/>
        <NavLink to='/data'> <button style={close}>Close</button></NavLink>
    </div>
  )
}

export default Thanks