const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5500;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});