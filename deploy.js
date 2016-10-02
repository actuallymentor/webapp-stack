require('shelljs/global')

echo( 'Checking for git and ssh' )
if ( !which( 'git' ) || !which( 'ssh' ) ) {
  echo( 'You do not have git and ssh, if on windows please use a unix style shell' )
  exit( 1 )
} else {
	echo( 'You have git and ssh, proceeding' )
}

var gitstatus = exec( 'git status' ).grep( 'changes' )

console.log( gitstatus )