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

    const blogData = await Blog.findAll({
      include: [{model: User}],
    });

    //make the data readable by looping through the array and making it readable
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render('userprofile', {
      user,
      blogs,
      loggin_in: true
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all blogs from the blogData.json and join with user data
router.get('/homepage', async (req, res) => {
  console.log("homepage working");
    try {
        const blogData = await Blog.findAll({
        include: [{model: User}],
    });
    
    //make the data readable by looping through the array and making it readable
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render('homepage', { 
      blogs
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blogpost = blogData.get({ plain: true });

    res.render('blogpost', {
      ...blogpost,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
