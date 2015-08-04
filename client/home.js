Template.home.onCreated(function(){
	this.subscribe('todoData');
	this.subscribe('allJobsDone');
});

Template.home.helpers({	
	todos:function(){
		return todo.find({done:false});
	},
	todoCount:function(){
		if(todo.find({done:false}).count()==0)
			return true;
	},
	jobsDone:function(){
		return todo.find({done:true});
	}
});

Template.home.events({
	'click #doneButton': function(eve,tem){
		var id = this._id;
		console.log(id);
		Meteor.call('updateDone',id,function(err,res){
			if(!err){
				//alert('updated');
			}
		});
	},
	'click #deleteButton':function(eve,tem){
		var id = this._id;
		Meteor.call('deleteJob',id,function(err,res){
			if(!err){
				//alert('deleted');
			}
		});
	}
});