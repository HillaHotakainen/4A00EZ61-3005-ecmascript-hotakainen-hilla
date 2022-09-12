var myFunc = new Function("", 'console.log("hello")');
myFunc.call();
// myFunc.call() calls myFunc variable, that creates new function that includes empty string ("" part)
// and string with console.log("hello")
//.call() part calls the stuff inside the new function (), it does not treat the 'console.log("hello")' as string?
// instead it does it (prints hello), idk how to explain brain too smooth
