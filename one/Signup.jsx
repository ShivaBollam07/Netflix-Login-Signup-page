import React, { useState } from 'react'
import {
  createUserWithEmailAndPassword, onAuthStateChanged,
  
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from '../src/components/Backgroundimage'
import Header from "../src/components/Header"

import { firebaseAuth } from "../src/utils/firebase-config";
export default function Signup() {
const [showPassword, setShowPassword] = useState(false);
      const [formValues, setFormValues] = useState({
            email: "",
            password: "",
      });
  const navigate = useNavigate();
  const handleSignin = async () => {
        try {
          const {email,password} = formValues;
          await createUserWithEmailAndPassword(firebaseAuth,email,password)
        } catch (error) {
          console.log(error)
        }
        
    };
   
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser)
    navigate("/");

  });
  
return <Container ShowPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
      <Header />
      <div className='body flex column a0center j-center'>
          <div className="text flex column">
            <h2>Unlimited movies, TV shows and more.</h2>
            <h4>Watch anywhere. Cancel anytime.</h4><br />
            </div>
        <form className='fo' action="myform.cgi">
        <input type={'email'} value={formValues.email} placeholder="Email address" name='email' onChange={(e) =>
              setFormValues({...formValues,[e.target.name]: e.target.value,})}/><br/>
        {showPassword && (
          <input 
          type={'password'} 
           placeholder="Password"
             maxLength={"10"}
              minLength={"6"}
               onChange={(e) =>
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value,})} 
           name='password' 
            value={formValues.password}/>)}
        {!showPassword && (
          <button className='btn1' onClick={() => setShowPassword(true)}>Get Started</button>
        )}<br/>
        {showPassword && <button className='btn2' onClick={((handleSignin))}  >Sign Up</button>}
       </form>
      </div>
      </div>
      </Container>
  
}
const Container = styled.div`
  position: relative;
  text-align: center;

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

        h1 {
          padding: 0 25rem;
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
