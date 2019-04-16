// Update the following function to take an argument and output 'Even' if the argument is an even number or 'Odd' if the number is an odd number.

function oddOrEven(num){
  if(Number.isInteger(num/2)===true){
    console.log("Even")
  } else {
    console.log("Odd")
  }
}

oddOrEven(4)
oddOrEven(11)
oddOrEven(75)
