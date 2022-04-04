const router = require('express').Router();
const { Blog, User } = require('../models');
//const withAuth = require('../utils/auth');

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

    res.render('homepage', { 
      blogs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
