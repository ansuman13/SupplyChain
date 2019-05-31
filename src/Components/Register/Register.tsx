import React from 'react'
import '../Register/register.css'
import {Container, Row,Col, Jumbotron, Form, Button,Popover, OverlayTrigger, } from 'react-bootstrap'
import Address from './Address/Address'
import Navbar from '../Layout/Navbar/Navbar'

interface MyProp{
    
}

interface MyState{
    registerForm: {
        organizationName:string ,
        regNo: number ,
        user: string,
        address: string,
        password: string,
        repassword: string,
        email: string,
        regDoc: string|void,
        orgType: string    
    },
    
}

class Register extends React.Component<MyProp, MyState>{
    constructor(props:any){
        super(props)
        this.state = {
            registerForm: {
                organizationName: 'defaultOrg',
                regNo: 1,
                user: 'default',
                address: 'deafultAddress1',
                password: 'default123456',
                repassword: 'default123456',
                email: "defaultuser@addon.com",
                regDoc: 'default1234567890',
                orgType: 'defaultVendor'
            }
        }
        
    }

    uploadImage = (event:any) => {
        let uploadImage =  event.target.files[0];
        let form = new FormData()
        form.append('regDoc',uploadImage)
        
        fetch('http://192.168.1.172:9595/upload/multiple', {
          method: "POST",
          body: form,
          credentials: 'same-origin', // include, *same-origin, omit
        })
        .then(response => response.text())
        .catch(error => console.error('Error:', error))
        .then(response1 => {
            this.setState({registerForm:{...this.state.registerForm, 'regDoc':response1}});
            // console.log('Success:', response1);
            })
        }

    handleFormSubmit = (event:any) => {
        const {registerForm} = this.state;
        console.log('registerForm', registerForm)
        event.preventDefault()
        console.log('form submitted',this.state)
        fetch('http://192.168.1.172:9595/actor/save', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'credentials':'include',
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(registerForm)
            }).then((res)=>{
                return res.json()
            }).then(function(res){
                if(res.response === 200){
                    console.log(res)
                }
                else{
                    console.log(res)
                }
            })
    }


    handleInputChange = (event: any) => {
        console.log('test');
        this.setState({registerForm: {...this.state.registerForm, [event.target.name]: event.target.value}});
    }

    


    render() {
        const popover = (
            <Popover id="popover-basic" title="Supporting Documents">
              It includes your organization <strong>PAN card</strong> or any other government cerfiticates.
            </Popover>
          );
    return (
        <>
        <Navbar/>
        <Row>
            <Col lg={6} className="offset-lg-3">
            <Container>
        
        <Jumbotron className="bg-light jubmotron1">
        <h2 className="title">Registration Form</h2>
            <Form onSubmit={this.handleFormSubmit}> 
            
            <Row>
                <Col xs={12} md={6} lg={6}>
                    <Form.Group>
                            <Form.Label>Organization Name</Form.Label>
                            <Form.Control name='organizationName' type="text" onChange={this.handleInputChange}></Form.Control>
                        </Form.Group>
                </Col>

                <Col xs={12} md={6} lg={6}>
                    <Form.Group>
                            <Form.Label>Organization Reg. No</Form.Label>
                            <Form.Control name="regNo" onChange={this.handleInputChange} type="text"></Form.Control>
                        </Form.Group>
                </Col>
                
            <Col xs={12} md={12} lg={12}>
            <Form.Group>
            <Form.Label className="mr-3">Organization Type</Form.Label>
           <Form.Check
                inline
                defaultChecked
                label="vendor"
                type='radio'
                name='orgType'
                onChange = {this.handleInputChange}
                id={`inline-radio-3`}
                />
           <Form.Check
                inline
                label="Supplier"
                type='radio'
                name='orgType'
                onChange = {this.handleInputChange}
                id={`inline-radio-3`}
                />
           <Form.Check
                inline
                label="Both Vendor & supplier"
                type='radio'
                name='orgType'
                onChange = {this.handleInputChange}
                id={`inline-radio-3`}
                />
            </Form.Group>
        </Col>

        <Col xs={12} md={12} lg={12}>
            <Address/>
        </Col>

            {/* <select name="type" className="form-control" onChange={this.handleInputChange}>
                <option value="Vendor">Vendor</option>
                <option value="Supplier">Supplier</option>
                <option value="Both">Both Supplier and Vendor</option>
            </select> */}
            <Col xs={12} md={12} lg={12} className="mt-2">
            
            
                    <div className="form-group">
                        <Form.Label>Supporting Document                        
                            <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
                               <i className="far fa-question-circle ml-1"></i>
                            </OverlayTrigger>
                        </Form.Label>

                        <input className="form-control" type="file" name="files" onChange={this.uploadImage} multiple></input>       
                    </div>
            </Col>
            
               <Col xs={12} md={6} lg={6}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="user" type="text" onChange={this.handleInputChange}></Form.Control>
                    </Form.Group>
               </Col> 
               
               <Col xs={12} md={6} lg={6} > 
                <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control  name="email" type="email" onChange={this.handleInputChange}></Form.Control>
                </Form.Group>
                </Col> 
            
            <Col xs={12} md={6} lg={6}>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" onChange={this.handleInputChange}></Form.Control>
                </Form.Group>
            </Col> 

            <Col xs={12} md={6} lg={6}>
               <Form.Group>
                    <Form.Label>Retype-Password</Form.Label>
                    <Form.Control name="repassword" type="password" onChange={this.handleInputChange}></Form.Control>
                </Form.Group>
            </Col>
               
              
            </Row>
               
             
           
            <Row>
                <Col>
                    <Button variant="info" type="submit">Submit</Button>
                </Col>
            </Row>

           </Form>

        </Jumbotron>
    </Container>
            </Col>

        </Row>
    </>
    )
}
}

export default Register