import React from 'react'
import { AwaitProps, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Logo from '../assets/logo.png'
import Signup from '../pages/Signup';
export default function Header(props) {
  const navigate = useNavigate()
  return (
    <Container className='flex a-center j-between'>
    <div className='logo'>
        <img src={Logo} alt="Logo"/>
    </div>
    <button onClick={() =>navigate(props.Login? "/" : "/Signup")}>
        {props.Login ? "Login" : "Sign Up"} 
    </button>
    </Container>
  )
}

const Container = styled.div`
padding:0 4rem;
.logo{
  img{
    height:5rem;
  }
  
  }

  .h3headig{
     margin-left:59%
  }

button{
    padding: 0.5rem 1rem;
    background-color:#e50914; 
    border:none;
    cursor:pointer;
    color:#fff;
    border-radius:0.2rem;
    font-weight:bolder;
    font-size:1.05rem;

}`;
