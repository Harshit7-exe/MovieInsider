import { FormControl, InputLabel, Select, MenuItem, Chip } from '@mui/material';
import { useState } from 'react';

export default function GenreSelect({ genres, selected, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FormControl 
      sx={{ 
        minWidth: 200,
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.23)',
          },
          '&:hover fieldset': {
            borderColor: 'primary.main',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'primary.main',
          },
        },
      }}
    >
      <InputLabel 
        sx={{ 
          color: 'white',
          '&.Mui-focused': {
            color: 'primary.main',
          }
        }}
      >
        Genre
      </InputLabel>
      <Select
        value={selected}
        onChange={onChange}
        label="Genre"
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        sx={{
          color: 'white',
          transition: 'transform 0.2s ease',
          transform: isOpen ? 'scale(1.02)' : 'scale(1)',
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: 'background.paper',
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              '& .MuiMenuItem-root': {
                transition: 'background-color 0.2s ease',
                '&:hover': {
                  bgcolor: 'rgba(229, 9, 20, 0.1)',
                },
                '&.Mui-selected': {
                  bgcolor: 'rgba(229, 9, 20, 0.2)',
                  '&:hover': {
                    bgcolor: 'rgba(229, 9, 20, 0.3)',
                  },
                },
              },
            },
          },
        }}
      >
        <MenuItem value="">
          <Chip 
            label="All Genres" 
            variant="outlined" 
            sx={{ 
              borderColor: 'primary.main',
              color: 'white',
            }} 
          />
        </MenuItem>
        {genres.map((g) => (
          <MenuItem key={g.id} value={g.id}>
            <Chip 
              label={g.name} 
              sx={{ 
                bgcolor: selected === g.id ? 'primary.main' : 'transparent',
                color: 'white',
                '&:hover': {
                  bgcolor: selected === g.id ? 'primary.dark' : 'rgba(229, 9, 20, 0.2)',
                },
              }} 
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
