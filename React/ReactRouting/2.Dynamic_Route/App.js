import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router';
import About from './components/routes/about';
import Home from './components/routes/home';
import NavigationNavLink from './components/routes/NavigationNavLink';
import RouteProduct from './components/routes/RouteProduct';
import RouteProductDetails from './components/routes/RouteProductDetails';


function App() {
  return (
    <>
      <BrowserRouter >

        <Routes>
          <Route path="/" element={<NavigationNavLink />}>
            <Route index element={<Home />} />
            <Route path="product" element={<RouteProduct />}> 
              <Route path=":productId" element={<RouteProductDetails />} /> 
            </Route>
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
