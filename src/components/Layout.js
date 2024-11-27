import React from 'react';
import NavLinks from './Navbar/NavLinks';  // NavBar에서 사용되는 링크 컴포넌트

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 상단 네비게이션 바 */}
      <header className="bg-blue-900 text-white shadow-md p-4">
        <nav className="container mx-auto flex justify-between">
          <h1 className="text-xl font-bold">레드후드소프트웨어</h1>
          <div>
            <NavLinks />
          </div>
        </nav>
      </header>

      {/* 메인 콘텐츠 영역 */}
      <main className="flex-1 container mx-auto p-6">
        {children}
      </main>

      {/* 하단 바 (선택 사항) */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
