import { FormControlLabel, Switch, Box, Tooltip, Typography } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function AdultToggle({ checked, onChange }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 2,
        p: 1.5,
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          bgcolor: 'rgba(0, 0, 0, 0.3)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          transform: 'translateY(-2px)',
        }
      }}
    >
      <Tooltip 
        title="This will include adult content in search results"
        arrow
        placement="top"
        sx={{
          '& .MuiTooltip-tooltip': {
            bgcolor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 1,
          }
        }}
      >
        <WarningAmberIcon 
          sx={{ 
            color: checked ? 'primary.main' : 'grey.500',
            mr: 1,
            transition: 'color 0.3s ease',
            animation: checked ? 'pulse 2s infinite' : 'none',
            '@keyframes pulse': {
              '0%': { opacity: 1 },
              '50%': { opacity: 0.5 },
              '100%': { opacity: 1 },
            }
          }} 
        />
      </Tooltip>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={onChange}
            sx={{
              '& .MuiSwitch-switchBase': {
                '&.Mui-checked': {
                  color: 'primary.main',
                  '& + .MuiSwitch-track': {
                    backgroundColor: 'primary.main',
                    opacity: 0.5,
                  },
                  '&:hover': {
                    bgcolor: 'rgba(229, 9, 20, 0.1)',
                  },
                },
              },
              '& .MuiSwitch-thumb': {
                boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)',
              },
              '& .MuiSwitch-track': {
                opacity: 0.2,
                backgroundColor: 'grey.500',
                borderRadius: 20,
              },
            }}
          />
        }
        label={
          <Typography 
            sx={{ 
              color: checked ? 'white' : 'grey.500',
              transition: 'color 0.3s ease',
              fontSize: '0.9rem',
              fontWeight: checked ? 500 : 400,
              textShadow: checked ? '0 0 10px rgba(229, 9, 20, 0.5)' : 'none'
            }}
          >
            Adult Content
          </Typography>
        }
      />
    </Box>
  );
}
