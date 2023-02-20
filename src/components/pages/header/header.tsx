import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import LanguageSwitcher from '../../i18n/languageSwitcher';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { HeaderPageProps } from '@/types/types';

const StyledNavLink = styled(NavLink)({
    color: 'white',
    display: 'inline-block',
    width: 70,
    margin: 0,
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: 'medium',
});

const Header: React.FC<HeaderPageProps> = ({isAuthenticated}) => {
    const { t } = useTranslation();
    
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    {t('myApp')}
                </Typography>
                <Box style={{ width: 380 }}>
                    <StyledNavLink to="/" >
                        {t('home')}
                    </StyledNavLink>
                    <StyledNavLink  to="/news" >
                        {t('news')}
                    </StyledNavLink>
                    <StyledNavLink  to={isAuthenticated ? "/profile" : "/"} >
                        {t('profile')}
                    </StyledNavLink>
                    <StyledNavLink to="/login" >
                        {!isAuthenticated ? t('login') : t('logout')}
                    </StyledNavLink>
                </Box>
                <LanguageSwitcher />
            </Toolbar>
        </AppBar>
    );
}

export default Header;
  