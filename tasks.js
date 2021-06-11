
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
 * Global variables 
 *
 */
var h=["help: to show this list","quite or exit: to close the app",
"hello: greets you with or without any value you enter after it!"];

var listy=["1st task","2nd task"];

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
  else if (text.toLowerCase().trim().slice(0, 5)==='hello'){
    hello(text);
  }
  else if(text.toLocaleLowerCase()==='help\n'){
    help()
  }
  else if(text.toLocaleLowerCase().trim()==='list'){
    list(text);
  }
  else if (text.toLowerCase().trim().slice(0, 3)==='add'){
    add(text);
  }
  else if (text.toLowerCase().trim().slice(0, 6)==='remove'){
    remove(text);
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
  
  if(x.toLowerCase().trim() === 'hello'){
    console.log('hello!')
  }
  else{
  y=x.trim()
  console.log(y+"!");
  }
}



/** 
*Shows all available commands
*
*
* @returns {void}
*/
function help(){
  console.log(h);
}

/** 
*Shows a list of tasks
*
*
* @returns {void}
*/
function list(x){
  var order=1;
  var checkbox="[ ] ";
  if(listy.length==0){
    console.log("Well seems like you have no tasks, use this free time to read abook or see a friend!");
  }
  else{
  for (var i=0;i<listy.length;i++){
    console.log(order+" - "+checkbox+listy[i]+"\n")
    order+=1;
  }
}

/** 
*Adds a new task
*
* @returns {void}
*/
}
function add(x){
  y=x.toLowerCase().trim();
  if(y==="add"){
    console.log("Please enter a value to be added!")
  }
  else{
    z=y.slice(4, y.length+1)
    listy.push(z.trim());
    console.log('A new item has been added to tasks! enter "list" to view tasks')
  }
}

/** 
*Removes a task accordingly
*
* @returns {void}
*/
function remove(x){
  if (x.toLowerCase().trim()==='remove'){
    listy.pop();
  }
  else{
    y=x.toLowerCase().trim();
    if (y[7]>listy.length){
      console.log("Sorry the number of the task entered doesn't excist, check tasks with 'list' command");
    }
    else{
    for (var i=0;i<listy.length;i++){
      if(y[7]==i+1){
        listy.splice(i,1);
      }
    }
    console.log("The task number: "+y+" has been removed successfully!")
  }
}
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
