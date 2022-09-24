import React, { useEffect, useState} from 'react'

import axios from 'axios'

import { baseUrl } from '../shared/baseUrl'

export default function SingleTestimonial(props) {
    const [profile, setProfile ] = useState({
        isLoading: true,
        content: {},
        err: ''
      })

    const [testimonials, setTestimonials ] = useState({
        isLoading: true,
        content: [],
        err: ''
    })
    
      useEffect(() => {
    
        axios
        .get(`${baseUrl}/profiles`,
            {
                params: {
                    id: props.authorId
                }
            }
        )
        .then(res => setProfile({
                ...profile,
                isLoading: false,
                content:res.data[0],
              }))
        .catch(err => setProfile({
          ...profile,
          isLoading: false,
          err: err.message
        }))

        axios
            .get(`${baseUrl}/testimonials`,
                {
                    params: {
                        author_id: props.authorId
                    }
                }
            )
            .then(res => setTestimonials({
            ...testimonials,
            isLoading: false,
            content: res.data,
            }))
            .catch(err => setTestimonials({
            ...testimonials,
            isLoading: false,
            err: err.message
            }))

      }, [])

      console.log(profile.content, testimonials.content);

      const testimonialsList = testimonials.content.map(testimonial => (
        <p className="card-text my-2">{testimonial.content} <small className="text-muted">- {testimonial.time}</small></p>
      ))

  return (
    <>
        {profile.isLoading ?
              <div className='m-5 d-flex justify-content-center'>
                <div className="spinner-border" role="status">
                </div>
              </div>
              : !profile.err ?
                    <>
                        <section className="py-5 text-center container">
                            <div className="row py-lg-5">
                            <div className="col-lg-6 col-md-8 mx-auto">
                                <h1 className="fw-light">{profile.content.firstname + ' ' + profile.content.lastname}</h1>
                                <p className="lead text-muted">Here you can find {profile.content.firstname + ' ' + profile.content.lastname} Profile Testimonials</p>
                            </div>
                            </div>
                        </section>
                        <div className='container my-4'>
                            <div className="card shadow-sm">
                                <div className="card-body">
                                <h1 className='card-title'>{profile.content.firstname + ' ' + profile.content.lastname}</h1>
                                <h6 className="card-subtitle mb-2 text-muted">{profile.content.job}</h6>
                                <p className="card-text">{profile.content.age} years old</p>
                                <code>{profile.content.codeName}</code>
                                </div>
                            </div>
                        </div>
                    </>
                  :
                    <div className="alert alert-danger" role="alert">
                      Error : {profile.err}
                      </div>
          }
        
        {testimonials.isLoading ?
              <div className='m-5 d-flex justify-content-center'>
                <div className="spinner-border" role="status">
                </div>
              </div>
              : !testimonials.err && !profile.err ?
                    <div className='container my-4'>
                            <div className="card shadow-sm">
                                <div className="card-body">
                                <h1 className='card-title'>{profile.content.firstname + ' ' + profile.content.lastname} Testimonials</h1>
                                {testimonialsList}
                                </div>
                            </div>
                        </div>
                  :
                    <div className="alert alert-danger" role="alert">
                      Error : {testimonials.err}
                      </div>
          }
    </>
  )
}
