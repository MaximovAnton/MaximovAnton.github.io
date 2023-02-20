import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setLanguage } from '../../store/reducers/languageSlice';
import { useTranslation } from 'react-i18next';
import { Button, Box } from '@mui/material';

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.language);
  const { i18n } = useTranslation()

  const handleChangeLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage)
    dispatch(setLanguage(newLanguage));
  };

  return (
    <Box alignItems="center" width={100} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
      <div style={{ display: 'flex'}}>
        <Button variant="contained" style={{ minWidth: 20 }} onClick={() => handleChangeLanguage('en')}>En</Button>
        <Button variant="contained" style={{ minWidth: 20 }} onClick={() => handleChangeLanguage('uk')}>Uk</Button>
      </div>
      <Box style={{ height: 15, 
                    backgroundColor: 'transparent', 
                    color: 'black', 
                    fontSize: 14,  
                    borderRadius: 55, 
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', 
                    fontFamily: 'Impact, Charcoal, sans-serif' }}>
        {language}
      </Box>
    </Box>
  );
};

export default LanguageSwitcher