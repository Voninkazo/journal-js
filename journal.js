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
  }
];
// My program

function myProgram() {
  // Let's create a prompt in which users can choose what they want to do
  let yourOption = prompt(`Choose (1) for listing the all entries,
Choose (2) to add a new entry,
Choose (3) to quit`);

  // Here we set the conditions
  if (yourOption === "1") {
    oldEntries();
  }
  else if (yourOption === "2") {
    addingEntries();
  }
  else {
    alert('See you then!');
  }
}