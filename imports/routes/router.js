import { Router } from 'meteor/iron:router';
import { Posts } from '../api/posts.js';

import '../ui/layout/layout.js';
import '../ui/listPosts/listPosts.html'

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
    this.render('listPosts');
});