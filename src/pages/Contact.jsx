import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [status, setStatus] = useState('') // To show feedback

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 🚀 Replace this URL with your own Formspree endpoint
    const endpoint = 'https://formspree.io/f/xrbrzvqr'

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('✅ Message sent successfully!')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus('❌ Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('❌ Error sending message.')
    }
  }

  return (
    <div className="d-flex flex-column">
      {/* Page content */}
      <section className="py-5">
        <div className="container px-5">
          {/* Contact form */}
          <div className="bg-light rounded-4 py-5 px-4 px-md-5 shadow-sm">
            <div className="text-center mb-5">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3 d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                <i className="bi bi-envelope fs-3"></i>
              </div>
              <h1 className="fw-bolder">Get in touch</h1>
              <p className="lead fw-normal text-muted mb-0">Let’s work together!</p>
            </div>

            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <form id="contactForm" onSubmit={handleSubmit}>
                  {/* Name input */}
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name..."
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="name">Full name</label>
                  </div>

                  {/* Email address input */}
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="email">Email address</label>
                  </div>

                  {/* Phone number input */}
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="phone">Phone number</label>
                  </div>

                  {/* Message input */}
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Enter your message here..."
                      style={{ height: '10rem' }}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>

                  {/* Submit Button */}
                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg" id="submitButton" type="submit">
                      Submit
                    </button>
                  </div>
                </form>

                {/* Status Message */}
                {status && (
                  <div className="text-center mt-4">
                    <p className={status.startsWith('✅') ? 'text-success fw-bold' : 'text-danger fw-bold'}>
                      {status}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
