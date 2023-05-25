import { BrowserRouter, Routes, Route } from "react-router-dom";

//components import =======================>

import Home from "./Components/Pages/Home/Home";
import List from "./Components/Pages/List/List";
import Login from "./Components/Pages/Login/Login";
import Single from "./Components/Pages/Single/Single";
import New from "./Components/Pages/New/New";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index Component={Home} />
          <Route path="login" Component={Login} />
          <Route path="users">
            <Route index Component={List} />
            <Route path=":userId" Component={Single} />
            <Route path="new" Component={New} />
          </Route>
          <Route path="products">
            <Route index Component={List} />
            <Route path=":productId" Component={Single} />
            <Route path="new" Component={New} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
