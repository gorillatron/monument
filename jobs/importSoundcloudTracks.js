import co from 'co';
import Promise from 'bluebird';
import Sails from 'sails';
import request from 'request-promise';
import yargs from 'yargs';

Sails.log.debug('[job:importSoundclodTracks] starting')

Sails.log.debug('[job:importSoundclodTracks] loading sails')

Sails.load({
  environment: yargs.argv.prod ? 'production' : 'development'
}, () => {

  Sails.log.debug('[job:importSoundclodTracks] sails loaded')
  var requestTime = (new Date).getTime()
  var insertTime = (new Date).getTime()

  request.get('http://api.soundcloud.com/users/monument-podcast/tracks?client_id=84f2b368d96bdc044dafced637dbce4b&format=json&_status_code_map[302]=200')
    .then(JSON.parse)
    .then((tracks) => {
      requestTime = (new Date).getTime() - requestTime
      return tracks
    })
    .then((tracks) => Podcast.createIfNotExists( tracks.map((track) => { return {soundcloudTrack: track} } )))
    .then((podcasts) => {
      insertTime = (new Date).getTime() - insertTime
      return podcasts
    })
    .then((podcasts) => {
      if(Array.isArray(podcasts)) {
        Sails.log.debug('[job:importSoundclodTracks]' + podcasts.length + ' Podcasts inserted')
      }
      else if(podcasts) {
        Sails.log.debug('[job:importSoundclodTracks] 1 Podcast inserted')
      }
      else {
        Sails.log.debug('[job:importSoundclodTracks] 0 Podcast inserted')
      }
      Sails.log.debug('[job:importSoundclodTracks] requesttime: ' + requestTime + ' ms')
      Sails.log.debug('[job:importSoundclodTracks] inserttime: ' + insertTime + ' ms')

      Sails.log.debug('[job:importSoundclodTracks] exiting with 0')
      process.exit(0)
    })
    .catch((error) => {
      Sails.log.debug('[job:importSoundclodTracks] threw error')
      Sails.log.error('jobs/importSoundclodTracks.js:error', error)
      Sails.log.debug('[job:importSoundclodTracks] exiting with 1')
      process.exit(1)
    })

})


