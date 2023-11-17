import Lpage from "./component/Login/lpage";
import Addprodcut from "./component/admin/addprodcut";
import Dataprovider from "./component/context/data";
import Homepage from "./component/home/hpage";
import Productde from "./component/product/productde";
import Spage from "./component/signup/spage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Dataprovider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/user/signup" element={<Spage />} />
            <Route exact path="/user/login" element={<Lpage />} />
            <Route exact path="/admin/addproduct" element={<Addprodcut />} />
            <Route exact path="/product/:id" element={<Productde />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Dataprovider>
  );
}

export default App;
