import React from "react";

const Footer = (props) => {
    return (
        <div className="container-fluid border">
            <div className="row">
                <div className="col-4 dNone">
                    <img width='200' height='200' src="https://st2.depositphotos.com/1768926/8608/v/950/depositphotos_86087798-stock-illustration-bird-logo-wings.jpg" alt="" />
                </div>
                <br />
                <br />
                <div className='col-6 p-4'>
                    <h2>{props.title}</h2>
                    <div className='dFlex'>
                        <span><button style={{ backgroundColor: '#4dc247', marginTop: '5px'}} type="button" class="btn btn-outline"><i style={{ color: '#fff', }} class="fab fa-whatsapp p-1 fontSize" aria-hidden="true"><span className='font fontSize'> WhatsApp No:</span></i></button></span>
                        <span><button type="button" class="btn btn-primary"><i style={{ color: '#fff' }} class="fab fa-facebook-square p-1 fontSize" aria-hidden="true"><span className='font fontSize'> Facebook</span></i></button></span>
                        <span><button type="button" class="btn btn-danger"><i style={{ color: '#fff' }} class="far fa-envelope p-1 fontSize" aria-hidden="true"><span className='font fontSize'> Email</span></i></button></span>
                    </div>
                </div>
                <br />
                <br />
                {/* <div class="col-12"> */}
                {/* <h2 style={{ color: '#fff', padding: '10px', textDecoration: 'underline' }}>Address: </h2> */}
                {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.483330810454!2d67.03145091432117!3d24.91559944918305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ffb5e97dd7f%3A0x80113960a649ff35!2sABC%20Apartment!5e0!3m2!1sen!2s!4v1614361930213!5m2!1sen!2s"
                        width='100%' height={props.height} class="map" style={{ border: "0", borderRadius: '20px', padding: '10px' }} allowfullscreen="" loading="lazy"></iframe> */}
                {/* </div> */}
                <div class="col-11 copyRight bg-primary">
                    <p style={{ color: '#fff' }}>Copyright <i class="fa fa-copyright" aria-hidden="true"></i> Nadeem Birds</p>
                </div>
                <div class="col-1 copyRight">
                    <a href="" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'right' }}><button type="button" class="btn btn-outline-dark right"><i class="fas fa-chevron-up"
                        aria-hidden="true"></i></button></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;