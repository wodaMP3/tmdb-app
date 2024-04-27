
import './styles/global.css';
import RoutesPath from "./routes";
import Header from './components/Header/Header';
import Search from './components/SearchBar/SearchBar';

const App = () => {

  return  (
    <div className='main'>
      <Header />
      <Search />
      <RoutesPath />
    </div>
  );

}

export default App
