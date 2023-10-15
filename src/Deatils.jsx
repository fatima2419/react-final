import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Deatils() {
    const Location=useLocation();
    const prop =Location.state;

  return (
    
    <div>
      {prop.name}
    </div>
  )
}
