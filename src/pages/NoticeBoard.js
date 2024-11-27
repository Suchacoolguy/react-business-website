import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar'; // NavBar 컴포넌트 임포트

const NoticeBoard = () => {
  const [newNotice, setNewNotice] = useState('');
  const [notices, setNotices] = useState([]);

  const handleAddNotice = () => {
    if (newNotice.trim() === '') return;
    const newNoticeObject = {
      id: notices.length + 1,
      content: newNotice,
      date: new Date().toISOString(),
    };
    setNotices([...notices, newNoticeObject]);
    setNewNotice('');
  };

  return (
    <>
      <NavBar /> {/* NavBar 컴포넌트 추가 */}
      <div className="container mx-auto p-6 pt-32"> {/* 상단 바 공간 확보를 위해 pt-24 추가 */}
        <h1 className="text-3xl font-bold mb-4">게시판</h1>
        <ul>
          {notices.map((notice) => (
            <li key={notice.id} className="bg-gray-100 p-4 rounded-lg mb-3 shadow">
              <p>{notice.content}</p>
              <span className="text-gray-600 text-sm">{new Date(notice.date).toLocaleString()}</span>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={newNotice}
          onChange={(e) => setNewNotice(e.target.value)}
          className="border p-2 rounded w-full mb-4"
          placeholder="새 공지사항을 입력하세요"
        />
        <button
          onClick={handleAddNotice}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          추가
        </button>
      </div>
    </>
  );
};

export default NoticeBoard;