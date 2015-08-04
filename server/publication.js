Meteor.publish('todoData',function(){
	return todo.find({done:false});
});

Meteor.publish('allJobsDone',function(){
	return todo.find({done:true});
});