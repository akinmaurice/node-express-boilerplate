/*
Function to get the Register Page
*/
exports.getRegisterPage = (req, res) => {
  res.render('register', { title: 'Create Account' });
};

/*
Function to get the Profile Page
*/
exports.getProfilePage = (req, res) => {
  res.render('profile', { title: 'My Account' });
};
