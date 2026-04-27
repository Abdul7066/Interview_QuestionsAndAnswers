import React, { useState } from 'react'
import './TvList.css'
function Tv(props) {
    const [count,setCount] = useState(0)

    const handleClick=()=>{
        setCount(count +1)
    }

    let {image , title , price} = props
  return (
    <div className='main'>
        <img className='img' src={image}/>
        <div className='contain'>
            <h2>{title}</h2>
            <p>{price}</p>
            <button onClick={handleClick}>Add to Cart</button><p>{count}</p>
        </div>
    </div>
  )
}

export default Tv