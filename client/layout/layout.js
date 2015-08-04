
AutoForm.hooks({
  'formData': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
    },

    onError: function(operation, error, template) {
      alert('oh no');
    }
  }
});