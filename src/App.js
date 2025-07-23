import { Provider } from 'react-redux';
import './App.css';
// import Head from "./components/Head";
// import Body from './components/Body';
import store from "./utils/store";
import WatchPage from './components/WatchPage';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import MainContainer from "./components/MainContainer"
import Shorts from './components/Shorts';
import SearchResultsPage from './components/SearchResultPage';
import Layout from './components/Layout';
import Demo from './components/Demo';
import Demo1 from './components/Demo1';
const appRouter =createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[
        {
            path:"/",
            element:<MainContainer/>
        },
        {
            path:"watch",
            element:<WatchPage/>
        },
        {
            path:"shorts",
            element:<Shorts/>
        },
        {
            path: 'results',
            element: <SearchResultsPage /> 
        },
        
        {
            path: 'demo',
            element:(
                <>
                    <Demo/>
                    <Demo1/>
                </>
            ),
        },
    ]

}])

function App() {
   return(
  <Provider  store={store}>
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  </Provider>
   
   
   );
}

export default App;
