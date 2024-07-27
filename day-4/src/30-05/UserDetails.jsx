import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
    const {username} = useParams();
  return (
    <div>
        <h1>UserDetails - {username}</h1>
    </div>
  )
}
