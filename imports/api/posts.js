export const Posts = new Mongo.Collection('posts');

let Schema = {};
Schema.post = new SimpleSchema({
  title: {
    type: String,
    max: 15,
  },
  content: {
    type: String,
    max: 100,
  }, 
});

Posts.attachSchema(Schema.post);

Meteor.methods({
  'post.insert'(post){
      Posts.insert(post, function(err){
        if(err)
          throw new Meteor.Error('Error inserting post: ' + err);
      }); 
   },
   'post.remove'(_id){
     Posts.remove({_id: _id}, function(err){
       if(err)
        throw new Meteor.Error('Error removing post: ' + err);
     });
   },
   'post.update'(_id, post){
       Posts.update({_id: _id}, post, function(err){
           if(err)
            throw new Meteor.Error('Error updating post: ' + err);
       });
   }
});


if (Meteor.isServer) {
  Meteor.publish('posts', function postsPublication(){ 
        return Posts.find({});
  });  
}
