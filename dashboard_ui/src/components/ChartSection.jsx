import { Box, Typography, Card, CardContent } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

export default function ChartSection() {
    const xData = [1,2,3,4,5,6,7,8,9,10];
    const yData = [0, 5.5, 2, 8.5, 1.5, 5, 1, 1.5, 5, 4.7];

  return (
    <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
      <CardContent>
        <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 500 }}>
          Graphique (avec @mui/x-charts)
        </Typography>
        <Box sx={{ width: '25%', height: 250 }}>
          <LineChart
            xAxis={[{ 
              data: xData,
              min: 0,
              max: 10,
            }]}
            series={[
              {
                data: yData,
                color: '#4fc3f7',
                curve: 'natural',
                connectNulls: false,
              },
            ]}
            yAxis={[{
              min: 0,
              max: 10,
            }]}
            height={250}
            margin={{ left: 40, right: 20, top: 20, bottom: 30 }}
            
          />
        </Box>
      </CardContent>
    </Card>
  );
}