<<<<<<< HEAD
 var expect = chai.expect;

 describe("PostsView", function(){
   var view, posts;
   beforeEach(function(){
     posts = [{title: "Title", body: "Body"}];
     view = new PostsView();
   });

   describe("showPosts", function(){
     it("should take a post array and list them", function(){
         view.showPosts(posts);
         expect($('.posts li').length).to.equal(1);
         expect($('.posts li h1').text()).to.equal("Title");
         expect($('.posts li p').text()).to.equal("Body");
     });
   });
 });
=======
var expect = chai.expect;

describe("PostsView", function(){
  var view, posts;
  beforeEach(function(){
    posts = [{title: "Title", body: "Body"}];
    view = new PostsView();
  });

  describe("showPosts", function(){
    it("should take a post array and list them", function(){
        view.showPosts(posts);
        expect($('.posts li').length).to.equal(1);
        expect($('.posts li h1').text()).to.equal("Title");
        expect($('.posts li p').text()).to.equal("Body");
    });
  });
});
>>>>>>> 75ebe8b1dd617f4a530d6bdedd7bd888824979ff

/*
  var view = new PostsView();
  view.showPosts(posts); // => li for each post
*/
