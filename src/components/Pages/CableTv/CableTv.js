import React from 'react'
import CmsBanner from '../CmsBanner/CmsBanner';
import "../CmsBanner/CmsBanner.css"
import ComlinkTv from "../../../assets/images/comlinktv.png"
function CableTv() {
  return (
    <div>
        <CmsBanner/>
        <div className='custom-container'>
        <div className='cable_tv_content'>
            <img src={ComlinkTv}/>
        </div>
        </div>
     
    </div>
  )
}

export default CableTv
