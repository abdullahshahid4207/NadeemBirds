import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../container/Home';
import Product from '../container/Product';
import Contect from '../container/Contect';

const AppRouter = () => {
    return (
        <Router>
            <Route exact path='/' component= {Home} />
            <Route exact path='/Product' component= {Product} />
            <Route exact path='/Contect' component= {Contect} />
        </Router>
    );
};

export default AppRouter;