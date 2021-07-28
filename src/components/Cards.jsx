

const Cards = (props) => {
    return (
        <div class="card p-2 m-2 rounded" style={{width: '18rem', backgroundColor: '#8e9aaf'}}>
            <img src={props.src} class="card-img-top rounded" alt="..." />
            <div class="card-body">
                <h5 style={{color: '#fff'}} class="card-title">{props.title}</h5>
                <p class="card-text">{props.dis}</p>
            </div>
        </div>
    );
};

export default Cards;