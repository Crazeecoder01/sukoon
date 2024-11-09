const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
  ]);

const Routes = () => {
    return <RouterProvider router={router} />;
  };
  
  export default Routes;