import React, { useState } from 'react'
import {
  signInWithEmailAndPassword, onAuthStateChanged

} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from '../src/components/Backgroundimage'
import Header from "../src/components/Header"

import { firebaseAuth } from "../src/utils/firebase-config";
import Backgroundimage from '../src/components/Backgroundimage';
export default function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password)
    } catch (error) {
      console.log(error)
    }

  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) 
    navigate("/");
  });

  return <Container >
    <BackgroundImage />
    <div className="content">
      <Header  />
      <div className='body flex column a0center j-center'>
        <div className="text flex column">
          <h3>Login</h3>
        </div>
        <form className='fo' action="myform.cgi">
          <input type={'email'} value={formValues.email} placeholder="Email address" name='email' onChange={(e) =>
            setFormValues({ ...formValues, [e.target.name]: e.target.value, })} /><br />
          
            <input
              type={'password'}
              placeholder="Password"
              maxLength={"10"}
              minLength={"6"}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })}
              name='password'
              value={formValues.password} />
           <br/>
          <button className='btn1' onClick={handleLogin}>Login</button>
            </form>
      </div>
    </div>
  </Container>

}
const Container = styled.div`
  background-color:black;

  position: relative;
  text-align: center; 
  background-color:black;

  .content {
    position: absolute;
    top: 0;
    left: 0;
    margin-top:0;

    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body{
    gap: 1rem;
      .text {  
        
        gap: 1rem;
        font-size: 2rem;
        text-align: center;

        h3{
          margin-right:3%;
        }
      }
      .fo {

        display: grid;
        grid-template-columns: ${({ showPassword }) =>
    showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        text-align:center;
        align-items:center;
        padding-left:38%;
        input {
          
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        .btn1 {
          padding: 1.5rem;
          padding-left:6rem;
          padding-right:6rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      .btn2 {
        padding: 1.5rem;
        padding-left:6rem;
        padding-right:6rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
        
      }
    }
  }
`;
