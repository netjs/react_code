import './App.css';
import HelloWorldClass from './components/helloworld/helloworldclass';
import { GetProductsClass } from './components/http/getproductsclass';
import ComponentLifeCycle from './components/lifecycle/componentlifecycle';
import ControlledComponent from './components/lifecycle/controlledcomp/controlledcomponent';
import UncontrolledComponent from './components/lifecycle/controlledcomp/uncontrolledcomponent';
import { MovieClass } from './components/lifecycle/purecomp/movieclass';
import MovieFunction from './components/lifecycle/purecomp/moviefunction';
import ProjectProducts from './components/project/product/projectproducts';
import ProjectMenu from './components/project/projectmenu';
import Button from './components/props/button';
import { ButtonClassComponent } from './components/props/buttonclass';
import Parent from './components/props/child-parent/parent';
import { EventHandlingClass } from './components/props/eventhandlingclass';
import ProductsClass from './components/props/productsclass';
import ProductsFunction from './components/props/productsfunction';
import { LoginComponent } from './components/props/rendering/logincomponent';

import Products from './components/state/usestatedemo/products';
import { router } from './components/project/routes/route';
import { ThemeContext } from './components/context/contexts';
import ComponentA from './components/context/componentA';
import MainPageAuth from './components/context/mainpageauth';
import { route } from './components/routes/route';
import Navigation from './components/routes/navigation';
import Counter from './components/reduxdemo/createstoredemo/counter';
import CounterRedux from './components/reduxdemo/configurestoredemo/counterredux';
import { thunkroute } from './components/reduxdemo/thunkdemo/thunkroute';
import CartMain from './components/cartproject/cart/CartMain';
import ProductForm from './components/http/productform';
import ModalWrapper from './components/wrapper/modalwrapper';
import WrapperComponent from './components/wrapper/wrappercomponet';
import { MyComponent } from './components/wrapper/mycomponent';
import { EventHandler } from './components/test/eventhandler';
import { ChildClass } from './components/test/childclass';
import { ParentClass } from './components/test/parentclass';
import TestCounter from './components/test/testcounter';
import { testrouter } from './components/test/testroute';
import TestNavigation from './components/test/testnavigation';
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


    // <ThemeContext.Provider value="dark">
    //   <ComponentA></ComponentA>
    // </ThemeContext.Provider>
    //<RouterProvider router={thunkroute}></RouterProvider>
    // <>
    //<CounterRedux />
    // <ProjectProducts />
    // </>
    
    // <RouterProvider router={route}></RouterProvider>
    //<WrapperComponent component={MyComponent} />

    //<Counter />
    // <>
    // <p>A reusable button component</p>
    // <ButtonClassComponent color="red">
    //     <span>Save</span>
    //   </ButtonClassComponent>
    // </>
  );
}

export default App;
