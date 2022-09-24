import React from 'react'

export default function SingleTestimonial(props) {

    console.log(props.authorId);

  return (
    <>
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Jeph Star</h1>
                <p className="lead text-muted">Here you can find Jeph Star Profile Testimonials</p>
            </div>
            </div>
        </section>
        <div className='container my-4'>
            <div className="card shadow-sm">
                <div className="card-body">
                <h1 className='card-title'>Jeph Star</h1>
                <h6 className="card-subtitle mb-2 text-muted">Web Developper</h6>
                <p className="card-text">24 years old</p>
                <code>Alkalan</code>
                </div>
            </div>
        </div>
        <div className='container my-4'>
            <div className="card shadow-sm">
                <div className="card-body">
                <h1 className='card-title'>Jeph Star Testimonials</h1>
                <p className="card-text my-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. It Will contain our testimonil content <small className="text-muted">- 9 mins</small></p>
                <p className="card-text my-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. It Will contain our testimonil content <small className="text-muted">- 2 days</small></p>
                <p className="card-text my-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. It Will contain our testimonil content <small className="text-muted">- 3 weeks</small></p>
                </div>
            </div>
        </div>
    </>
  )
}
