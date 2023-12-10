import React from 'react';
/*npm install mdb-react-ui-kit*/
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit'; 

export function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
       

       
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Martial Art Academy
              </h6>
              <p>
              Customers of ANG Martial Arts Academy are welcome to review this website. Tell me how you good and needful this mission.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>About</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Mail Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>SOCIAL</h6>
              <p>
                <a href='https://www.linkedin.com/' className='text-reset'>
                  linkedin
                </a>
              </p>
              <p>
                <a href='https://www.facebook.com/' className='text-reset'>
                  Facebook
                </a>
              </p>
              <p>
                <a href='https://www.Instagram.com/' className='text-reset'>
                  Instagram
                </a>
              </p>
              <p>
                <a href='https://www.twitter.com/' className='text-reset'>
                  Twitter
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Registered Office Address:</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                 East Mumbai, NY 10012, INDIA
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                martialart@email.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold'>
          MartialArtAcademy.com
        </a>
      </div>
    </MDBFooter>
  );
}