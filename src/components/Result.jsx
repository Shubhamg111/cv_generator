import React, { useEffect, useState } from 'react'

const Result = () => {
const [aData,setAboutData] = useState({})

useEffect(()=>{
  if (aData){
    setAboutData(JSON.parse(localStorage.getItem('aboutData')))
  }
  else{
    setAboutData({})
  }

})
  return (
    <div>
      <p>{aData.fname}</p>
    


    
    </div>
  )
}

export default Result
