import React from 'react'
import pic from './Assets/fame.jpg'
import pro from './Assets/hitesh.jpg'
import ppt from './Assets/anurag.jpg'

const Cards = () => {
  return (
    <>
    <div>
        <img src={pic} alt='profile' width='450px'></img>
        <h2>Anil Bhangay</h2>
        <p>Fullstack web developer Learning.</p>
    </div>
       <div>
        <img src={pro} alt='pic' width='450px'></img>
         <h2>Hitesh Choudhary</h2>
         <p>Fullstack web developer Trainer.</p>
       </div>
       <div>
        <img src={ppt} alt='photo' width='450px'></img>
        <h2>Anurag Tiwari</h2>
        <p>Fullstack web developer Mentor.</p>
       </div>
    </>
  )
}

export default Cards;