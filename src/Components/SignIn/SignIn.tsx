import React from 'react';
import './signin.css'
import Alertbox from '../AlertBox/Alertbox'
import {Container, Row,Col, Jumbotron, Form, Button} from 'react-bootstrap'
import signinImage from './signin.jpg'
import Navbar from '../Layout/Navbar/Navbar'


const SignIn = () =>{
    const [loggedin, setloggedin] = React.useState(false)
    const [loginerror, setloginerror] = React.useState(false)

    const handleSubmit =(e:any) =>{
        e.preventDefault()
        let email = ((document.getElementById('email')) as HTMLInputElement).value
        let password = ((document.getElementById('password')) as HTMLInputElement).value
        let loggedin = ((document.getElementById('loggedin')) as HTMLInputElement).value
        console.log({'email':email, 'password':password})

        const invocation = new XMLHttpRequest();
        const url = 'http://bar.other/resources/public-data/';
        
        fetch('http://localhost:8085/user/login/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'credentials':'include' 
            },
            body: JSON.stringify({
                username: email,
                password: password,

            })
            }).then((res)=>{
                return res.json()
            }).then(function(res){
                if(res.response === 200){
                   setloggedin(true)
                   setloginerror(false)
                }
                else{
                    setloggedin(false)
                    setloginerror(true)
                }
            })
    }

    const handleChange = (event:any) =>{
        console.log('changeHandler')
        console.log(event.target.id, event.target.value)
    }
    

    return (
        <>
        <Navbar/>
        <Container>
            <Row className="sigin-box-row offset-md-1">
                
                <Col xs={10} md={6} sm={6} className="padding-0 ">
                    {/* <div className="signin-image"></div> */}
                    <img src={signinImage} className="img-fluid equal-height border-round-image" alt="ImageSign"/>
                </Col>
                <Col xs={10} md={6} sm={6} lg={4} className="padding-0" >
                <Jumbotron className="equal-height border-round-signin">
                    <div className="mt-2">
                    <h1 className="text-center">Sign in </h1>
                        { loggedin && <Alertbox type='success' message='Login Successfull' />}
                        { loginerror && <Alertbox type='error' message='Login failed' /> }
                        <form className='' onSubmit={handleSubmit}>
                        <div className="form-group form-row">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" className="form-control" required  onChange={handleChange}/>
                        </div>
                        <div className="form-group" >
                            <label htmlFor="passwprd">Password</label>
                            <input type="password" id="password" name="password" className="form-control" required  onChange={handleChange}/>
                        </div>
                        <div className="form-group pl-4">
                            <input type="checkbox" className="form-check-input" id='loggedin' name="loggedin" onChange={handleChange}/>   
                            <label htmlFor="loggedin">Keep Logged-In</label>
                        </div>
                        <input type="submit" className='btn btn-supply btn-block' value="Login"/>   
                        <div className="socialLogin ">
                            <h4 className="text-center">Sign in using</h4>
                            <div className="pl-5">
                            <i className="fab fa-facebook-square fa-2x pr-4"></i>
                            <i className="fab fa-google fa-2x pr-4"></i> 
                            <i className="fab fa-linkedin fa-2x"></i>
                            </div>
                        </div>
                        

                        </form>    
                    </div>
                        </Jumbotron>
                </Col>
                
                   
            </Row>
                {/* <Col xs={6}>
                    <Jumbotron className="signin-image">Image</Jumbotron>
                </Col>

                <Col xs={4}>
                    <Jumbotron> 
                       
                    </Jumbotron>
                </Col>
            </Row> */}

        </Container>


       </>
    )
}

export default SignIn

 // <div className="sign-in-box">
        
        //     <div className="row">


        //         <div className="col-sm-6 offset-sm-4 signin-form">
        //              <div className="jumbotron">
                       
        //         </div>
        //     </div>
        // </div>
            
        // </div>