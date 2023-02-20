import React from "react";
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { ProfilePageProps } from "@/types/types";
import { useTranslation } from 'react-i18next';

const Profile: React.FC<ProfilePageProps> = ({ setIsAuthenticated }) => {
  const navigate = useNavigate()
  const { t } = useTranslation();

  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    setIsAuthenticated(false)
    navigate('/')
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "50vh" }}>
      <h1>{t('profilePage')}</h1>
        
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        {t('logout')}
      </Button>
    </div>
  );
}

export default Profile;
