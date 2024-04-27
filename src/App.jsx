
import './styles/global.css';
import RoutesPath from "./routes";
import Header from './components/Header/Header';

const App = () => {

  return  (
    <div className='main'>
      <Header />
      <RoutesPath />
    </div>
  );

}

export default App
