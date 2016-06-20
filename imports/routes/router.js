import { Router } from 'meteor/iron:router';
import { Posts } from '../api/posts.js';

import '../ui/layout/layout.js';
import '../ui/listPosts/listPosts.js';
import '../ui/viewPost/viewPost.js';
import '../ui/addNewPost/addNewPost.js';

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
    this.render('listPosts');
});

Router.route('/post/:_id', function(){
  var post = Posts.findOne({_id: this.params._id});
  this.render('viewPost', {data:post});
})