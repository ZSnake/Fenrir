import './addNewPost.html';

Template.addNewPost.onRender(function(){
    $('.modal-trigger').leanModal();
    $('input, textarea').characterCounter();
})