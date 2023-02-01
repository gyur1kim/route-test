import React from 'react';
import {useLoaderData} from "react-router-dom";
import {getNotice} from "../../notices";

export function loader({params}) {
  const notice = getNotice(+params.notice_id)
  return notice;
}

function NoticesDetail(props) {
  const noticeData = useLoaderData();
  console.log('noticeData', noticeData);
  return (
    <div>{noticeData.notice_content}</div>
  );
}

export default NoticesDetail;