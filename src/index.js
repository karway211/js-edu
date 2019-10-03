/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let currentWeek = '';
      let trainingTime = 800;
      let startTrainingTime = 500;

      if(knowsProgramming) {
        currentWeek = Math.ceil(trainingTime / config[focus]);
      } else {
        currentWeek = Math.ceil((trainingTime + startTrainingTime) / config[focus]);
      }


      return currentWeek;
  };
  