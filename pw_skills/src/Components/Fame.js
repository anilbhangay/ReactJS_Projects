import React from 'react'

function Fame({fame}){
  return (
     <div className='className="col-lg-4 mt-4'>
        <div className='p-3 fame-cart rounded-4 shadow'>
            <img src={fame} alt='fameImage' className='fame-image mt-4'></img>
            <h5 className="fame-name mt-3">Anil Bhangay</h5>
            <p className="fame-position fw-semibold text-secondary">iNeuron, FullStack WebDeveloper Aspirant</p>

        </div>

     </div>
  )
}

export default Fame