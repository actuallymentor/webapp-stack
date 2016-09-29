fs = require( 'fs' )

// Write the sample environment variable file to the main .env file
fs.createReadStream( '.sample-env' )
  .pipe( fs.createWriteStream( '.env' ) )