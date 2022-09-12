import React from "react";
import {
    Routes,
    Route,
  } from "react-router-dom";

import { routes } from "./routes";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/dashboard";
import { Posts } from "../pages/Posts";

const App = () => (
    <Routes>
        <Route path={`${routes.Login}`} element={<Login />} />
        <Route path={`${routes.Dashboard}`} element={<Dashboard />} />
        <Route path={`${routes.Posts}/:id`} element={<Posts />} />
    </Routes>
);

export default App;