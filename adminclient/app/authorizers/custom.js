import Base from 'simple-auth/authorizers/base';

export default Base.extend({

  authorize: function(xhr, options){
    console.group()
    console.log('auth.session', this.session)
    console.log('auth.xhr', xhr)
    console.log('auth.options', options)
    if(this.session.authenticated) {
      console.log('auth.authenticated is true')
    }
    else {
      console.log('auth.authenticated is false')
    }
    console.groupEnd()
  }

});
