Router.map(function(){
	this.route('student', {
		path: 'student'
	});
	this.route('teacher', {
		path: 'teacher'
	});
	this.route('login', {
		path: '/'
	});
});

function setColor(btn,color){
    
    var property=document.getElementById(btn);
   if (window.getComputedStyle(property).backgroundColor == 'rgb(244, 113, 33)') {
      property.style.backgroundColor=color;
   }
    else {
      property.style.backgroundColor = "#f47121";
    }
  };