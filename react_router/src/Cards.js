import React from 'react'
import pic from './Assets/fame.jpg'
import pro from './Assets/hitesh.jpg'
import ppt from './Assets/anurag.jpg'

const Cards = () => {
  return (
    <>
   <div className='cards-main'>
    <div className='card-1'>
        <img src={pic} alt='profile' width='450px'></img>
        <h2>Anil Bhangay</h2>
        <p>Fullstack web developer Learning.</p>
    </div>
       <div className='card-2'>
        <img src={pro} alt='pic' width='450px'></img>
         <h2>Hitesh Choudhary</h2>
         <p>Fullstack web developer Trainer.</p>
       </div>
       <div className='card-3'>
        <img src={ppt} alt='photo' width='450px'></img>
        <h2>Anurag Tiwari</h2>
        <p>Fullstack web developer Mentor.</p>
       </div>
      </div> 
    </>
  )
}

export default Cards;