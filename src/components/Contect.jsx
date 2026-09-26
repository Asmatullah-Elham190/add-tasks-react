import React from 'react'
import { useNavigate } from 'react-router-dom';
export const Contect = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        console.log('clicked ');
        navigate('/');
    }
  return (
      <>
      
        <div>Contect</div>
      <button onClick={handleClick}> Come back</button>
      </>
  )
}
