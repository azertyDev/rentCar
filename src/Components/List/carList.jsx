import React from 'react';
import '../Css/list.css';

const CarList=({normalCarData})=>{
    console.log('normal', normalCarData)
    return(
        <div className="car_list">
             {
                 normalCarData.map((item)=>(
                     <div>{item.label}</div>
                 ))
             }
        </div>
    )
}

export default CarList;