import Fotter from "./components/Fotter";
import Header from "./components/Header";
import {Container} from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
function App() {
  var a =0;
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Routes>
          <Route path='/' element={<HomeScreen></HomeScreen>} exact/>
          <Route path='/product/:id' element={<ProductScreen></ProductScreen>} exact/>
          <Route path='/cart' element={<CartScreen></CartScreen>}/>
          <Route path='/cart/:id' element={<CartScreen></CartScreen>}/>
          </Routes>
          
        </Container>
      </main>
      <Fotter></Fotter>
    </Router>
  );
}

export default App;
