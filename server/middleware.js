module.exports = {
  checkSession:(req, res, next) => {
    req.session.user = {
      user_id: 2
    }
    
    try {
      if (req.session.user.user_id) next()
    } catch (err) {
      console.log('No user logged in')
      res.status(403).send("No user logged in")
    } 
  }
}