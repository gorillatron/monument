/**
* Event.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

export default {

  attributes: {

    name: {
      type: 'string'
    },

    startDate: {
      type: 'date'
    },

    endDate: {
      type: 'date'
    },

    participants: {
      collection: 'User',
      via: 'partakingAtEvent'
    }

  }
}
