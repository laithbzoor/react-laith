import React from 'react'

export default function Footer() {
  return (
   <footer className="footer bg-danger py-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="footer-contact my-5">
          <div className="footer-title py-2">
            <h4>Contact Us</h4>
          </div>
          <ul className="contact-list my-3">
            <li className="my-3">
              <span>Add:</span><a href="#" className="contact-links mx-2">
                New Hyde Park, NY 11040</a>
            </li>
            <li className="my-3">
              <span>Email:</span><a href="mailto:example@royalking.com" className="contact-links mx-2">
                example@royalking.com</a>
            </li>
            <li className="my-3">
              <span>Phone:</span><a href="tel:3336660000" className="contact-links mx-2">333 666 0000</a>
            </li>
          </ul>
          <ul className="footer-social-icon d-flex align-items-center gap-4 my-3">
            <li>
              <a href="#"><i className="fab fa-facebook-f" /></a>
            </li>
            <li>
              <a href="#"><i className="fab fa-twitter" /></a>
            </li>
            <li>
              <a href="#"><i className="fab fa-linkedin-in" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-6">
        <div className="footer-links my-5">
          <div className="footer-title py-2">
            <h4>Links</h4>
          </div>
          <ul className="links-list">
            <li className="my-3"><a href="#">About Us</a></li>
            <li className="my-3"><a href="#">Services</a></li>
            <li className="my-3"><a href="#">Case</a></li>
            <li className="my-3"><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="footer-hours my-5">
          <div className="footer-title py-2">
            <h4>Hours</h4>
          </div>
          <p className="my-3">
            Tincidunt neque pretium lectus <br />
            donec risus.
          </p>
          <p>
            Mon - Fri: 9:00AM - 6:00PM <br />
            Sat - Sun: 8:00AM - 4:00PM
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="newsletter my-5">
          <div className="footer-title py-2">
            <h4>Newsletter</h4>
          </div>
          <div className="newsletter-content">
            <p className="my-3" style={{color: 'rgb(190, 190, 195)'}}>
              Tincidunt neque pretium lectus <br />
              donec risus.
            </p>
            <div className="footer-newsletter">
              <form className="d-flex flex-wrap">
                <input type="email" placeholder="Email address" />
                <a className="btn-1 py-3 px-5 booking-input text-uppercase py-3 px-5 p-3" href="#">Subscribe<span style={{top: 100, left: 0}} /></a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>


  )
}
