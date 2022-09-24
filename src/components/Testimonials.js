import React, { useEffect, useState} from 'react'

import axios from 'axios'

import { baseUrl } from '../shared/baseUrl'
import { Link } from 'react-router-dom'

export default function Testomonials() {


    const [testimonials, setTestimonials ] = useState({
        isLoading: true,
        content: [],
        err: ''
      })
    
      useEffect(() => {
    
        axios
        .get(`${baseUrl}/testimonials`)
        .then(res => setTestimonials({
          ...testimonials,
          isLoading: false,
          content:res.data,
        }))
        .catch(err => setTestimonials({
          ...testimonials,
          isLoading: false,
          err: err.message
        }))
    
      }, [])

      const testimonialsList = testimonials.content.map(testimonial => (
        <div key={testimonial.id} className="col">
            <div className="card shadow-sm">
                <div className="card-body">
                <h1 className='card-title'>{testimonial.author}</h1>
                <p className="card-text">{testimonial.content}</p>
                <Link to={{
                        pathname: `/main/home/${testimonial.author_id}`
                        }}
                        state={testimonial.author_id}
                    className="btn btn-primary">Go somewhere</Link>
                <div className="d-flex justify-content-end align-items-center">
                    <small className="text-muted">{testimonial.time}</small>
                </div>
                </div>
            </div>
        </div>
      ))


  return (
    <>
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Testimonials example</h1>
                <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                <p>
                <a href="#" className="btn btn-primary my-2 mx-2">Main call to action</a>
                <a href="#" className="btn btn-secondary my-2 mx-2">Secondary action</a>
                </p>
            </div>
            </div>
        </section>
        <div className="album py-5 bg-light">
            <div className="container">
            {testimonials.isLoading ?
              <div className='m-5 d-flex justify-content-center'>
                <div className="spinner-border" role="status">
                </div>
              </div>
              : !testimonials.err ?
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {testimonialsList}
                        </div>
                  :
                    <div className="alert alert-danger" role="alert">
                      Error : {testimonials.err}
                      </div>
          }
        

            
            </div>
        </div>
    </>
  )
}
