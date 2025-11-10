import React from 'react'
import Tv from './Tv'
import list from './list.json'

const TvList = () => {
  return (
    <div>
        {list.map((ele)=>{ 
            return <Tv
            image={ele.image}
            title={ele.title}
            price={ele.price}
            />
        })}
    </div>
  )
}

export default TvList
