console.log('it works');

// Create three arrays of objects of entries
const myEntries = [
  {
    title: "Revenue journal",
    content: "When goods or services are sold on credit, debit accounts receivable and credit sales. If a sale is for cash, then the debit is to the cash account instead of the accounts receivable account.",
  },

  {
    title: "Lorem journal",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quam illum odio consectetur quisquam, ipsum atque quidem excepturi tempora vero sint obcaecati. Eius, modi architecto quos blanditiis at illo quisquam?"
  },

  {
    title: "Last journal",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quam illum odio consectetur quisquam, ipsum atque quidem excepturi tempora vero sint obcaecati. Eius, modi architecto quos blanditiis at illo quisquam?"
  },
];
// My program

let menuText = `Welcome to my journal!
Choose (1) for listing the all entries,
Choose (2) to add a new entry,
Choose (3) to quit,
Choose (4) to delete the last entry,
Choose (5) to delete a specific entry`;
// Let's create a prompt in which users can choose what they want to do
let yourOption = prompt(menuText);

// Here we set the conditions
while (yourOption !== "3") {
  switch (yourOption) {
    case 1:
      oldEntries();
      break;
    case 2:
      addingEntries();
      break;
    case 4:
      deleteJournal();
      break;
    case 5:
      deleteSpecific();
      break;
    default:
      alert(`Choose the right number(1,2,3,4,5), please`);
  }
  yourOption = prompt(menuText);
}
// Let's create a a function that containing the list of all entries
function oldEntries() {
  //Let's loop through the array of object to find all the entries
  for (let i = 0; i < myEntries.length; i++) {
    // Here we show them one at a time
    alert(`Title: ${myEntries[i].title} \n Content: ${myEntries[i].content}`);
  }
}

// Here we ask the user to write a new entry
function addingEntries() {
  let newTitle = prompt('Want to update your entries? Write new title');// New title
  let newContent = prompt('And then your content');// New content
  //This is the new object of the journal
  let newEntry = { title: newTitle, content: newContent };
  // Then we're going to push it
  myEntries.push(newEntry);
}
// Here is when you want to delete the last journal
function deleteJournal() {
  myEntries.pop();
}
// And the same but you can choose what journa you want to remove
function deleteSpecific() {
  let indexNum = prompt('Which index do you want to delete?');
  if (indexNum < myEntries.length) {
    myEntries.splice(indexNum, 1);
  }
  return myEntries;
}
// when you quit the page
alert(`See you then!`);