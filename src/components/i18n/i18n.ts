import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'uk',
    debug: true,
    resources: {
      en: {
        translation: {
          news: 'News',
          profile: 'Profile',
          home: 'Homes',
          myApp: 'Test Maximov Anton',
          login: "Login",
          logout: 'Logout',
          homePage: 'Home Page',
          delete: 'delete',
          newsPage: 'News Page',
          loadMore: 'See more',
          profilePage: 'Profile Page',
          loginPage: 'Authorization',
          loginPageTitle: 'You have successfully logged in. Do you want to log out of your profile?',
          nameForm: 'Name user',
          loginForm: 'Password'
        },
      },
      uk: {
        translation: {
          news: 'Новини',
          profile: 'Профіль',
          home: 'Головна',
          myApp: 'Тест Максимов Антон',
          login: "Авторизуватись",
          logout: 'Вийти',
          homePage: 'Домашня сторінка',
          delete: 'видалити',
          newsPage: 'Cторінка Новин',
          loadMore: 'Дивитися ще',
          profilePage: 'Сторінка профілю',
          loginPage: 'Авторизація',
          loginPageTitle: 'Ви успішно увійшли в систему. Ви хочете вийти зі свого профілю?',
          nameForm: "Ім'я користувача",
          loginForm: 'Пароль'
        },
      },
    },
  });

export default i18n;
