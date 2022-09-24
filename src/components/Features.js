import React, { useEffect, useState} from 'react'

import axios from 'axios'

import { baseUrl } from '../shared/baseUrl'


import { FaRegUserCircle } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'
import { BsToggles2, BsCollection } from 'react-icons/bs'



export default function Features() {

  const [features, setFeatures ] = useState({
    isLoading: true,
    content: [],
    err: ''
  })

  useEffect(() => {

    axios
    .get(`${baseUrl}/features`)
    .then(res => setFeatures({
      ...features,
      isLoading: false,
      content:res.data,
    }))
    .catch(err => setFeatures({
      ...features,
      isLoading: false,
      err: err.message
    }))

  }, [])

  const images = [
    <BsCollection size={'4rem'} className="text-white inline-block bg-primary bg-gradient p-3 rounded mb-3"/>,
    <FaRegUserCircle size={'4rem'} className="text-white inline-block bg-primary bg-gradient p-3 rounded mb-3"/>,
    <BsToggles2 size={'4rem'} className="text-white inline-block bg-primary bg-gradient p-3 rounded mb-3"/>
  ]

  const featuresList = features.content.map((feature, index) => (
    <div key={feature.id} className="feature col">
        <div className="">
          {images[index]}
        </div>
        <h2>{feature.title}</h2>
        <p>{feature.description}</p>
        <a href={feature.link} className="icon-link">
          Call to action
          <FiChevronRight />
        </a>
      </div>
  ))

  return (
    <div className='container'>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {features.isLoading ?
              <div className='m-5 d-flex justify-content-center'>
                <div className="spinner-border" role="status">
                </div>
              </div>
              : !features.err ?
                    <>
                      {featuresList}
                    </>
                  :
                    <div className="alert alert-danger" role="alert">
                      Error : {features.err}
                      </div>
          }
        </div>
    </div>
  )
}
