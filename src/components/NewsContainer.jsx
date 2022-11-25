import React, { Component } from 'react'
import NavItems from './NavItems'

export default class NewsContainer extends Component {

  constructor() {
    super()
  console.log("hello")
}


  render() {
    return (
      <div className='w-2/3 bg-slate-800 m-auto p-2 flex flex-col '>  

        <div className='flex m-2  justify-between'>
         <NavItems/>  
        <NavItems />  
        <NavItems />  
        </div>  
        <div className=' flex m-2 justify-between'>

          <NavItems />  
          <NavItems />  
          <NavItems />  
        </div>
        

      </div>
      
      
      
      
      
      
      
    )
  }
}
