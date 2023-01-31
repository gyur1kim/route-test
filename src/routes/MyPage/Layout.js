import React from 'react';
import { Outlet, NavLink, Link, useLocation } from "react-router-dom";

import ProfileImg from "../../components/ProfileImg";

export default function Layout(props) {
  const user = {
    isArtist: true,
    isMyPage: true
  }




  return (
    // 얘는 Mypage의 layout임!!! 마이페이지 어디를 가든 항상 일정한 것들
    <div>
      <h1>MyPage</h1>

      <div className="profile_bar">
        <ProfileImg src="https://mindlogic-metaverse-face.s3.ap-northeast-2.amazonaws.com/custom/22592-1634653713945.jpeg" />
        <div className="artistName">신썩호</div>
        <div className="introduction">한 줄 자기소개</div>

        {/* userSeq가 작가면 sns links 렌더, 아님 말구 */}
        { user.isArtist?
          <div className="snsLinks">
            <div className="email">이메일</div>
            <div className="instagram">인스타그램</div>
            <div className="twitter">트위터</div>
            <div className="youtube">유튜브</div>
          </div> : null }

          {/* userSeq가 내가 아니면 남의 버튼 렌더링, 거기서도 작가인지 아닌지 구분할 것 */}
          {/* userSeq가 나라면 나의 버튼 렌더링, 거기서도 작가인지 아닌지 구분할 것 */}
          { user.isMyPage?
            <div className="profile_buttons">
              <Link to='edit_profile'><button className='edit_profile'>정보 수정하기</button></Link>
              <button className='curation'>큐레이션</button>
              <button className='commission'>커미션</button>
              <button className='upload_art'>작품 업로드</button>
              <button className='notices'>공지사항</button>
            </div>
            : user.isArtist?
              <div className="profile_buttons">
                <button className='follow'>팔로우버튼</button>
                <button className='curation'>큐레이션</button>
                <button className='commission'>커미션 신청하기</button>
              </div> :
              <div className="profile_buttons">
                <button className='follow'>팔로우버튼</button>
              </div> }
      </div>

      <hr/>

      {/* 여기가 진짜 렌더링 해야하는 곳인데..... */}
      <Outlet />

    </div>
  );
}