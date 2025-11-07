import React from 'react'

function Resume() {
  return (
    <div className="d-flex flex-column h-100 bg-light">
      {/* Page Content */}
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Resume</span>
          </h1>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            {/* Experience Section */}
            <section>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                {/* Download resume button */}
                <a className="btn btn-primary px-4 py-3" href="/profile.html" target="_blank" rel="noopener">
                  <div className="d-inline-block bi bi-download me-2"></div>
                  Download Resume
                </a>
              </div>
              {/* Experience Card 1 */}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">2015 - Present</div>
                        <div className="small fw-bolder">Owner</div>
                        <div className="small text-muted">Welding Supplies</div>
                        <div className="small text-muted">Bangbuathong, Nonthaburi</div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div>
                        Founded and operate <strong>Welding Supplies</strong>, a distribution business specializing in welding equipment and materials. Oversee all aspects of daily operations, including inventory management, customer relations, and vendor coordination.
                        Provide products and services to construction sites and small to medium-sized contractors, ensuring reliable supply, competitive pricing, and exceptional customer support.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Experience Card 2 */}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">2014 - 2015</div>
                        <div className="small fw-bolder">Intern</div>
                        <div className="small text-muted">Leitvilai company</div>
                        <div className="small text-muted">Bangkok</div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div>
                       Worked in the company’s robotic arm sales department, assisting clients with product selection and sales operations.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Education Section */}
            <section>
              <h2 className="text-secondary fw-bolder mb-4">Education</h2>
              {/* Education Card 1 */}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-secondary fw-bolder mb-2">-</div>
                        <div className="mb-2">
                          <div className="small fw-bolder">Chulalongkorn</div>
                          <div className="small text-muted">Bangkok</div>
                        </div>
                        <div className="fst-italic">
                          <div className="small text-muted">Bachelor's</div>
                          <div className="small text-muted">Electrical Engineering</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Education Card 2 */}

            </section>
            {/* Divider */}
            <div className="pb-5"></div>
            {/* Skills Section */}
            <section>
              {/* Skillset Card */}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  {/* Professional skills list */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-4">
                      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                        <i className="bi bi-tools"></i>
                      </div>
                      <h3 className="fw-bolder mb-0">
                        <span className="text-gradient d-inline">My Skills</span>
                      </h3>
                    </div>
                    <div className="skills logos">
                      <div className="skill-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                        <p>HTML5</p>
                      </div>
                      <div className="skill-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                        <p>CSS3</p>
                      </div>
                      <div className="skill-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                        <p>JS</p>
                      </div>
                      <div className="skill-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                        <p>React</p>
                      </div>
                      <div className="skill-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                        <p>Node.js</p>
                      </div>
                      <div className="skill-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                        <p>Python</p>
                      </div>
                      <div className="skill-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                        <p>MongoDB</p>
                      </div>
                      <div className="skill-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" />
                        <p>SQL</p>
                      </div>
                      <div className="skill-item">
                        <img src="../assets/excel.jpg" alt="Excel" />
                        <p>Excel</p>
                      </div>
                      <div className="skill-item">
                        <img src="../assets/canva.jpg" alt="Canva" />
                        <p>Canva</p>
                      </div>
                    </div>
                  </div>
                  {/* Languages list */}
                  <div className="mb-0">
                    <div className="d-flex align-items-center mb-4">
                      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                        <i className="bi bi-code-slash"></i>
                      </div>
                      <h3 className="fw-bolder mb-0">
                        <span className="text-gradient d-inline">Projects</span>
                      </h3>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 mb-4">
                      <div className="col mb-4 mb-md-0">
                        <a href="https://lostnfound-pgdj.onrender.com"><img className="img-fluid" src="../assets/lostnfound.png" alt="Project 1" /></a>
                      </div>
                      <div className="col mb-4 mb-md-0">
                        <a href="https://hootertours.onrender.com/"><img className="img-fluid" src="../assets/tour.png" alt="Project 2" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume

