import React from 'react'

const Mapping = ({students}) => {

  return (
    <div>
        <h1>Mapping</h1>
        {students.map((student)=>(
            <h4>{student}</h4>
        ))}
    </div>
  )
}

export default Mapping;