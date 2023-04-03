import React, { useContext, useState } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../context/languageContext';

const LanguageSelect = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [locale, setLocale] = useState(language);
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    const { value } = event.target;

    setLocale(value);
    i18n.changeLanguage(value);
    toggleLanguage(value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 100 }}>
      <InputLabel id="demo-simple-select-label">Language</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={locale}
        label="language"
        onChange={handleChange}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="uk">Ukrainian</MenuItem>
        <MenuItem value="de">German</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
