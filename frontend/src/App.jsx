
import './styles/global.css';
import RoutesPath from "./routes";
import Header from './components/Header/Header';
import Search from './components/SearchBar/SearchBar';
import Footer from './components/Footer/Footer';

const App = () => {

  return (
    <div className='main-container'>
        <Header className='header' />
        <div className='content'>
            <Search />
            <RoutesPath />
        </div>
        <Footer className='footer' />
    </div>
);

}

export default App
