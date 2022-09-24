import React, { useEffect, useState} from 'react'

import axios from 'axios'

import { baseUrl } from '../shared/baseUrl'

import HeroImg from '../assets/bootstrap-docs.png'

export default function Hero() {

  const [hero, setHero ] = useState({
    isLoading: true,
    content: {},
    err: ''
  })

  useEffect(() => {

    axios
    .get(`${baseUrl}/hero`)
    .then(res => setHero({
      ...hero,
      isLoading: false,
      content:res.data,
    }))
    .catch(err => setHero({
      ...hero,
      isLoading: false,
      err: err.message
    }))

  }, [])


  return (
    <div className="container my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          {hero.isLoading ?
              <div className='m-5 d-flex justify-content-center'>
                <div className="spinner-border" role="status">
                </div>
              </div>
              : !hero.err ?
                    <>
                      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1">{hero.content.title}</h1>
                        <p className="lead">{hero.content.description}</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
                          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                        </div>
                      </div>
                      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                          <img className="rounded-lg-3" src={HeroImg} alt="" width="720" />
                      </div>
                    </>
                  :
                    <div className="alert alert-danger" role="alert">
                      Error : {hero.err}
                    </div>
          }
      </div>
    </div>
  )
}
