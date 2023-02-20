import { Routes, Route } from 'react-router-dom';
import Header from './components/pages/header/header';
import HomePage from './components/pages/homePage/HomePage';
import NewsPage from './components/pages/newsPage/NewsPage';
import ProfilePage from './components/pages/profilePage/ProfilePage';
import { I18nextProvider } from 'react-i18next';
import i18n from './components/i18n/i18n';
import { useState } from 'react';
import LoginPage from './components/pages/loginPage/LoginPage';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem("isAuthenticated") === "true"
  );

  return (
    <I18nextProvider i18n={i18n}>
      <Header isAuthenticated={isAuthenticated}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/login" element={<LoginPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/profile" element={<ProfilePage setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </I18nextProvider>
  );
}

export default App;
