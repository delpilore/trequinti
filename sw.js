// Choose a different app prefix name
var APP_PREFIX = 'trequinti_';
 
// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_01';
 
// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
  'trequinti/',
  'trequinti/index.html',
  'trequinti/style.css',
  'trequinti/calendario.html'
]