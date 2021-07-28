

const Footer = (props) => {
    return (
        <div>

            <div style={{ backgroundColor: '#8e9aaf' }} className="row">
                <h2 style={{ color: '#fff', margin: '20px', textDecoration: 'underline' }}>{props.title}</h2>
                <div className='col-12'>
                    <span style={{ color: 'green', padding: '10px', fontSize: '20px' }}><button type="button" class="btn btn-success"><i style={{ color: '#fff' }} class="fab fa-whatsapp" aria-hidden="true"> 03343717610</i></button></span>
                    <span style={{ color: '#fff', padding: '10px', fontSize: '20px' }}><button type="button" class="btn btn-primary"><i style={{ color: '#fff' }} class="fab fa-facebook-square" aria-hidden="true"> Facbook</i></button></span>
                    <span style={{ color: '#fff', padding: '10px', fontSize: '20px' }}><button type="button" class="btn btn-danger"><i style={{ color: '#fff' }} class="far fa-envelope" aria-hidden="true"></i></button></span>
                </div>
                <br />
                <br />
                <div class="col-12">
                    {/* <h2 style={{ color: '#fff', padding: '10px', textDecoration: 'underline' }}>Address: </h2> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.483330810454!2d67.03145091432117!3d24.91559944918305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ffb5e97dd7f%3A0x80113960a649ff35!2sABC%20Apartment!5e0!3m2!1sen!2s!4v1614361930213!5m2!1sen!2s"
                        width='100%' height={props.height} class="map" style={{ border: "0", borderRadius: '20px', padding: '10px' }} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div class="col-11 copyRight bg-primary">
                    <p>Copyright <i class="fa fa-copyright" aria-hidden="true"></i> Nadeem Birds</p>
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