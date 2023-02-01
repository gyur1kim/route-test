import React, {useState} from 'react';
import { Form, useLoaderData, NavLink, Outlet } from 'react-router-dom'


// 작가가 아니면 접근 금지

function NoticesMine(props) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  // const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  const noticesData = useLoaderData();
  console.log(noticesData);

  return (
    <div>
      <h3>나의 공지</h3>

      { isFormOpen?
        <>
          <Form method="post">
            <label> 제목
              <input type="text" name="notice_title" placeholder="제목을 입력하센" />
            </label><br/>
            <label> 내용
              <textarea name="notice_content" id="notice_content" cols="30" rows="10" placeholder="내용을 입력하센"></textarea>
            </label>
            <div>
              <button type="submit">제출하기</button>
              <button onClick={()=>{setIsFormOpen(prev=> !prev)}}>취소</button>
            </div>
          </Form>
        </> :
        <button onClick={() => {setIsFormOpen(prev => !prev)}}>
          공지 작성하기
        </button>
      }

      <ul>
        { noticesData.map((noticeData) => {
          console.log(noticeData)
          return (
            <li key={`notices_mine_${noticeData.id}`}>
              <NavLink to={`${noticeData.id}`}>{noticeData.notice_title}</NavLink>
            </li>
            )
        })}
      </ul>

    </div>
  );
}

export default NoticesMine;