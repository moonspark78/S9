import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import ChartSection from './components/ChartSection';
import OrdersTable from './components/OrdersTable';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';

export default function App() {
  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        
        <Box sx={{ flex: 1, padding: 3, overflow: 'auto' }}>
          
          <Box 
            sx={{ 
              display: 'flex', 
              gap: 2, 
              marginBottom: 3,
              flexWrap: 'wrap'
            }}
          >
            <StatCard 
              icon={<AttachMoneyIcon sx={{ fontSize: 32 }} />} 
              value="1000" 
              label="Ventes" 
            />
            <StatCard 
              icon={<PeopleIcon sx={{ fontSize: 32 }} />} 
              value="300" 
              label="Clients" 
            />
            <StatCard 
              icon={<MessageIcon sx={{ fontSize: 32 }} />} 
              value="5" 
              label="Messages" 
            />
          </Box>
          
          <Box sx={{ marginBottom: 3 }}>
            <ChartSection />
          </Box>
          
          
          <OrdersTable />
        </Box>
      </Box>
    </Box>
  );
}