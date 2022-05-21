import React, { useEffect } from "react";
import "../Styles/User.css";
import {
  AiOutlinePlayCircle,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import { CgMusic } from "react-icons/cg";
import { GiMicrophone } from "react-icons/gi";

const User = () => {
  useEffect(() => {
    const navItems = document.querySelectorAll(".user__nav-item");
    function handleChangeActive() {
      navItems.forEach((item) => {
        item.classList.remove("active");
        this.classList.add("active");
      });
    }

    navItems.forEach((item) => {
      item.addEventListener("click", handleChangeActive);
    });
  }, []);

  useEffect(() => {
    const btnLinks = document.querySelectorAll(".user__content-link");

    function handleActive() {
      btnLinks.forEach((item) => {
        item.classList.remove("active");
        this.classList.add("active");
      });
    }

    btnLinks.forEach((item) => {
      item.addEventListener("click", handleActive);
    });
  }, []);

  return (
    <div className="user">
      <div className="user-container">
        <div className="user-content">
          <div className="user-header">
            <h1 className="user-title">Thư viện</h1>
            <button className="user-header-btn">
              <AiOutlinePlayCircle className="user-header-icon" />
            </button>
          </div>
          <div className="user-bottom">
            <div className="user__nav">
              <div className="user__nav-content">
                <ul className="user__nav-list">
                  <li className="user__nav-item active">BÀI HÁT</li>
                  <li className="user__nav-item">PODCAST</li>
                  <li className="user__nav-item">ALBUM</li>
                  <li className="user__nav-item">MV</li>
                </ul>
              </div>
            </div>
            <div className="user__content">
              <div className="user__content-btn">
                <a className="user__content-link active">YÊU THÍCH</a>
                <a className="user__content-link">ĐÃ TẢI LÊN</a>
              </div>
            </div>
            <div className="user__songs">
              <div className="user__songs-wrapper">
                <div className="user__songs-header">
                  <div className="songs-left">
                    <h3>BÀI HÁT</h3>
                  </div>
                  <div className="songs-center">
                    <h3>ALBUM</h3>
                  </div>
                  <div className="songs-right">
                    <h3>THỜI GIAN</h3>
                  </div>
                </div>
                <div className="user__songs-list">
                  <div className="user__songs-select">
                    <div className="user__songs-item">
                      <div className="user__songs-item-left">
                        <div className="song-prefix">
                          <CgMusic className="song-prefix-icon" />
                        </div>
                        <div className="song-thumb">
                          <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/avatars/3/6/365827bfb4dc6a8eedae87269a810331_1451537724.jpg" />
                        </div>
                        <div className="song-info">
                          <h3>KHÔNG BAO GIỜ BÓ TAY</h3>
                          <a href="#">Tống Gia Vỹ</a>
                        </div>
                      </div>
                      <div className="user__songs-item-center">
                        <a href="#">Mãi Mãi Một Tình Yêu</a>
                      </div>
                      <div className="user__songs-item-right">
                        <div className="user-song-actions">
                          {/* <GiMicrophone /> */}
                          <AiFillHeart className="user-song-icon"/>
                          <span className="user-song-times">04:28</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { User };
