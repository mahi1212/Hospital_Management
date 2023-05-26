import React from 'react'
import notFoundImage from '../../utils/404Pagemain.png'
const PageNotFound = () => {
  return (
    <div style={{height:'80vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <img src={notFoundImage} style={{width:'100%', height:'100%'}} alt="404_image" />    
    </div>
  )
}

export default PageNotFound