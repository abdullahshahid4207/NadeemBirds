import {Link} from 'react-router-dom';

const Card = (props) => {
    return (
        // <div class="card m-2 card_com">
        //     <img src={props.src} class="card-img-top" alt="..." />
        //     <div style={{textAlign: 'center'}} class="card-body">
        //         <p style={{color: '#000'}} class="card-title font">{props.title}</p>
        //         <p style={{ color: '#f57224',}} className="card-text cardtext">{props.dis}</p>
        //         {/* <br /> */}
        //         <button>Add to Cart</button>
        //     </div>
        // </div>
        <div className='card_com m-2 shadow rounded'>
            <img src={props.src} class="card-img-top" alt="..." />
            <br />
            <br />
            <div style={{ textAlign: 'center' }}>
                <p style={{ color: '#000' }} class=" font">{props.title}</p>
                <p style={{ color: '#f57224', }} className="cardtext font">{props.dis}</p>
                <Link to='/contact'><button className= 'btn btn-outline AddToCart font font-Size'>ADD TO CARD <i class="fas fa-cart-plus"></i></button></Link>
            </div>
        </div>
    );
};

export default Card;