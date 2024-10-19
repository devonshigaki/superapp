import express from 'express';
import cors from 'cors';
import { createUser, fetchUserData, updateUserData } from './services/users';
import { createReportData, fetchReportDataFirestore, updateReportDataFirestore } from './services/reports';
import { createProvider } from './services/providers';
import { createOffer, fetchPersonalizedOffers } from './services/offers';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// User Routes
app.post('/users', async (req, res) => {
  const userData = req.body;
  const user = await createUser(userData);
  res.json(user);
});

app.get('/users/:userId', async (req, res) => {
  const userId = req.params.userId;
  const userData = await fetchUserData(userId);
  if (userData) {
    res.json(userData);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.put('/users/:userId', async (req, res) => {
  const userId = req.params.userId;
  const userData = req.body;
  const updatedUser = await updateUserData(userId, userData);
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Report Routes
app.post('/reports', async (req, res) => {
  const reportData = req.body;
  const report = await createReportData(reportData);
  res.json(report);
});

app.get('/reports/:reportId', async (req, res) => {
  const reportId = req.params.reportId;
  const reportData = await fetchReportDataFirestore(reportId);
  if (reportData) {
    res.json(reportData);
  } else {
    res.status(404).json({ message: 'Report not found' });
  }
});

app.put('/reports/:reportId', async (req, res) => {
  const reportId = req.params.reportId;
  const reportData = req.body;
  const updatedReport = await updateReportDataFirestore(reportId, reportData);
  if (updatedReport) {
    res.json(updatedReport);
  } else {
    res.status(404).json({ message: 'Report not found' });
  }
});

app.post('/reports/:reportId/publish', async (req, res) => {
  const reportId = req.params.reportId;
  const reportData = await fetchReportDataFirestore(reportId);
  // ... existing code ...
});

// Provider Routes
app.post('/providers', async (req, res) => {
  const providerData = req.body;
  const provider = await createProvider(providerData);
  res.json(provider);
});

// Offer Routes
app.post('/offers', async (req, res) => {
  const offerData = req.body;
  const offer = await createOffer(offerData);
  res.json(offer);
});

app.get('/users/:userId/offers', async (req, res) => {
  const userId = req.params.userId;
  const offers = await fetchPersonalizedOffers(userId);
  if (offers) {
    res.json(offers);
  } else {
    res.status(404).json({ message: 'Offers not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
