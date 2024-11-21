import React from 'react'

function UseFetchApi() {

   const response =  fetch('https://dummyjson.com/recipes');
   response.then((res)=>{
     console.log(res);
   })
   .catch((error)=>{
    console.log(error)
   })
  return (
    <div>
      Use Fetch Api
    </div>
  )
}

export default UseFetchApi
