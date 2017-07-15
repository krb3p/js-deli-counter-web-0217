
function takeANumber(line, person) {
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line){
  if(line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    let person = line.shift()
    return `Currently serving ${person}.`
  }
}

function currentLine(line) {
  let numbersAndNames = []
  for(let i = 0; i < line.length; i++) {
   numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }
  if(!line.length) {
    return "The line is currently empty."
  }
  else {
    return `The line is currently: ${numbersAndNames.join(', ')}`
  }
}
