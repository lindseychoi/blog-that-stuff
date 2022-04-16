const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage')
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    res.render('login')
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/userprofile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] }
    });

    const user = userData.get({ plain: true });
    console.log(user);
    
  res.render('userprofile', {
    user,
    loggin_in: true
  })
    } catch (err) {
      res.status(500).json(err);
    }
});

//get all blogs from the blogData.json and join with user data
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
        include: [
          {
          model: User,
          attributes: ['name'],
          },
        ],
    });
    
    //make the data readable by looping through the array and making it readable
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render('login', { 
      blogs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
