import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AlbumsDahsboard from "./components/Album/AlbumsDahsboard";
import PicsDashboard from "./components/Pic/PicsDashboard";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <AlbumsDahsboard /> },
    { path: "/album/:id", element: <PicsDashboard /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
