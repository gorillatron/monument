/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

import url from 'url';
import log from 'captains-log';

if(!process.env.REDISCLOUD_URL) {
  sails.log.warn('no redis url in process.env.REDISCLOUD_URL:', process.env.REDISCLOUD_URL)
}

var redisURL = url.parse(process.env.REDISCLOUD_URL);
var redisPass = redisURL.auth.split(":")[1];

export default {

  port: process.env.PORT,

  log: {
    level: "debug"
  },

  connections: {
    mongo: {
      adapter: 'sails-mongo',
      url: process.env.MONGOLAB_URI,
      port: 27017
    }
  },

  session: {
    secret: process.env.SESSION_SECRET,
    adapter: 'redis',
    host: redisURL.hostname,
    port: redisURL.port,
    pass: redisPass,
    prefix: 'sess:'
  }
}
