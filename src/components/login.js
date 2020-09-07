import React, {useState, useContext} from 'react'
import {Form, Button, Group, Text, Label, InputGroup, FormControl, Alert} from "react-bootstrap"
import '../App.css'
import AuthContext from '../context/authContext'
const Login = (props) => {

    const {error, setError, setAdmin, setUser} = useContext(AuthContext);
    const [form, setForm] = useState({
        email : '',
        password : ''
    })
    const handleChange = (e)=>{
        setForm({...form, [e.target.name] : e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(form.email);
        if(form.email==='' || form.password ==='')
        {
            setError('Please fill all the fields!');
        }
        else{
            if(form.email ==='user@test.com')
            {
                setUser();
                props.history.push('/user');
            }
            else if(form.email==='admin@test.com')
            {
                setAdmin();
                props.history.push('/admin');
            }
            else{
                setError('User not registered!');
            }
        }
    }

    return (
        <div className='bg'>
        <h1 style={{textAlign:'center', margin : '1rem auto', fontFamily : 'Poppins'}}>Login Page</h1>
        {error ? ( <Alert variant='danger' className='alert'>
    <i class="fa fa-info-circle" aria-hidden="true"></i>{" "}{error}
  </Alert>) : (null)}
        <div className='login'>
                <Form onSubmit={handleSubmit}> 
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1"><i class="fa fa-user-circle"></i></InputGroup.Text>
                    </InputGroup.Prepend>
          
                    <Form.Control type="email" placeholder="Email" name='email' value = {form.email} onChange={handleChange}/>
                </InputGroup>

            <InputGroup className="mb-3">
            <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1"><i class="fa fa-key"></i></InputGroup.Text>
                    </InputGroup.Prepend>
          
                    <Form.Control type="password" placeholder="Password" name= 'password' onChange = {handleChange}/>
             
                </InputGroup>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </div>
        </div>
    )
}

export default Login
