import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className='Footer'>
      <footer className='footer-01'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-3 mb-4 mb-md-0'>
              <h2 className='footer-heading'>AFGHANBAZAR</h2>
              <p>
                The one and only online shopping centre which promotes afghani
                handicrafts and afghan made products in the country.
              </p>
              <ul className='ftco-footer-social p-0'>
                <li className='ftco-animate'>
                  <a
                    href='www.twitter.com'
                    data-toggle='tooltip'
                    data-placement='top'
                    title='Twitter'
                  >
                    <span>
                      <i class='fab fa-twitter'></i>
                    </span>
                  </a>
                </li>
                <li className='ftco-animate'>
                  <a
                    href='www.facebook.com'
                    data-toggle='tooltip'
                    data-placement='top'
                    title='Facebook'
                  >
                    <span>
                      <i class='fab fa-facebook-f'></i>
                    </span>
                  </a>
                </li>
                <li className='ftco-animate'>
                  <a
                    href='www.instagram.com'
                    data-toggle='tooltip'
                    data-placement='top'
                    title='Instagram'
                  >
                    <span>
                      <i class='fab fa-instagram'></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-md-6 col-lg-3 mb-4 mb-md-0'>
              <h2 className='footer-heading'>Latest News</h2>
              <div className='block-21 mb-4 d-flex'>
                <div className='text'>
                  <h3 className='heading'>
                    <a href='/company_news'>
                      New handicrafts has been uploaded recently...
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0'>
              <h2 className='footer-heading'>Quick Links</h2>
              <ul className='list-unstyled'>
                <li>
                  <a href='/' className='py-2 d-block'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='/about' className='py-2 d-block'>
                    About
                  </a>
                </li>

                <li>
                  <a href='/contact' className='py-2 d-block'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-md-6 col-lg-3 mb-4 mb-md-0'>
              <h2 className='footer-heading'>Have a Questions?</h2>
              <div className='block-23 mb-3'>
                <ul>
                  <li>
                    <span className='icon ion-ios-pin'></span>
                    <span className='text'>
                      2nd Street,Shahr-e-naw, Kabul Afghanistan
                    </span>
                  </li>
                  <li>
                    <a href='/callUs'>
                      <i className='fab fa-whatsapp'></i>
                      <span className='text'>+93778888885</span>
                    </a>
                  </li>
                  <li>
                    <a href='/emailUs'>
                      <i class='fas fa-sms'></i>
                      <span className='text'>info@afghanBazar.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-md-12 text-center'>
              <p className='copyright'>
                Copyright &copy; {new Date().getFullYear()} All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
