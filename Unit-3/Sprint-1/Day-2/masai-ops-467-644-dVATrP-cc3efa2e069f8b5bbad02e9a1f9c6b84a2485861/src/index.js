function studentData(firstName, lastName, age, marksArray, ...hobbies) {
  return {
    fullName: `${firstName} ${lastName}`,
    age,
    marksArray,
    hobbies,
    getInfo: function () {
      return `${firstName} ${lastName}'s age is ${age}.`
    },
    getResult: function () {
      let sum = 0;
      let count = 0;
      for (let i = 0; i < this.marksArray.length; i++) {
        sum += this.marksArray[i];
        count++;
      }
      let avg = sum / count;
      if (avg < 50) {
        return 'Result: FAIL';
      } else if (avg >= 50) {
        return 'Result: PASS';
      }
    }
  }
}

studentData('Vivek', 'Agarwal', 38, [50, 60, 70], 'Singing', 'Coding', 'Meditating');
export {
  studentData
}