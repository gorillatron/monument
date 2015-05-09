
import _ from 'lodash';


/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
export default {

  find: function(req, res, next) {
    User.findNotDeletedAnd()
      .then((users) => res.jsonx({ users: users }) )
      .catch((error) => next(error) )
  },

  findOne: function(req, res, next) {
    User.findOneNotDeletedAnd({ id: req.param('id') })
      .then((user) => {
        if(!user) {
          return res.notFound()
        }

        res.jsonx({ user: user })
      })
      .catch((error) => next(error) )
  },

  destroy: function(req, res, next) {
    User.findOneNotDeletedAnd({ id: req.param('id') })
      .then((user) => {
        if(!user) {
          return res.notFound()
        }

        user.deleteTime = new Date()

        return user.save()
      })
      .then((deletedUser) => res.jsonx({ user: deletedUser }) )
      .catch((error) => next(error) )
  },

  update: function(req ,res, next){
    User.findOneNotDeletedAnd({ id: req.param('id') })
      .then((user) => {
        if(!user) {
          return res.notFound()
        }

        _.extend(user, _.pick(req.body.user,
          'name',
          'email',
          'phoneNumber',
          'subscribesToNews',
          'role'
        ));

        return user.save()
      })
      .then((updatedUser) => res.jsonx({ user: updatedUser }))
      .catch((error) => next(error) )
  },

  create: function(req, res, next){
    User.create(
      _.pick(req.body.user,
        'name',
        'email',
        'phoneNumber',
        'subscribesToNews',
        'role'
      ))
    .then((createdUser) => res.jsonx({ user: createdUser }))
    .catch((error) => next(error) )

  }

};
