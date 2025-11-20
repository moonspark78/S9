import { Card, CardContent, Typography, Box } from '@mui/material';

export default function StatCard({ icon, value, label }) {
  return (
    <Card 
      sx={{ 
        flex: 1,
        minWidth: 250,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ color: '#616161', fontSize: 30 }}>
            {icon}
          </Box>
          <Box>
            <Typography variant="h4" sx={{ fontSize: 22, fontWeight: 'bold',  color: '#212121' }}>
              {value}
            </Typography>
            <Typography variant="body2" sx={{ color: '#757575', marginTop: 0.5 }}>
              {label}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

