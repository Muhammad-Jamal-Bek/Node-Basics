
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
"hello: greets you with or without any value you enter after it!", "list: displays a list of the tasks."
,"add: adds a new task to the bottum of the task list",
"remove: by itself it removes the last item on the list but if you input 'remove number' it removes the item with that number in the list."];

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
  else if (text.toLocaleLowerCase().trim().slice(0,4)==='edit'){
    edit(text);
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
*Shows a list of all available commands
*
*
* @returns {void}
*/
function help(){
  for (var i=0;i<h.length;i++){
    console.log( "* "+h[i]+"\n")
}
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
*Removes a task from the list accordingly!
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
*Edits a task from the list accordingly!
*
* @returns {void}
*/
function edit(x){
  if(x.trim()==='edit'){
    console.log("Please enter a value to be edited!")
    console.log("Note that 'edit new text' will change the last task to new text\nWhile for example 'edit 1 new text' should change the task 1 to new text!")
  }
  else if (typeof parseInt(x[5])=="number"){
    console.log("You've changed the last task in the list to: "+x.slice(5,x.length));
    console.log("use the list command to view the new list :D");
    listy.splice(-1,1,x.slice(5,x.length));
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
