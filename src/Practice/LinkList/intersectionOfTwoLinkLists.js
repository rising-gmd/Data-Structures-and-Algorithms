class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/*-----------------------Solution using Two For Loops------------- */
// function getIntesectionNode(listOne, listTwo) {

//   while (listOne !== null) {

//     let temp = listTwo;

//     while (temp !== null) {

//       if (listOne.data === temp.data) {
//         return listOne;
//       }

//       temp = temp.next;
//     }

//     listOne = listOne.next;
//   }

//   return null;
// }

/*----------------Using Hashmaps-------------- */
function getIntesectionNode(listOne, listTwo) {

  const listMap = new Map();

  while (listOne !== null) {
    listMap.set(listOne.data, listOne.data);
    listOne = listOne.next;
  }

  while (listTwo !== null) {
    if (listMap.has(listTwo.data) === true) {
      return listTwo;
    }
    listTwo = listTwo.next;
  }

  return null;
}

/* Making of a linklist */

let newNode = new Node();

const listOne = new Node();
listOne.data = 10;

const listTwo = new Node();
listTwo.data = 3;

newNode = new Node();
newNode.data = 6;
listTwo.next = newNode;

newNode = new Node();
newNode.data = 9;
listTwo.next.next = newNode;

newNode = new Node();
newNode.data = 15;
listOne.next = newNode;
listTwo.next.next.next = newNode;

newNode = new Node();
newNode.data = 30;
listOne.next.next = newNode;

listOne.next.next.next = null;


/*----------------Main Code----------------*/
let intersectionPoint = getIntesectionNode(listOne, listTwo);

if (!intersectionPoint) console.log(" No Y Point");
else console.log(intersectionPoint.data);

