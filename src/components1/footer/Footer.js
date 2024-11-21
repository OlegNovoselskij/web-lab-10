import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="branding">
                  <h3>Automotive Solutions</h3>
                  <p>Your trusted partner in car maintenance and innovation. From routine check-ups to advanced diagnostics, we keep you on the road with confidence.</p>
                </div>
                <div className="logo">
                    <img style={{height:'100px', marginTop:'-20px'}} src='data:image/jpeg;base64,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' />
                </div>
                <div className="social-icons">
                    <img style={{height:'100px', widows: '100px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FsU6gcX-aWQ75208EkwgKm8xZeTViuvjeEJmDIVQSvbwZzXL3nhm1sWnxtVQ5A_NWJI&usqp=CAU" />
                </div>
            </div>
            <hr />
            <p className="copyright">2020 IoT © Copyright all rights reserved, bla bla</p>
        </div>
    );
}

export default Footer;