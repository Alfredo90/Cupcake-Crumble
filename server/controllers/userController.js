const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const { email, password, username } = req.body;
    const [foundUser] = await db.check_user(email);
    if (foundUser) {
      return res.status(400).send("User already exists");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const [newUser] = await db.add_user([email, username, hash]);
  
    delete newUser.password
    req.session.user = newUser
    // req.session.user = {
    //   userId: newUser.user_id,
    //   email: newUser.email,
    //   username: newUser.username,
    // };
    res.status(200).send(req.session.user);
  },
  login: async (req, res) => {
    const db = req.app.get("db");
    const { email, password } = req.body;
    const [foundUser] = await db.check_user(email);
    if (!foundUser) return res.status(401).send("Incorrect login information");

    const authenticated = bcrypt.compareSync(password, foundUser.password)
    if (authenticated) {
      delete foundUser.password
      req.session.user = foundUser
      
      console.log(req.session.user)
      res.status(200).send(req.session.user);
    } else {
      res.status(401).send("Incorrect login information");
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200)
  },
  getUserSession: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.status(404).send("Please Log In");
    }
  },
};
