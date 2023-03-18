import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import SInput from '../Componenets/Input'
import SButton from '../Componenets/Button'

const Form = styled.form`
  font-family: 'Roboto', 'arial';

  color: #333;
  font-size: 15px;
  line-height: 18px;
  box-sizing: border-box;
  padding-top: 28px;
  padding-bottom: 40px;
  background: #f8f8f8;
  border: 1px solid #e9e9e9;
  padding-right: 40px;
  padding-left: 40px;
  width: 390px;
  margin-bottom: 0;
`

const H5 = styled.h5`
  box-sizing: border-box;
  color: inherit;
  font-family: 'Roboto', 'arial';
  font-weight: 900;
  font-size: 18px;
  line-height: 30px;
  margin-top: 5px;
  margin-bottom: 30px;
  text-align: center;
`

const Label = styled.label`
  font-family: 'Roboto', 'arial';
`

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const [input, setInput] = useState({
    email: '',
    password: '',
  })

  const OnChangeInput = (value, name) => {
    console.log(value, name)
    // setEmail(e.target.value);
    // setPassword(e.target.value);

    setInput({ ...input, [name]: value })
    // setInput((prevState)=>{
    //     return({
    //     ...prevState,
    //     name:value}
    //     )
    // })
  }

  useEffect(() => {
    let user = localStorage.getItem('user')
    if (user) {
      navigate('/task-details')
    }
  }, [])

  const SubmitHandler = (e) => {
    e.preventDefault()
    if (input.email.trim().length === 0 || input.password.trim().length === 0) {
      alert('all fields required')
      return
    }
    localStorage.setItem('user', input.email)
    navigate('/task-details')
    console.log('api call')
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height:"90vh"
      }}
    >
      <Form onSubmit={SubmitHandler}>
        <H5>Log In</H5>
        <div>
          <Label>Email</Label>
          <br></br>
          <SInput
            type="email"
            // value={email}
            value={input.email}
            name="email"
            // onChange={OnChangeInput}
            onChange={(e) => OnChangeInput(e.target.value, 'email')}
            required
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Label>Password</Label>
          <br></br>
          <SInput
            type="password"
            // value={password}
            value={input.password}
            name="password"
            // onChange={OnChangeInput}
            onChange={(e) => OnChangeInput(e.target.value, 'password')}
            // onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <SButton type="submit" primary={true}>
            Login
          </SButton>
        </div>
      </Form>
    </div>
  )
}

export default Login
