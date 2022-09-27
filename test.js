function newNums(){
  let newNums = []
  for (let i = 0; i < 15; i++){
    let num = Math.floor(Math.random()*100) 
    if (!newNums.includes(num)) {
      newNums.push(num)
    } else {
      i--
    }
    newNums.sort((a, b) => a - b)
  }
  console.log(newNums)
}

newNums()