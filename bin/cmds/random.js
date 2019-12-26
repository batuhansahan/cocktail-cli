const ora = require('ora')
const getRandom = require('../utils/random')

module.exports = async (args) => {
  const spinner = ora().start()
  try {
    const result = await getRandom()
    spinner.stop()
    const result2 = result.drinks[0]
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
      if(result.drinks[0][`strIngredient${i}`]===null){
        break
      }else{
        console.log(i+"."+result.drinks[0][`strIngredient${i}`] +": "+result.drinks[0][`strMeasure${i}`])
      }
    }

    console.groupEnd();
    console.log(`\b`)
    console.log("= Image: "+result2.strDrinkThumb)

  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}