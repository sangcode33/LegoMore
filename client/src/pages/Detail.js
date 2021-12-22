import Header2 from "../components/Header2";
import LogoImage from "../components/Logo";
import React, { useEffect, useState } from "react";
import "./Detail.css";
import axios from "axios";

const Detail = (props) => {
  // console.log(props.location);
  const code = new URL(window.location.href);
  let params = String(code.pathname.substring(14));
  // console.log(params);
  const [goodsInfo, setGoodsInfo] = useState({
    id: params,
    title: "",
    content: "",
    price: "",
    image: "",
    status: "",
    userId: "",
  });
  useEffect(() => {
    axios.get(`http://localhost:4000/goods/${params}`).then((res) => {
      // console.log(res.data.data);
      const goodsInfo = res.data.data;
      setGoodsInfo(goodsInfo);
    });
  }, []);

  let [modal, setModal] = useState(false);
  // axios.get(`http://localhost:4000/goods/${}`)
  return (
    <div>
      <Header2 />
      <LogoImage />
      {/* 이걸 컴포넌트로 할 필요가 있을까? */}
      <hr />
      <div className="detail-main">
        <div className="detail-delete">
          <span>
            <button>수정</button>
          </span>
          <span>
            <button className="detail-btn2">삭제</button>
          </span>
        </div>
        <div>
          <input type="file"></input>
        </div>

        <div className="detail">
          <div className="detail-title">{goodsInfo.title}</div>

          <div className="detail-title">{goodsInfo.price}</div>

          <div className="detail-title">{goodsInfo.content}</div>
        </div>
        <div className="detail-love">
          <button>♥️찜하기</button>

          <button
            onClick={() => {
              setModal(!modal);
            }}
          >
            연락하기
          </button>
          <button>쿨거래</button>
        </div>
        {modal === true ? <Modal></Modal> : null}
      </div>
    </div>
  );
  function Modal() {
    return (
      <div className="modal">
        <button className="modal-delete">삭제</button>
        <h2>닉네임</h2>
        <input placeholder="댓글" />
        <span className="modal-put">
          <button>등록</button>
        </span>
      </div>
    );
  }
};

export default Detail;
