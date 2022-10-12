import React,{useState,useEffect} from 'react'

const Data = () => {
    const [tokens,setTokens] = useState([]); 
    const datastyle = {
        background:'#f9f9f9',
        marginTop:'200px',
        borderTop:'2px solid black'
    }
    const inputbtn = {
      background:'#77DD77',
      color:'white',
      padding:'10px',
      borderRadius:'5px',
      border: '1px solid #77DD77',
      position:'absolute',
      right:20,
      top:'140px'
}
    useEffect (() => {
      
        let retrievedData = localStorage.getItem("token");
        const arr = JSON.parse(retrievedData);
      
        var names = arr.map(function(i) {
            return i
          });
        setTokens(names)
      
    },[])
  
  return (
    <>
    <button style={inputbtn}>Add New</button>
    <div style={datastyle}>

        <table class="table">
        <thead>
            <tr>
            <th scope="col">Customer Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Quality of Service</th>
            <th scope="col">Was our Restaurant clean?</th>
            <th scope="col">Quality of Beverage</th>
            <th scope="col">Overall Dining Experience</th>
            </tr>
        </thead>
                <tbody>
                    {tokens.map((token,index) => {
                           
                           return (
                           <tr>
                            <th scope="row">{token.name}</th>
                            <td>{token.email}</td>
                            <td>{token.phone}</td>
                            <td>{token.check}</td>
                            <td>{token.check2}</td>
                            <td>{token.check3}</td>
                            <td>{token.check4}</td>
                            </tr>
                            )
                    })}
            
    
                </tbody>

      
        </table>

    </div>
    </>
  )
}

export default Data