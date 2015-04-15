/**
* Page.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

import Promise from 'bluebird';
import {markdown} from 'markdown';

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true,
      unique: true
    },

    content: {
      type: 'string',
      required: true
    }

  }

};

