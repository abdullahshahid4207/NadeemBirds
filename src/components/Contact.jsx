import Header from "./Header"


const Contact = () => {
    return (
        <div>
            <Header />
            <div style={{ textAlign: 'center', marginTop: "100px" }}>
                <h3>Contact Us</h3>
            </div>
            <br />
            <div className='container form-con'>
                    <div className="mb-3 m-4">
                        <label for="exampleInputEmail1" className="form-label">Full Name</label>
                        <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 m-4">
                        <label for="exampleInputEmail1" className="form-label">Phone</label>
                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 m-4">
                        <label for="exampleInputEmail1" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 m-4">
                        <label for="exampleInputEmail1" className="form-label">City</label>
                        <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <button type="submit" className="btn btn-primary m-4">Send</button>
            </div>
        </div>)
}

export default Contact;