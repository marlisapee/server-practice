const express = require('express');
const app = express();
const PORT = 3000;

// import routes
const apprenticeRoutes = require('./routes/apprentice_routes');
const companyRoutes = require('./routes/company_routes');
const projectRoutes = require('./routes/project_routes');

// middleware to parse json body and url queries
app.use(express.json());
app.use(express.urlencoded());

// use routes
app.use('/routes/apprentices', apprenticeRoutes);
app.use('/routes/companies', companyRoutes);
app.use('/routes/projects', projectRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
