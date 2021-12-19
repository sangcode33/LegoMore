import Header2 from "../components/Header1";
import LogoImage from "../components/Logo";
import Goods from "../components/Goods";
import Nav from "../components/Nav";
import React, { useState } from "react";
import "./Detail.css";

const Detail = () => {
  let [modal, setModal] = useState(false);
  return (
    <div>
      <Header2 />
      <LogoImage />
      <Nav />
      <Goods />
      {/* 이걸 컴포넌트로 할 필요가 있을까? */}
      <button>수정</button>
      <button>삭제</button>

      <input type="file" />

      <input placeholder="제목" />
      <input placeholder="가격" />
      <input placeholder="상세설명" />

      <button>찜하기</button>
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        연락하기
      </button>
      <button>쿨거래</button>

      {modal === true ? <Modal></Modal> : null}
    </div>
  );
  function Modal() {
    return (
      <div className="modal">
        <button>삭제</button>
        <h2>닉네임</h2>
        <input placeholder="댓글" />
        <button>등록</button>
      </div>
    );
  }
};

export default Detail;

// https://velog.io/@gay0ung/%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A1%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C-%EB%AF%B8%EB%A6%AC%EB%B3%B4%EA%B8%B0
