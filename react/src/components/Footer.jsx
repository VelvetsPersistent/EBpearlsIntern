import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="links">
          <div className="links-content">
            <div className="links-aboutus">
              <p>
                Curabitur consequat, purus a scelerisque sagittis, nulla metus
                tincidunt elit, vel venenatis nulla libero nec nulla.
                Suspendisse potenti. Aenean a justo vel sapien pellentesque
                tincidunt. Sed luctus, elit ac interdum convallis, ligula
                libero egestas orci, at auctor felis ligula nec odio.
              </p>
            </div>
            <div className="links-socials">
              <a href="/" className="social-icon">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="links-list">
            <div className="links-list-1">
              <h1>Products</h1>
              <a href="/"><p>Payment</p></a>
              <a href="/"><p>Invoice Factoring</p></a>
              <a href="/"><p>Invoice Finance</p></a>
              <a href="/"><p>Supplier Finance</p></a>
              <a href="/"><p>Customer Finance</p></a>
            </div>

            <div className="links-list-1">
              <h1>Company</h1>
              <a href="/"><p>About us</p></a>
              <a href="/"><p>Contact us</p></a>
            </div>

            <div className="links-list-1">
              <h1>Resources</h1>
              <a href="/"><p>Frequently asked questions</p></a>
              <a href="/"><p>Knowledge base</p></a>
              <a href="/"><p>API documentation</p></a>
            </div>
          </div>
        </div>
      </div>

      <div className="credits">
        <div className="credit">
          <div className="credit-right">
            <a href="/"><p>Privacy Policy</p></a>
            <a href="/"><p>Contact us</p></a>
          </div>
          <div className="credit-left">
            <a href="/"><p>Site map</p></a>
            <a href="/"><p>@ebpearls</p></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
