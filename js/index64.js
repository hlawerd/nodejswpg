let name  = null;

let msg = (name === null) ? `Please input a valid name` : `Your name is ${name}`;

console.log(msg);

/* other form to make it */
  if (name) {
    console.log('Your name is: ' + name);
  } else {
    console.log('Please input your name');  
  }