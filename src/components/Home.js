import React, { useState,useRef } from 'react'
import { useNavigate } from "react-router-dom";
import '../App.css'


function Home() {
const [lists,setLists] = useState([{check:'fair', check2:'fair', check3:'fair',check4:'fair', name:'Anubhav', phone:'7384995155', email:'malhotraAnubhav95@gmail.com'}]);
const [check,setCheck] = useState('excellent')
const [check2,setCheck2] = useState('excellent')
const [check3,setCheck3] = useState('excellent')
const [check4,setCheck4] = useState('excellent')
const [flag,setFlag] = useState(false)
const [flag2,setFlag2] = useState(false)
const [flag3,setFlag3] = useState(false)
const [loggedIn,setLoggedIn] = useState(false);
const [error,setError] = useState('Please enter the value for the above field')
const name = useRef('')
const phone = useRef(999999999)
const email = useRef('')
const select = useRef('')
let navigate = useNavigate();

  const body = {
    background:'#E0FFFF',
    padding:'20px',
  }
  const innerbody = {
    width:'100%',
    height:'44px',
    background:'white',
    borderRadius:'5px',
    padding:'10px',
    fontWeight:'600',
    marginBottom:'20px'
  }

  const innerbody2 = {
    background:'white',
    width:'100%',
    display:'flex',
    columnGap:'100px',
    padding:'15px'
  } 
  const innerbody3 = {
    background:'white',
    width:'100%',
    display:'flex',
    flexDirection:'column',
    rowGap:'15px',
  }  

  const innerbody4 = {
    background:'white',
    width:'100%',
    display:'flex',
    columnGap:'10px',
  } 

  const inputStyle = {
    width: '100%'
  }

const label = {
  paddingTop:'10px',
  marginBottom:'-20px',
  fontWeight:'500',
  fontSize:'14px',
  paddingBottom:'5px'
}
const label3 = {
  paddingTop:'80px',
  marginBottom:'-20px',
  fontWeight:'500',
  fontSize:'14px',
  paddingBottom:'5px'
}
const errorbg = {
      background:'#f8baba',
      color:'red',
      height:'25px',
      borderRadius:'5px',
      paddingLeft:'10px',
      fontSize:'14px'
}
const inputbtn = {
      background:'#77DD77',
      color:'white',
      padding:'10px',
      borderRadius:'5px',
      border: '1px solid #77DD77',
      position:'absolute',
      right:20,
      top:'420px'
}
const addFormData = (event) => {
      event.preventDefault();
      if(name.current.value === ''){
            setFlag(true)
      }
      else if(phone.current.value === ''){
            setFlag2(true)
      }
      else if(email.current.value === ''){
            setFlag3(true)
      }
      else{
            const list = [...lists];
            const items = {};
            items.check = check;
            items.check2 = check2;
            items.check3 = check3;
            items.check4 = check4;
            items.name = name.current.value;
            items.phone = phone.current.value;
            items.email = email.current.value;
            list.push(items)
            setLists(list)
            console.log(lists)
            localStorage.setItem("token",JSON.stringify(lists));
            setLoggedIn(true);
            if(loggedIn){
              return navigate('/thanks');
            }

      }  
  }


  return (
    <>
        <div style={body}>

            <div style={innerbody}>
                <p>Aromatic Bar</p>
            </div>

        <form style={innerbody2}
         
          onSubmit={(event) => addFormData(event)}>  
            <div style={innerbody3}>
              <p style={label}>Customer Name <span style={{color:'red'}}>*</span></p>
                <input ref={name} type='text' placeholder='Eg. jon snow'/>
                {flag ?<div style={errorbg}><p>{error}</p></div>:''}
                
                <p style={label}>Phone <span style={{color:'red'}}>*</span></p>
                <div style={innerbody4}>
                    <select ref={select} defaultValue={'Ind'}>
                          <option value="Ind" disabled>Ind</option>
                    </select>

                    <input type='number' ref={phone} placeholder='9999999999' style={inputStyle}/><br/>
                   
                </div>
                {flag2 ?<div style={errorbg}><p>{error}</p></div>:''}
                <p style={label}>Please rate the quality of the service recieved from your host <span style={{color:'red'}}>*</span></p>
                    <div style={innerbody4}>
                        <div class="form-check">
                              <input  class="form-check-input" type="radio" value="excellent" name='1' id="excellent"  onChange={(e) => setCheck(e.target.value)}/>
                              <label class="form-check-label" for="excellent">
                              Excellent
                              </label>
                        </div>

                        <div class="form-check">
                              <input class="form-check-input" type="radio" value="fair" name='1' id="fair" onChange={(e) => setCheck(e.target.value)}/>
                              <label class="form-check-label" for="fair">
                              Fair
                              </label>
                        </div>

                        <div class="form-check">
                              <input class="form-check-input" type="radio" name='1' value="good"  id="good" onChange={(e) => setCheck(e.target.value)}/>
                              <label class="form-check-label" for="good">
                              Good
                              </label>
                        </div>

                        <div class="form-check">
                               <input class="form-check-input" type="radio" name='1' value="bad" id="bad" onChange={(e) => setCheck(e.target.value)}/>
                              <label class="form-check-label" for="bad">
                              Bad
                              </label>
                        </div>
                    </div>


                    
                <p style={label}>Was our restaurant clean? <span style={{color:'red'}}>*</span></p>
                    <div style={innerbody4}>
                        <div class="form-check">
                              <input  class="form-check-input" type="radio" name='2' value="excellent" id="excellent2" onChange={(e) => setCheck2(e.target.value)}/>
                              <label class="form-check-label" for="excellent2">
                              Excellent
                              </label>
                        </div>

                        <div class="form-check">
                              <input  class="form-check-input" type="radio" name='2' value="fair" id="fair2" onChange={(e) => setCheck2(e.target.value)}/>
                              <label class="form-check-label" for="fair2">
                              Fair
                              </label>
                        </div>

                        <div class="form-check">
                              <input  class="form-check-input" type="radio" name='2' value="good" id="good2" onChange={(e) => setCheck2(e.target.value)}/>
                              <label class="form-check-label" for="good2">
                              Good
                              </label>
                        </div>

                        <div class="form-check">
                              <input  class="form-check-input" type="radio" name='2' value="bad" id="bad2" onChange={(e) => setCheck2(e.target.value)}/>
                              <label class="form-check-label" for="bad2">
                              Bad
                              </label>
                        </div>
                    </div>
            </div>



            <div style={innerbody3}>
            <p style={label}>Email <span style={{color:'red'}}>*</span></p>
                <input type='email' ref={email} placeholder='Eg. jon snow'/>
                {flag3 ?<div style={errorbg}><p>{error}</p></div>:''}
                


                <p style={label3}>Please rate the quality of your beverage <span style={{color:'red'}}>*</span></p>
                    <div style={innerbody4}>
                        <div class="form-check">
                              <input  class="form-check-input" type="radio" name='3' value="excellent" id="excellent3" onChange={(e) => setCheck3(e.target.value)}/>
                              <label class="form-check-label" for="excellent3">
                              Excellent
                              </label>
                        </div>

                        <div class="form-check">
                              <input  class="form-check-input" type="radio" name='3' value="fair" id="fair3" onChange={(e) => setCheck3(e.target.value)}/>
                              <label class="form-check-label" for="fair3">
                              Fair
                              </label>
                        </div>

                        <div class="form-check">
                              <input  class="form-check-input" type="radio" name='3' value="good" id="good3" onChange={(e) => setCheck3(e.target.value)} />
                              <label class="form-check-label" for="good3">
                              Good
                              </label>
                        </div>

                        <div class="form-check">
                              <input  class="form-check-input" type="radio" name='3' value="bad" id="bad3" onChange={(e) => setCheck3(e.target.value)}/>
                              <label class="form-check-label" for="bad3">
                              Bad
                              </label>
                        </div>
                    </div>


                    
                <p style={label}>Please rate your overall dining experience <span style={{color:'red'}}>*</span></p>
                    <div style={innerbody4}>
                        <div class="form-check">
                              <input  class="form-check-input" type="radio" name='4' value="excellent" id="excellent4" onChange={(e) => setCheck4(e.target.value)}/>
                              <label class="form-check-label" for="excellent4">
                              Excellent
                              </label>
                        </div>

                        <div class="form-check">
                              <input  class="form-check-input" type="radio" name='4' value="fair" id="fair4" onChange={(e) => setCheck4(e.target.value)}/>
                              <label class="form-check-label" for="fair4">
                              Fair
                              </label>
                        </div>

                        <div class="form-check">
                              <input  class="form-check-input" type="radio" name='4' value="good" id="good4" onChange={(e) => setCheck4(e.target.value)}/>
                              <label class="form-check-label" for="good4">
                              Good
                              </label>
                        </div>

                        <div class="form-check">
                              <input  class="form-check-input" type="radio" name='4' value="bad" id="bad4" onChange={(e) => setCheck4(e.target.value)} />
                              <label class="form-check-label" for="bad4">
                              Bad
                              </label>
                        </div>
                    </div>

            </div>
            <div>
            <input style={inputbtn}
              className="mainbtn" 
              type="submit"
              value="Submit Review" />
              </div>
            </form>

        </div>
    
    </>
  );
}

export default Home;
