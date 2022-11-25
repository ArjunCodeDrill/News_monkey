import React, { Component } from 'react'

export default class NavItems extends Component {
  render() {
    return (
        <>
            <div className="newsItemContainer bg-white w-1/4 rounded mx-2 flex-wrap ">

          <div className="imgContainer min-h-[15rem] ">
            <img src="banner.png" className=' w-full' alt="gpd of war" />
            <h1 className='font-bold'>Today's import News</h1>
            <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam dolores commodi id iure provident neque quos quaerat, accusantium, quod rerum eveniet dolorum minus dignissimos quam maiores illum, dolorem illo!</div>
                </div>
            </div>
            
        </>
        
    )
  }
}
