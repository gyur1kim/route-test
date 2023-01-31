import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import './index.css';

import Layout from "./routes/MyPage/Layout";

import ArtsRoot from "./routes/MyPage/ArtsRoot"
import ArtsFavorite from "./routes/MyPage/ArtsFavorite";
import ArtsIndex from "./routes/MyPage/ArtsIndex";
import ArtsMyCollections from "./routes/MyPage/ArtsMyCollections";

import UpdateProfile from "./routes/MyPage/UpdateProfile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/mypage"
      element={<Layout />}
    >
      <Route
        path="arts"
        element={<ArtsRoot />}
      >
        <Route index element={ <ArtsIndex /> } />
        <Route path="favorite" element={ <ArtsFavorite /> }/>
        <Route path="owns" element={ <ArtsMyCollections /> } />
      </Route>
      <Route path="edit_profile" element={ <UpdateProfile /> }></Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

