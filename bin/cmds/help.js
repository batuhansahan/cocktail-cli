const menus = {
  main: `    
cocktail [command] [option]    
random ........... show random cocktail
name <option>..... show cocktail by name
version .......... show package version    
help <option>..... show help menu for a command`,
  random: `Type: cocktail random`,
  
  name: `Type: cocktail name "margarita"`
};

module.exports = args => {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0];
  console.log(menus[subCmd] || menus.main);
};
