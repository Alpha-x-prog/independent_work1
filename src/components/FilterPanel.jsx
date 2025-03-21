import React from 'react';
import { ToggleButton, ToggleButtonGroup, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

const FilterPanel = ({ onFilterChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const categories = ['Все', 'Электроника', 'Одежда', 'Книги'];
  const [selected, setSelected] = React.useState('Все');

  const handleChange = (event, newCategory) => {
    if (newCategory !== null) {
      setSelected(newCategory);
      onFilterChange(newCategory);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ToggleButtonGroup
        value={selected}
        exclusive
        onChange={handleChange}
        sx={{
          my: 2,
          backgroundColor: theme.palette.background.paper,
          borderRadius: '12px',
          boxShadow: theme.palette.mode === 'dark' ? '0px 4px 10px rgba(255, 255, 255, 0.1)' : '0px 4px 10px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 1,
          padding: isMobile ? '4px' : '8px',
        }}
      >
        {categories.map((category) => (
          <ToggleButton
            key={category}
            value={category}
            sx={{
              textTransform: 'none',
              borderRadius: '8px',
              fontSize: isMobile ? '0.875rem' : '1rem',
              padding: isMobile ? '4px 8px' : '8px 16px',
              '&.Mui-selected': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              },
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            {category}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </motion.div>
  );
};

export default FilterPanel;
