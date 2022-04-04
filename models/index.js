const Blog = require('./Blog.js');
const User = require('./User.js');

User.hasMany(Blog);

module.exports = { User, Blog };
