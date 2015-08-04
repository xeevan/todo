todo = new Mongo.Collection('todo');

todo.attachSchema(new SimpleSchema({
  title: {
    type: String,
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },
  details: {
    type: String,
    autoform: {
      rows: 10,
      'label-type': 'stacked'
    }
  },
  done: {
    type: Boolean,
    defaultValue: false,
    autoform: {
      type: 'toggle'
    }
  }
}));


Meteor.methods({
	'inputTodoData':function(data){
		todo.insert(data);
	},
	'updateDone':function(id){
		todo.update({_id:id},{$set:{done:true}});
	},
	'deleteJob':function(id){
		todo.remove({_id:id});
	}
});