import React from 'react'
import footerImg from '../../assets/images/footer.png';

function Footer() {

    const FooterStyle={
        backgroundImage: `url(${footerImg})`,
        backgroundSize:'cover'
    }
    return (
        <>
            <footer className="footer p-10 mx-16 " style={FooterStyle}>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a> 
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <a className="link link-hover">New York - 101010 Hudson</a>
                </div>

               
            </footer>
            <div>
            <p style={{textAlign:'center', paddingBottom:'2%'}}>Copyright 2022 All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer