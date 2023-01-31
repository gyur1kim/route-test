import React from 'react';
import { useLocation, Form } from "react-router-dom";

function UpdateProfile({ state }) {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      업데이트 는 좀 나중에 해야할란가
      <Form method="POST" action='#'>
        {/* 프로필 이미지는 나중에 npm 에서 drag 모듈을 받자 */}
        <label htmlFor="nickname">닉네임</label>
        <input type="text" id="nickname" name="nickname" />
        <button className='nickname_double_check'>중복 확인</button>

        <label htmlFor="description">한 줄 소개</label>
        <input type="text" id='description' name="description" />
        
        {/* 내가 작가면 sns 링크 달 수 있게 하자*/}
        <p>SNS 관리</p>
        <label htmlFor="email">이메일</label>
        <input type="text" id="email" name="email" placeholder='email' />
        <label htmlFor="instagram">인스타그램</label>
        <input type="text" id="instagram" name="instagram" placeholder='instagram' />
        <label htmlFor="twitter">트위터</label>
        <input type="text" id="twitter" name="twitter" placeholder='twitter' />
        <label htmlFor="youtube">유튜브</label>
        <input type="text" id="youtube" name="youtube" placeholder='youtube' />
        <label htmlFor="homepage">홈페이지</label>
        <input type="text" id="homepage" name="homepage" placeholder='homepage' />

        <button type="submit">수정하기</button>
      </Form>
    </div>
  );
}

export default UpdateProfile;