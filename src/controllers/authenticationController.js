const authenticationController = {
    //POST /auth/register
  register: (req, res) => {
    const { name, email, password } = req.body;

    const newUser = {
      id: Math.floor(Math.random() * 99999),
      name,
      email,
      password,
      role: "standard",
    };

    users.push(newUser);
  },
};
