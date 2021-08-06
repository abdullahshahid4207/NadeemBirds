import Header from "./Header";


const Carousel = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide rounded" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://images2.alphacoders.com/718/thumb-1920-718555.png" class="d-block w-100" alt="..." />
                    <div class="carousel-caption mt-5 d-md-block">
                        <span className='nav__logo'><span> WELCOME TO NADEEM BIRDS </span></span>
                        <p className='carousel_text'>
                            <button className="btn btn-success whatsapp btn-s-p-0"> <i class="fab fa-whatsapp"></i> </button>
                            <button className="btn btn-primary facebook"> <i class="fab fa-facebook-f"></i> </button>
                            <button className="btn instagram"> <i class="fab fa-instagram"></i> </button>
                            <button className="btn linkedin"> <i class="fab fa-linkedin-in"></i> </button>
                        </p>
                        {/* <br />
                        <br />
                        <br />
                        <br /> */}
                    </div>
                </div>
            </div>
        </div>
        // <div className='container'>
        //     <header>

        //     </header>
        // </div>
    );
};

export default Carousel;