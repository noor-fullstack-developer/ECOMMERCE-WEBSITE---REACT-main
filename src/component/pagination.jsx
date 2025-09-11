import React from 'react'
import { useState } from 'react'

const Pagination = () => {
    const [currentpage, setcurrentpage] = useState(1);
  const [itemperpage, setitemperpage] = useState(4);

  const lastpageindx = currentpage * itemperpage;
  const firstpageindx = currentpage - lastpageindx;
  const currentitem = Cards.slice(firstpageindx,lastpageindx)
  return (
    <div>
      
    </div>
  )
}

export default Pagination
