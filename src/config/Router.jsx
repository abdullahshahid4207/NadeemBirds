import {BrowserRouter as Router, Route} from 'react-router-dom';
import Contact from '../components/Contact';
import Home from '../container/Home';
import Cards from '../components/Cards';

const AppRouter = () => {
    return (
        <Router>
            <Route exact path='/' component= {Home} />
            <Route exact path='/contact' component= {Contact} />
            <Route exact path='/products' component= {Cards} />
        </Router>
    );
};

export default AppRouter;