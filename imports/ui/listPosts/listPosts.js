import './listPosts.html'

Template.listPosts.onRender(function(){
    $('.modal-trigger').leanModal();
    $('input, textarea').characterCounter();
    Meteor.subscribe('courses');
});

