// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css'
// import MobileNavigation from './components/MobileNavigation';
// import Header from './components/Header';


// function App() {
  
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <MobileNavigation />,
//     },
//     {
//       path: "/head",
//       element: <Header />,
//     },
//   ]);
  
 

//   return <RouterProvider router={router} />;
// }

// export default App;


// App.jsx
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { AuthProvider } from './context/AuthContext';

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
