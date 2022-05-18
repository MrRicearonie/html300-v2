// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){
  let userCreatedArray = new Array()

  // Find each of the forms we have
  const squareForm = document.querySelector('#form-1')
  const secretNumbersForm = document.querySelector('#form-2')
  const createArrayForm = document.querySelector('#form-3')
  const mathArrayForm = document.querySelector('#form-4')

  // Take in user input, and square them
  // Uses the every and map methods from ES6+
  squareForm.addEventListener('submit', event => {
    // Stop form from submitting to a server
    event.preventDefault()
    const output = document.querySelector('#form-1 .output')

    // Get user input and create an array
    const inputField = document.querySelector('#form-1 .input')
    const userInput = inputField.value
    const userArray = userInput.split(' ')

    // Make sure that the user only inputted numbers
    if (userArray.every(element => {return !isNaN(element)})) {
      // Square each number in the user array
      const squaredArray = userArray.map(value => {
        return value = value**2
      })

      //Output the squared values to the page
      output.innerHTML = `The numbers submitted squared are: ${squaredArray}`
    } else {
      output.innerHTML = `Your input '${userInput}' contains something that is not a number. Please try again.`
    }

    // Clear the input feild so user can try again
    inputField.value = ''
  })

  // Take in a number and check to see if it's in my array
  // Uses the find method from ES6+
  secretNumbersForm.addEventListener('submit', event => {
    // Stop form from trying to submit to a server
    event.preventDefault()
    const output = document.querySelector('#form-2 .output')
    const secretNumbers = [1, 23, 45, 4, 32]

    //Get the user input
    const inputField = document.querySelector('#form-2 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If user input is a number, continue
    if (!isNaN(userNumber)) {

      // Check if it is in the number range. If so, then check if number is in the secret array
      if (userNumber > 50) {
        output.innerHTML = `${userNumber} is larger than 50, please try again.`
      } else if (secretNumbers.find(value => {return value === userNumber})) {
        output.innerHTML = `${userNumber} is one of the secret numbers! Congrats!`
      } else {
        output.innerHTML = `${userNumber} is not one of the secret numbers. Better luck next time.`
      }
    } else {
      output.innerHTML = `${userInput} is not a number, please try again.`
    }

    // Clear the unput feild
    inputField.value = ''
  })

  // Take the user input and create an array for the next form
  // Uses the fill method from ES6+
  createArrayForm.addEventListener('submit', event => {
    // Prevent form from submitting
    event.preventDefault()
    const output = document.querySelector('#form-3 .output')

    // Get user inputs
    const inputFeildSize = document.querySelector('#form-3 .input-long')
    const inputFeildFill = document.querySelector('#form-3 .input-fill')
    const userInputSize = inputFeildSize.value
    const userInputFill = inputFeildFill.value
    const userSize = parseInt(userInputSize)
    const userFill = parseInt(userInputFill)

    // Make sure each input is a number
    if (!isNaN(userSize) && !isNaN(userFill)) {
      if (userSize > 0) {
        userCreatedArray = new Array(userSize)
        userCreatedArray.fill(userFill)
  
        output.innerHTML = `Created array is now ${userCreatedArray}`
        mathArrayForm.classList.remove('hidden')
        document.querySelector('#form-3 .submit').value = `Refresh Array`
        document.querySelector('#form-4 .output').innerHTML = `<br/>`
      } else {
        output.innerHTML = `Please enter only positive numbers above 0 for the array size`
      }
    } else {
      output.innerHTML = `Please only input numbers`
      mathArrayForm.classList.add('hidden')
    }
  })

  // Multiply the index by the number inputted then add to the number at that spot. Add all elements together
  // Uses the forEach and reduce methods from ES6+
  mathArrayForm.addEventListener('submit', event => {
    // Prevent form from submitting
    event.preventDefault()
    const output = document.querySelector('#form-4 .output')
    let newUserCreatedArray = new Array()

    // Get the user's input
    const inputFeild = document.querySelector('#form-4 .input')
    const userInput = parseInt(inputFeild.value)

    // Check if user input is a number
    if (!isNaN(userInput)) {
      // Take value, add index+(index*userInput) and console log it
      userCreatedArray.forEach((value, key) => {
        console.log(value + key + (key * userInput))
        newUserCreatedArray.push(value + key + (key * userInput))
      })

      // Replace the user created array with the new array, add the elements together
      userCreatedArray = newUserCreatedArray
      const sum = userCreatedArray.reduce((sum, value) => {return sum + value})
      output.innerHTML = `Each number of the array has the index+(index*input) added to it, so now its: ${userCreatedArray}<br>When added together they equal: ${sum}`
      document.querySelector('#form-4 .submit').value = `Do the Math!`
    } else {
      output.innerHTML = `Please enter a number`
    }

    // Clear the user input feild
    inputFeild.value = ''
  })
})
