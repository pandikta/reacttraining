import React from "react";
import { createRoot } from "react-dom/client";
// import { Button, DatePicker, Space, version } from "antd";
// import "antd/dist/antd.css";
import "./index.css";
import './App.css';
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import User from "./pages/User";
import Detail from "./pages/Detail";
import Register from "./pages/Register";


function App() {
  // return (
  //   <div className="App">
  //     <h1>antd version: {version}</h1>
  //     <Space>
  //       <DatePicker />
  //       <Button type="primary">Primary Button</Button>
  //     </Space>
  //   </div>
  // );

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="/user/:id" element={<Detail />}></Route>
      <Route path="/register" element={<Register />}></Route>

    </Routes >
  )
}

export default App;
// const root = createRoot(document.getElementById("root"));
// root.render(<App />);