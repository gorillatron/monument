import Ember from 'ember';
import AuthenticationControllerMixin from 'simple-auth/mixins/authentication-controller-mixin';


export default Ember.Controller.extend(AuthenticationControllerMixin, {

  authenticator: 'authenticator:custom',

  actions: {

    authenticate: function() {
      this.get('session').authenticate('authenticator:custom', {
        useridentification: this.get('useridentification'),
        password: this.get('password')
      });
    }

  }

});
