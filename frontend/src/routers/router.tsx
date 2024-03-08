import { create } from "domain";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout";

interface Props {}
const Routers: React.FC<Props> = (props) => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      /*  children: [
        { path: "/", element: <Home /> },
        { path: "/profile/:id", element: <Profile /> },
      ], */
      // errorElement: <Notfound />,
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default Routers;
