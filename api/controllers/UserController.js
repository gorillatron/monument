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

        user.name = req.body.user.name
        user.email = req.body.user.email
        user.phoneNumber = req.body.user.phoneNumber
        user.subscribesToNews = req.body.user.subscribesToNews
        user.role = req.body.user.role

        return user.save()
      })
      .then((updatedUser) => res.jsonx({ user: updatedUser }))
      .catch((error) => next(error) )
  }

};
