import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import './index.css';

import Layout from "./routes/MyPage/Layout";

// 작품탭
import ArtsRoot from "./routes/MyPage/ArtsRoot"
import ArtsFavorite from "./routes/MyPage/ArtsFavorite";
import ArtsIndex from "./routes/MyPage/ArtsIndex";
import ArtsMyCollections from "./routes/MyPage/ArtsMyCollections";

// 공지사항탭
import NoticesRoot from "./routes/MyPage/NoticesRoot";
import NoticesMine from "./routes/MyPage/NoticesMine";
import NoticesFollowing from "./routes/MyPage/NoticesFollowing";
import NoticesDetail, {loader as noticeLoader} from "./routes/MyPage/NoticesDetail"
import { getNotices } from "./notices"

// 큐레이션탭

// 커미션탭

// 아래 3개는 모달로 해야할듯?
// 프로필 수정

// 작품 업로드

// 대표작품 설정

import EditProfile from "./routes/MyPage/EditProfile";

import Upload from "./routes/MyPage/Upload"

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
        <Route index element={ <ArtsIndex /> }>
          {/* 대표작품 설정 페이지 들어갈거임 */}
        </Route>
        <Route path="favorite" element={ <ArtsFavorite /> }/>
        <Route path="owns" element={ <ArtsMyCollections /> } />
      </Route>

      {/* 공지 detail 띄우기는 잠시 보류하자;;;*/}
      <Route
        path="notices"
        element={ <NoticesRoot /> }
      >
        <Route
          index
          element={ <NoticesFollowing /> }
          loader={getNotices}
        >
          {/*<Route path=":notice_id" element={<NoticesDetail/>} loader={getNotice}/>*/}
        </Route>
        <Route
          path="mine"
          element={ <NoticesMine /> }
          loader={getNotices}
        >
          <Route path=":notice_id" element={<NoticesDetail/>} loader={noticeLoader}/>
        </Route>
      </Route>


      <Route
        path="curations"
      ></Route>

      <Route
        path="commissions"
      ></Route>

      <Route path="edit_profile" element={ <EditProfile /> }></Route>
      <Route path="upload" element={ <Upload /> }></Route>

    </Route>

  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

