import React from 'react'
import '../App.css';

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*Column 1*/}
                    <div className="col-sm-4">
                        <h4>VIBEFY</h4>
                        <ul className="list-unstyled">
                            <li>Web Application with React JS</li>
                            <li>Istanbul, Turkey</li>
                            <li>Ozyegin University</li>
                            <li>CS 391</li>
                        </ul>
                    </div>
                    {/*Column 2*/}
                    <div className="col-sm-4">
                        <h4>Developers</h4>
                        <ul className="list-unstyled">
                            <li>Tuna Tuncer</li>
                            <li>Onur Alacam</li>
                            <li>Uygar KAYA</li>
                            <li>Tuğcan Hoşer</li>
                        </ul>
                    </div>

                    <div className="col-sm-4">
                        <h4>E-Mails</h4>
                        <ul className="list-unstyled">
                            <li>tuna.tuncer@ozu.edu.tr</li>
                            <li>onur.alacam@ozu.edu.tr</li>
                            <li>uygar.kaya@ozu.edu.tr</li>
                            <li>tugcan.hoser@ozu.edu.tr</li>
                        </ul>
                    </div>
                    
                </div>
                <div className="row">
                    <p className="col-sm-12">
                        &copy;{new Date().getFullYear()} VIBEFY | All rights reserved 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
