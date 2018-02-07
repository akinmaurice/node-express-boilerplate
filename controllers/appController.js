/*
Function to handle the Index Route
*/
exports.getIndexPage = (req, res) => {
  res.render('index', { title: 'Home Page' });
};

/*
Function to handle the Profile Route
*/
