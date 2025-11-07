import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className="d-flex flex-column h-100 bg-light">
      {/* Projects Section */}
      <section className="py-5">
        <div className="container px-5 mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Projects</span>
            </h1>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              {/* Project Card 1 */}
              <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center">
                    <div className="p-5">
                      <h2 className="fw-bolder">Lost and Found</h2>
                      <p>
                        This website is about reporting and searching for lost items and 
                        also including gift shop that fully function with strip and paypal.
                        Also have complete admin route and dashboard.
                        The project using Python, Html, CSS, Javascript, MongoDB, Postman 
                        and hosting on Render. 
                        Feel free to check out the website at <a href="https://lostnfound-pgdj.onrender.com">Lost and Found</a>
                      </p>
                    </div>
                    <a href="https://lostnfound-pgdj.onrender.com"><img className="img-fluid" src="../assets/lostnfound.png" alt="Project 1" /></a>
                  </div>
                </div>
              </div>
              {/* Project Card 2 */}
              <div className="card overflow-hidden shadow rounded-4 border-0">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center">
                    <div className="p-5">
                      <h2 className="fw-bolder">Hooter Tour agency</h2>
                      <p>
                        This is my first project that I built on python with flask and 
                        mongodb. The website is about booking tour and payment system.
                        But the payment system is not fully functional due to stripe 
                        policy that not allow payment on tour business without approval.
                        The project using Python, Html, CSS, Javascript, MongoDB, Postman 
                        and hosting on Render.
                        Feel free to check out the website at <a href="https://hootertours.onrender.com/">HooterTours</a>
                      </p>
                    </div>
                    <a href="https://hootertours.onrender.com/"><img className="img-fluid" src="../assets/tour.png" alt="Project 2" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to action section */}
      <section className="py-5 bg-gradient-primary-to-secondary text-white">
        <div className="container px-5 my-5">
          <div className="text-center">
            <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
            <Link className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" to="/contact">
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects

