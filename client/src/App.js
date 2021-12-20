import "./App.css";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Nav from "./components/Nav";
import LogoImage from "./components/Logo";
import HeaderImage from "./pages/Main";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import MyPage from "./pages/Mypage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Signup from "./pages/Signup";
import Upload from "./pages/Upload";
import List from "./pages/List";

//import imgA from './images/testA.png';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isLogin ? (
                <>
                  <Header2 />
                  <LogoImage />
                  <Nav />
                  <HeaderImage />
                </>
              ) : (
                <>
                  <Header1 />
                  <LogoImage />
                  <Nav />
                  <HeaderImage />
                </>
              )
            }
          ></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          {/* props줘야 */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/goods/upload" element={<Upload />}></Route>
          <Route path="/goods/goods" element={<List />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
