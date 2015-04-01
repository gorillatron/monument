import Base from 'simple-auth/authorizers/base';

export default Base.extend({

  authorize: function(xhr, options){
    var token = this.get('session.token');
    if (this.get('session.isAuthenticated') && !Ember.isEmpty(token)) {
      xhr.setRequestHeader('Authorization', 'Token:' + token);
    }
  }

});
