import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import Appstore from './utils/AppStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ShowVideo from './components/ShowVideo';
import MainContainer from './components/MainContainer';
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      
      {
        path:"/",
        element: <MainContainer/>

      },
      {
        path:"/watch",
        element:<ShowVideo/>
      }
    ]
  }
])
function App() {
  return (
    <Provider store={Appstore}>
    <div className="App">
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
