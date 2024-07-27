import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Routing = () => {
    const router = useNavigate();
  return (
    <div>
        <h1>Testing useNavigate</h1>
        <button onDoubleClick={()=>router('/')}>Go to Home page</button>
    </div>
  )
}
