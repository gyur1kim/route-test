import React from 'react';
import {NavLink, Outlet } from "react-router-dom";

function NoticesRoot(props) {
  return (
    <div>
      <NavLink to=''>팔로잉 작가의 공지</NavLink>

      {/* 내 페이지이고 내가 작가일 때만 렌더링*/}
      <NavLink to='mine'>나의 공지</NavLink>

      <Outlet />
    </div>
  );
}

export default NoticesRoot;