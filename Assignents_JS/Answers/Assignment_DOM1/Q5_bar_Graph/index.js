function parseScores(scoresString) {
   // TODO: Compete the function
   return scoresString.trim().split(' ')
}

function buildDistributionArray(scoresArray) {
   // TODO: Compete the function
   let resultGrade = [0, 0, 0, 0, 0]
   scoresArray.forEach(element => {
      element = parseFloat(element)
      if (element >= 90) {
         resultGrade[0] = resultGrade[0] + 1
      } else if (80 <= element && element <= 89) {
         resultGrade[1] = resultGrade[1] + 1
      } else if (70 <= element && element <= 79) {
         resultGrade[2] = resultGrade[2] + 1
      } else if (60 <= element && element <= 69) {
         resultGrade[3] = resultGrade[3] + 1
      } else {
         resultGrade[4] = resultGrade[4] + 1
      }
   });
   return resultGrade
}

// function createBarElement(i, e) {
//    let bar = document.createElement("div");
//    bar.classList.add(`bar${i}`)
//    bar.style.height = `${e * 10}px`
//    return bar
// }

function setTableContent(userInput) {
   // TODO: Compete the function
   let scoreList = parseScores(userInput)
   let gradeList = buildDistributionArray(scoreList)

   // let firstRowData = document.getElementById('firstRow')
   let thirdRowData = document.getElementById('thirdRow')

   for (let i = 0; i < gradeList.length; i++) {
      const element = gradeList[i];
      let elementData = document.getElementsByClassName(`bar${i}`)
      elementData[0].style.height = `${element * 10}px`

      // let firstRowCell = document.createElement("td");
      // firstRowCell.innerHTML = {`<div style="height: ${element * 10}px;" class="bar${i}"></div>`};
      // firstRowData.appendChild(firstRowCell)

      let newCell = document.createElement("td");
      newCell.textContent = element;
      thirdRowData.appendChild(newCell)
   }
}

// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");