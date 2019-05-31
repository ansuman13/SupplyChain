import React from 'react'

interface props{
    type:string,
    message:string,
}

const Alertbox = ({type,message}:props) =>{
        return(
            <div> 
            {(type==='success') && <div className="alert alert-success">
                {message} </div> }
            {(type==='error') && <div className="alert alert-danger">
                {message} </div> }
            </div>
        )
   
    }

export default Alertbox