import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Routes,
} from "react-router-dom";
import Login from "./pages/Login";
import RootLayout from "./Layout/Rootlayout";
import Pipeline from "./pages/Pipeline";

function App() {
  const url = "http://192.168.91.71:8000";
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<Login url={url} />} />
        <Route path="/" element={<RootLayout />}>
          <Route path="/Pipeline" element={<Pipeline />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
