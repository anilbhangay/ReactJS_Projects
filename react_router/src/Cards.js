import React from 'react'
import pic from './Assets/fame.jpg'
import pro from './Assets/hitesh.jpg'
import ppt from './Assets/anurag.jpg'

const Cards = () => {
  return (
    <>
   <div className='cards-main'>
       <div className='card'>
        <img src={pro} alt='pic' width='180px'></img>
         <h2>Hitesh Choudhary</h2>
         <p>Fullstack web developer Trainer.</p>
         <i class="fa-brands fa-linkedin"></i>
       </div>
       <div className='card'>
        <img src={pic} alt='profile' width='180px' height='180px'></img>
        <h2>Anil Bhangay</h2>
        <p>Aspiring Fullstack web developer.</p>
        <i class="fa-brands fa-linkedin"></i>
    </div>
       <div className='card'>
        <img src={ppt} alt='photo' width='180px'></img>
        <h2>Anurag Tiwari</h2>
        <p>Fullstack web developer Mentor.</p>
        <i class="fa-brands fa-linkedin"></i>
       </div>
      </div> 
    </>
  )
}

export default Cards;