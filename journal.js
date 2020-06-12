console.log('it works');

// Create three arrays of objects of entries
const firstEntry = [
  {
    title: "Revenue journal",
    content: "When goods or services are sold on credit, debit accounts receivable and credit sales. If a sale is for cash, then the debit is to the cash account instead of the accounts receivable account.",
  }
];

const secondEntry = [
  {
    title: "Lorem journal",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quam illum odio consectetur quisquam, ipsum atque quidem excepturi tempora vero sint obcaecati. Eius, modi architecto quos blanditiis at illo quisquam?"
  }
];

const lastEntry = [
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

  // Create a while loop to access the entries one at a time
  while (yourOption === "1") {
    let i = 0;
    let firstTitle = firstEntry[i].title;
    let firstContent = firstEntry[i].content;
    alert(`Title: ${firstTitle} \n Content: ${firstContent}`);
    let secondTitle = secondEntry[i].title;
    let secondContent = secondEntry[i].content;
    alert(`Title:${secondTitle} \n Content:${secondContent}`);
    let lastTitle = lastEntry[i].title;
    let lastContent = lastEntry[i].content;
    alert(`Title:${lastTitle} \n Content ${lastContent}`);
    // Here we ask the user to write a new entry
    for (i = 0; i < yourOption; i++) {
    if (yourOption === "1") {
      let newTitle = prompt('Want to update your entries? Write new title');
      let newContent = prompt('And then your content');
      alert(`Title: ${newTitle} \n Content ${newContent}`);
    }
  }
  }
} myProgram();
