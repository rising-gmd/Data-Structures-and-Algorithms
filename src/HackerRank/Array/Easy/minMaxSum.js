function miniMaxSum(arr) {
    let maxOne = 0;
    let maxTwo = 0;
    let maxThree = 0;
    let maxFour = 0;
    let minOne = Infinity;
    let minTwo = Infinity;
    let minThree = Infinity;
    let minFour = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      
      if (arr[i] > maxFour) {
        maxFour = arr[i];
        if (arr[i] > maxThree) {
          maxFour = maxThree;
          maxThree = arr[i];
          if (arr[i] > maxTwo) {
            maxThree = maxTwo;
            maxTwo = arr[i];
            if (arr[i] > maxOne) {
              maxTwo = maxOne;
              maxOne = arr[i];
            }
          }
        }
      } 
  
      if (arr[i] < minFour) {
        minFour = arr[i];
        if (arr[i] < minThree) {
          minFour = minThree;
          minThree = arr[i];
          if (arr[i] < minTwo) {
            minThree = minTwo;
            minTwo = arr[i];
            if (arr[i] < minOne) {
              minTwo = minOne;
              minOne = arr[i];
            }
          }
        }
      } 
      
    }
  
    return [minOne+minTwo+minThree+minFour, maxOne+maxTwo+maxThree+maxFour]
    
  }