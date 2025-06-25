import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Body() {
  const[items,setitems]=useState([]);

  useEffect(()=>{

  axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')

.then(res=>{
    console.log(res.data);
    setitems(res.data.meals);
})
.catch(err=>{
    console.log("Error:",err);
});

},[]);
const itemlists=items.map((obj)=>{
     return(
     <div className='cardDesign' id='new123'>
      <p>{obj.strMeal}</p>
      <img src={obj.strMealThumb}></img>

     </div>
     );
});



  return (
    <div>{itemlists}</div>
  );
}


export default Body;