import { 
  Card, 
  CardContent, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Divider,
} from '@mui/material';

export default function OrdersTable() {
  const orders = [
    { id: 1, nom: 'Nom 1', date: '24-04-2025', statut: 'En cours' },
    { id: 2, nom: 'Nom 2', date: '16-04-2025', statut: 'Payée' },
    { id: 3, nom: 'Nom 3', date: '10-04-2025', statut: 'Terminée' },
    { id: 4, nom: 'Nom 5', date: '02-04-2025', statut: 'Terminée' },
  ];

  return (
    <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
      <CardContent>
        <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 500 }}>
          Dernières commandes
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, color: '#616161' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 600, color: '#616161' }}>Nom</TableCell>
                <TableCell sx={{ fontWeight: 600, color: '#616161' }}>Date</TableCell>
                <TableCell sx={{ fontWeight: 600, color: '#616161' }}>Statut</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow 
                  key={order.id}
                  sx={{ 
                    '&:hover': { backgroundColor: '#fafafa' },
                    borderBottom: '1px solid #e0e0e0'
                  }}
                >
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.nom}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.statut}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Divider sx={{ borderBottomWidth: 3, bgcolor: 'grey.600' }} />
      </CardContent>
    </Card>
  );
}
