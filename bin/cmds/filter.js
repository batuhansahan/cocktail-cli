const ora = require("ora");
const getFilter = require("../utils/filter");

module.exports = async args => {
  const spinner = ora().start();
  try {
    if (args._[1] === undefined) {
      console.log('Type drink name like: cocktail name "margarita"');
      spinner.stop();
    } else {
      const result = await getFilter(args._[1]);
      if (result.drinks == null) {
        console.log("We couldn't find");
        spinner.stop();
      } else {
        spinner.stop();
        result.drinks.forEach(result2 => {

          console.group(`= Specs`);
          console.log(`Name: ${result2.strDrink}`)
          console.log(`Category: ${result2.strCategory}`)
          console.log(`Alcohol status: ${result2.strAlcoholic}`)
          console.log(`Glass Type: ${result2.strGlass}`)
          console.groupEnd();
          console.log(`\b`)
          console.group('= How to make it');
          console.log(`Instruction: ${result2.strInstructions}`)
          console.groupEnd();
          console.log(`\b`)
          console.group('= Ingredients');
          for(let i=1;i<15;i++){
            if(result2[`strIngredient${i}`]===null){
              break
            }else{
              console.log(i+"."+result2[`strIngredient${i}`] +": "+result2[`strMeasure${i}`])
            }
          }
          
          console.groupEnd();
          console.log(`\b`)
          console.log("= Image: "+result2.strDrinkThumb)
          console.log(`\b`)
          console.log("************************************************* ")
          console.log(`\b`)
        })
      }
    }
  } catch (err) {
    spinner.stop();

    console.error(err);
  }
};
