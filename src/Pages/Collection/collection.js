import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import CollectionClassifier from '../../Components/CollectionClassifier/CollectionClassifier'

const collection = () => {
  return (
    <div className='subsection'>
        <Navbar/>
        <CollectionClassifier/>
    </div>
  )
}

export default collection