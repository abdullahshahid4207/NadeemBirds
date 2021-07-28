import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav style={{ backgroundColor: '#8e9aaf' }} className="navbar navbar-expand-lg navbar-dark sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Nadeem Birds</a>
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <Link style={{ color:'#fff', textDecoration: 'none'}} to='/'><a style={{ color:'#fff', fontSize: '18px'}} class="nav-link" href="#scrollspyHeading1">Home</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link style={{ color:'#fff', textDecoration: 'none'}} to='/Product'><a style={{ color:'#fff', fontSize: '18px'}} class="nav-link" href="#scrollspyHeading1">Product</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link style={{ color:'#fff', textDecoration: 'none'}} to='/Contect'><a style={{ color:'#fff', fontSize: '18px'}} class="nav-link" href="#scrollspyHeading1">Contect</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;