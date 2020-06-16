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

function myProgram() {
  // Let's create a prompt in which users can choose what they want to do
  let yourOption = prompt(`Choose (1) for listing the all entries,
Choose (2) to add a new entry,
Choose (3) to quit,
Choose (4) to delete the last entry,
Choose (5) to delete a specific entry`);

  // Here we set the conditions
  if (yourOption === "1") {
    oldEntries();
  }
  else if (yourOption === "2") {
    addingEntries();
  }
  else if (yourOption === "4") {
    deleteJournal();
  }
  else if (yourOption === "5") {
    deleteSpecific();
  }
  else {
    alert('See you then!');
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
  } myProgram();

  function deleteJournal() {
    myEntries.pop();
  } myProgram();

  function deleteSpecific() {
    let indexNum = prompt('Which index do you want to delete?');
    if (indexNum < myEntries.length) {
      myEntries.splice(indexNum, 1);
    }
    return myEntries;
  }
} myProgram();