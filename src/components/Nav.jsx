import React, { Component } from 'react'

import { BiSearchAlt } from 'react-icons/bi';


export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className='bg-black flex justify-between items-center'>
          <div className='left-Container'>
            <ul className='flex text-white children:px-2 h-10 items-center'>
            <li>NewMonkey</li>
            <li>Home</li>
            <li>About</li>
          </ul>
          </div>
          <div className='right-container'>
            <div>
              <input type={"text"} className="relative" />
           <BiSearchAlt className='text-2xl absolute top-2 right-0'/>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
