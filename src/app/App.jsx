// import { Button } from '../ui/Button/Button';
// import { Card } from '../ui/Card/Card';
import './global.css';
// import tramBoy from "../ui/Card/assets/Rectangle 12.png"
import { Home } from '../pages/Home/Home';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Registr } from '../pages/Registr/Registr';
import { Try } from '../pages/Try/Try';
import { Log } from '../pages/Log/Log';

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/registr",
      element: <Registr/>,
    },
    {
      path: "/try",
      element: <Try/>,
    },
    {
      path: "/log",
      element: <Log/>,
    }
  ]);
  return (
    <div className="App">
      

      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
