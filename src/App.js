import { Provider } from 'react-redux';
import './App.css';
import Head from "./components/Head";
import Body from './components/Body';
import store from "./utils/store";
import WatchPage from './components/WatchPage';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import MainContainer from "./components/MainContainer"
;
const appRouter =createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
        {
            path:"/",
            element:<MainContainer/>
        },
        {
            path:"watch",
            element:<WatchPage/>
        },
    ]
}])

function App() {
   return(
  <Provider  store={store}>
    <div>
        <Head/>
       <RouterProvider router={appRouter}/>
    </div>
  </Provider>
   
   
   );
}

export default App;
