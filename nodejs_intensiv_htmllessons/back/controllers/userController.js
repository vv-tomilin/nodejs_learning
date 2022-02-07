//* @desc   Get user profile
//* @route  GET /api/users/profile
//* @access Private

export const getUserProfile = (req, res) => {
  const user = {
    name: 'Max',
    age: 30
  };

  res.json(user);
};