import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

import { Header } from '../../components/Header';
import { LanguageContext } from '../../context/languageContext';

const RootRoute = () => {
  const [language, setLanguage] = useState('en');

  function toggleLanguage(lang) {
    setLanguage(lang);
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div className="content">
        <Header />
        <Box
          component="main"
          sx={{
            p: 3,
          }}
        >
          <Container maxWidth="xl">
            <Toolbar />
            <Outlet />
          </Container>
        </Box>
      </div>
    </LanguageContext.Provider>
  );
};

export default RootRoute;
