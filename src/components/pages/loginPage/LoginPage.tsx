import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from '@mui/material';
import { LoginPageProps } from "@/types/types";
import { useTranslation } from 'react-i18next';

const LoginPage: React.FC<LoginPageProps> = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { t } = useTranslation();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === "admin" && password === "12345") {
        localStorage.setItem('isAuthenticated', 'true');
        setIsAuthenticated(true)
        navigate('/profile')
    } else {
      setError("Имя пользователя или пароль введено неправильно.");
    }
  };

  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    setIsAuthenticated(false)
  };

  if (isAuthenticated) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "50vh" }}>
      <p>{t('loginPageTitle')}</p>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        {t('logout')}
      </Button>
    </div>
    );
  }

  return (
    <React.Fragment>
      <Box style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: "center", margin: 50 }}>
        <Typography variant="h4" gutterBottom>
          {t('loginPage')}
        </Typography>
        <form style={{display: 'contents'}} onSubmit={handleLogin}>
          <TextField
            label={t('nameForm')}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            margin="normal"
          />
          <TextField
            label={t('loginForm')}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            margin="normal"
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button style={{margin: 15}}type="submit" variant="contained" color="primary" size="large">
            {t('login')}
          </Button>
        </form>
      </Box>
    </React.Fragment>
  );
}

export default LoginPage;
