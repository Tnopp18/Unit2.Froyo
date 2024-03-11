//Make a prompt user can input 
const input = prompt(
    "Please enter your Froyo order here seperate each order by commas"
)

//Split the string into an array of strings
const uniqueFlavors = input.split(", ")

//add inputs into an array to check flavors and amount
const flavors = (array) => {
    const objFlavors = {}
    for(let i=0; i < array.length; i++){
        //if the flavor exist add if not make new flavor
        if(!objFlavors[array[i]]){
                objFlavors[array[i]] = 1
                // adds new flavor and amount
            } else {
                objFlavors[array[i]]++
            }
        }
        // return until all flavors are added
            return objFlavors
}

//show all added flavors and the values in table
console.table(flavors(uniqueFlavors))
 