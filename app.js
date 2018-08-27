/*
  Name: A Game of Threes
  Inspiration: 
  https://www.reddit.com/r/dailyprogrammer/comments/3r7wxz/20151102_challenge_239_easy_a_game_of_threes/
*/

let num;
function gameOfTrees(number) {
  num = number;
  let temp = 0;

  while (num >= 1) {
    if (num % 3 === 0) {
      temp = num;
      num = num / 3;
      console.log(`${temp} 0`);
    } else {
      if ((num+1) % 3 ===0) {
        temp = num;
        num = (num+1) / 3;
        console.log(`${temp} +1`);
      } else if((num-1) % 3 ===0) {
        temp = num;
        num = (num-1) / 3;
        console.log(`${temp} -1`);
      } else {
        console.log('something bad happened');
      }

    }
  }
}
