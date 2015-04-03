import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model: function(params) {
    var store = this.store

    return new Ember.RSVP.Promise((resolve, reject) => {

      store.find('user').then((users) =>{

        var filteredUsers = users.filter((user) => {
          console.log(user.isDeleted)
          if(
            (params.role && user.get('role') !== params.role) ||
            (params.search && !(
              (fuzzymatch(user.get('name'), params.search)) ||
              (fuzzymatch(user.get('email'), params.search)) ||
              (user.get('phoneNumber').match(params.search))
            ))
          ) {
            return false
          }

          return true
        })

        resolve(filteredUsers)
      }, reject)
    })
  }

});
