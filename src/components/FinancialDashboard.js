import React from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FinancialDashboard = () => {
  // Fake financial data
  const monthlyData = [
    { month: 'Jan', income: 15000, expenses: 12000 },
    { month: 'Feb', income: 16000, expenses: 13000 },
    { month: 'Mar', income: 18000, expenses: 14000 },
    // Add more data as needed
  ];

  // Additional financial metrics
  const rentsReceived = 25000;
  const unpaidExpenses = 5000;
  const unpaidRent = 3000;
  const upcomingExpenses = [
    { description: 'Maintenance', amount: 1000, dueDate: '2023-11-15' },
    { description: 'Insurance', amount: 1200, dueDate: '2023-12-01' },
    // Add more upcoming expenses as needed
  ];

  // Tenant requests
  const tenantRequests = [
    { id: 1, description: 'Repair request', status: 'Pending' },
    { id: 2, description: 'Renewal request', status: 'Approved' },
    // Add more tenant requests as needed
  ];

  // Occupancy rate
  const occupancyRate = 0.95; // 95%

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome, Voltaire
      </Typography>

      {/* Monthly Cash Flow Metrics */}
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Monthly Cash Flow Metrics
        </Typography>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="#8884d8" />
            <Bar dataKey="expenses" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>

      {/* Additional Financial Metrics */}
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item xs={12} md={4}>
          <Box component={Paper} elevation={3} p={2}>
            <Typography variant="h6" gutterBottom>
              Rents Received
            </Typography>
            <Typography variant="h4">${rentsReceived}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box component={Paper} elevation={3} p={2}>
            <Typography variant="h6" gutterBottom>
              Unpaid Expenses
            </Typography>
            <Typography variant="h4">${unpaidExpenses}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box component={Paper} elevation={3} p={2}>
            <Typography variant="h6" gutterBottom>
              Unpaid Rent
            </Typography>
            <Typography variant="h4">${unpaidRent}</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Upcoming Expenses */}
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Upcoming Expenses
        </Typography>
        <Grid container spacing={2}>
          {upcomingExpenses.map((expense) => (
            <Grid item xs={12} md={4} key={expense.description}>
              <Box component={Paper} elevation={3} p={2}>
                <Typography variant="subtitle2">{expense.description}</Typography>
                <Typography variant="h6">${expense.amount}</Typography>
                <Typography variant="body2">Due on {expense.dueDate}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Tenant Requests */}
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Tenant Requests
        </Typography>
        <Grid container spacing={2}>
          {tenantRequests.map((request) => (
            <Grid item xs={12} md={6} key={request.id}>
              <Box component={Paper} elevation={3} p={2}>
                <Typography variant="subtitle2">{request.description}</Typography>
                <Typography variant="body2">Status: {request.status}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Occupancy Rate */}
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Occupancy Rate
        </Typography>
        <Typography variant="h4">{(occupancyRate * 100).toFixed(2)}%</Typography>
      </Paper>
    </Container>
  );
};

export default FinancialDashboard;
