
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("^^ -------------------- :D")
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text.toLocaleLowerCase() === 'quit\n' || text.toLowerCase()==='exit\n') {
    quit();
  }
  else if (text.toLowerCase().slice(0, 6)==='hello ' || text.toLowerCase().slice(0, 5)==='hello'){
    hello(text);
  }
  else if(text.toLocaleLowerCase()==='help\n'){
    help()
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(x){
  if(x.toLowerCase().slice(0, 6)==='hello '){
    console.log(x=x.replace("\n","!"));
  }
  else{
  console.log('hello!')}
}


$c=["help: to show this list","quite or exit: to close the app","hello: greets you with or without any value you enter after it!"]
/** 
*Shows all available commands
*
*
* @returns {void}
*/
function help(){
  console.log($c);
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, see ya mate!')
  process.exit();
}

// The following line starts the application
startApp("Muhammad Jamal")
