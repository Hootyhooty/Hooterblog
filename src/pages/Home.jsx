import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* Header */}
      <header className="py-5">
        <div className="container px-5 pb-5">
          <div className="row gx-5 align-items-center">
            <div className="col-xxl-5">
              {/* Header text content */}
              <div className="text-center text-xxl-start">
                <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                  <div className="text-uppercase">Design &middot; Development</div>
                </div>
                <div className="fs-3 fw-light text-muted">Let’s build something </div>
                <h1 className="display-3 fw-bolder mb-5">
                  <span className="text-gradient d-inline"> better, stronger,together.</span>
                </h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <Link className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" to="/resume">
                    Resume
                  </Link>
                  <Link className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" to="/projects">
                    Projects
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-7">
              {/* Header profile picture */}
              <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                <div className="profile bg-gradient-primary-to-secondary">
                  <img className="profile-img" src="./assets/profile.png" alt="Profile" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* About Section */}
      <section className="bg-light py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="text-center my-5">
                <h2 className="display-5 fw-bolder">
                  <span className="text-gradient d-inline">About Me</span>
                </h2>
                <p className="lead fw-light mb-4">My name is Itipat Polkhankosit and I help brands grow.</p>
                <p className="text-muted">
                I'm a passionate hobbyist developer who loves learning new things and constantly improving my skills.
                I'm seeking an entry-level developer position where I can grow professionally, contribute to a team, and take on real-world challenges.
                I'm a quick learner, creative thinker, and problem solver with strong attention to detail.
                I'm self-motivated, team-oriented, and always eager to explore new technologies and ideas.
                </p>
                <div className="d-flex justify-content-center fs-2 gap-4">
                  <a className="text-gradient" href="#!">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a className="text-gradient" href="#!">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a className="text-gradient" href="https://github.com/Hootyhooty">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

