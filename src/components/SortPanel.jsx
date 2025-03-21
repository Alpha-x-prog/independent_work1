import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, useTheme, useMediaQuery } from '@mui/material';

const SortPanel = ({ onSortChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sortOptions = [
    { value: 'default', label: 'По умолчанию' },
    { value: 'priceAsc', label: 'По цене (возрастание)' },
    { value: 'priceDesc', label: 'По цене (убывание)' },
    { value: 'rating', label: 'По рейтингу' },
  ];

  return (
    <FormControl
      fullWidth
      sx={{
        my: 2,
        backgroundColor: theme.palette.background.paper,
        borderRadius: '8px',
        boxShadow: theme.palette.mode === 'dark' ? '0px 4px 10px rgba(255, 255, 255, 0.1)' : '0px 4px 10px rgba(0, 0, 0, 0.1)',
        '& .MuiInputLabel-root': { color: theme.palette.text.primary },
        '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
      }}
    >
      <InputLabel>{isMobile ? 'Сорт.' : 'Сортировка'}</InputLabel>
      <Select
        onChange={(e) => onSortChange(e.target.value)}
        defaultValue="default"
        sx={{
          borderRadius: '8px',
          fontSize: isMobile ? '0.875rem' : '1rem',
          '& .MuiSelect-select': {
            padding: isMobile ? '8px' : '12px',
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
          },
        }}
      >
        {sortOptions.map((option) => (
          <MenuItem key={option.value} value={option.value} sx={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortPanel;
