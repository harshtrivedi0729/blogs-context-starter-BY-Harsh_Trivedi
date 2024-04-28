import React from 'react'

const Header = () => {
  return (
    // apde jyare scroll kariye tyare aa apdu heading che te aek jagiyaye "fixed" rahe te mate apde avi rite lakhelu che and Background color pan atle j apelo che j thi content a apda hearder niche thi jay tyare apanane na dekhay.......avu same vstu apde footer mate karishu
    <div className='w-full border shadow-md py-1 fixed top-0 bg-white '>
      <header className='text-center' >
        <h1 className='text-3xl font-bold uppercase bg-orange-400'>TRIVEDI's Blogs</h1>
      </header>
    </div>
  )
}

export default Header
