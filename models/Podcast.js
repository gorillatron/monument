
var podcasts = [
  {
    id: 1,
    number: 1,
    title: 'Korpex',
    scTrackId: 89868066,
    scColor: "A5BD7D",
    backgroundImage: '/images/feature_photos/01background.jpg',
    descriptionHtml: '<div class="column first"><p>The young berliner had his first success behind the turntables in the beginning of the new millennium. After moving to Norway in 2005, everything changed fast and Korpex had countless gigs and became resident at The Villa Oslo.</p><p>In Oslo Korpex and his friends also started a new underground concept called: Amenta. Amenta was launched in 2011 and Korpex is one of the main guys behind the concept which focuses on providing unforgettable nights on the dancefloor, both as DJ and organizer.</p></div><div class="column second"><p>His style varies between Detroithouse, driving Deephouse and Dubtechno. After Monument introduced their new norwegian podcast for Techno-interested people around the world, it was no question for him to make the first edition of the Monument Podcast series.</p><p>This man knows how to play, and also how to create epic underground nights, preferably starting in the night and ending in the morning.</p></div>'
  },
  {
    id: 2,
    number: 2,
    title: 'Ronny Rabalder',
    scTrackId: 91420181,
    scColor: "A5BD7D",
    backgroundImage: '/images/feature_photos/02background.jpg',
    descriptionHtml: '<div class="column first"><p>In this mix we introduce Ronny Rabalder. Born in Ålesund, he started playing with vinyl in 95. After listening to Carl Cox at Velvet Underground in 97 he knew techno was the purpose. Ronny was known for playing heavy and dark detroit techno which had a natural push and drive to it, so called “traktor techno”) played all over Ålesund and finally moved to Oslo where he became a member of the legendary Sunkissed crew. 4</p><p>You can catch Ronny playing in some of Oslo`s best clubs, from the heart of culture at Blå to the dark cellar at The Villa and ofcourse at his new home, Jaeger. </p></div><div class="column second"><p>Ronnys style varies from both house and techno, but he will never forget the true passion and inspiration coming from the deep rhytms of Berlin which you will hear if you catch him playing.</p><p>With almost 20 year of experience behind the decks this man is a Norwegian techno old-timer that has mastered the art of selecting and combining good music. We are proud to present Ronny Rabalder as our second guest on the Monument Podcast.</p><p>Enjoy.</p></div>',
    shadowDome: true
  },
  {
    id: 3,
    number: 3,
    title: 'Vincent Neumann',
    scTrackId: 92051901,
    scColor: "2E2E2E",
    backgroundImage: '/images/feature_photos/03background.jpg',
    descriptionHtml: '<div class="column first"><p>Monument 03 is out, and we are excited to bring you a really great and special mix from Vincent Neumann. Being a resident DJ at the Distillery (East Germany\'s oldest techno club) and a part wonderful Krill Music label this man knows his stuff.</p><p>Vincent told us he had the idea for this mix a while ago, showcasing that techno isn\'t dependent on varying tempos to showcase different feelings. ”So basically the tempo is constantly at 130bpm (my favourite tempo in the world) and I tried to show with different tracks and grooves how one tempo can still contain a lot of different feelings and emotions. Also, I had to use a corny Black Metal intro because Norway, you know?“.</p></div><div class="column second"><p>Outside the clubbing and techno bubble he just finished a diploma thesis in psychology (Congratulations). If you want to catch Vincent playing check out Distillery, Westwerk, Elipamanoke and Sweat. He will also be back on the legendary Tresor club soon, so keep your eyes open for an epic night of pure beauty when it comes to the sounds of Techno!</p></div>',
    shadowDome: true
  },
  {
    id: 4,
    number: 4,
    title: 'Espen Lauritzen',
    scTrackId: 93424185,
    scColor: "2E2E2E",
    backgroundImage: '/images/feature_photos/04background.jpg',
    descriptionHtml: '<div class="column first"><p>Monument 03 is out, and we are excited to bring you a really great and special mix from Vincent Neumann. Being a resident DJ at the Distillery (East Germany\'s oldest techno club) and a part wonderful Krill Music label this man knows his stuff.</p><p>Vincent told us he had the idea for this mix a while ago, showcasing that techno isn\'t dependent on varying tempos to showcase different feelings. ”So basically the tempo is constantly at 130bpm (my favourite tempo in the world) and I tried to show with different tracks and grooves how one tempo can still contain a lot of different feelings and emotions. Also, I had to use a corny Black Metal intro because Norway, you know?“.</p></div><div class="column second"><p>Outside the clubbing and techno bubble he just finished a diploma thesis in psychology (Congratulations). If you want to catch Vincent playing check out Distillery, Westwerk, Elipamanoke and Sweat. He will also be back on the legendary Tresor club soon, so keep your eyes open for an epic night of pure beauty when it comes to the sounds of Techno!</p></div>',
    shadowDome: true
  }
]


function Podcast() {}

Podcast.getAll = function( cb ) {
  return cb( null, podcasts )
}



module.exports = Podcast