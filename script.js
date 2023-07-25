// Sample operator data (you can replace this with actual data later)
const operators = [
  { name: "Operator 1", ability: "Ability 1", gun: "Gun 1" },
  { name: "Operator 2", ability: "Ability 2", gun: "Gun 2" },
  // Add more operators here
];

const attachments = [
  "Attachment 1",
  "Attachment 2",
  // Add more attachments here
];

let currentOperatorIndex = 0;
let currentAttachmentIndex = 0;

// Function to populate the operator dropdown
function populateOperators() {
  const operatorsDropdown = document.getElementById("operators");

  operators.forEach((operator) => {
    const option = document.createElement("option");
    option.value = operator.name;
    option.textContent = operator.name;
    operatorsDropdown.appendChild(option);
  });

  // Update the operator info for the first operator
  displayOperatorInfo(currentOperatorIndex);
}

// Function to populate the attachment dropdown
function populateAttachments() {
  const attachmentsDropdown = document.getElementById("attachments");

  attachments.forEach((attachment) => {
    const option = document.createElement("option");
    option.value = attachment;
    option.textContent = attachment;
    attachmentsDropdown.appendChild(option);
  });
}

// Function to display operator information
function displayOperatorInfo(operatorIndex) {
  const operatorInfoDiv = document.getElementById("operatorInfo");

  // Find the selected operator based on its index
  const selectedOperator = operators[operatorIndex];

  // Create the operator information content
  const operatorInfoContent = `
    <h2>${selectedOperator.name}</h2>
    <p><strong>Ability:</strong> ${selectedOperator.ability}</p>
    <p><strong>Gun:</strong> ${selectedOperator.gun}</p>
  `;

  // Update the operatorInfoDiv with the new content
  operatorInfoDiv.innerHTML = operatorInfoContent;
}

// Event listeners for operator and attachment selection
document.addEventListener("DOMContentLoaded", () => {
  populateOperators();
  populateAttachments();

  const operatorsDropdown = document.getElementById("operators");
  const attachmentsDropdown = document.getElementById("attachments");

  // Operator navigation with arrow icons
  document.getElementById("prevOperator").addEventListener("click", () => {
    currentOperatorIndex = (currentOperatorIndex - 1 + operators.length) % operators.length;
    operatorsDropdown.value = operators[currentOperatorIndex].name;
    displayOperatorInfo(currentOperatorIndex);
  });

  document.getElementById("nextOperator").addEventListener("click", () => {
    currentOperatorIndex = (currentOperatorIndex + 1) % operators.length;
    operatorsDropdown.value = operators[currentOperatorIndex].name;
    displayOperatorInfo(currentOperatorIndex);
  });

  // Attachment navigation with arrow icons
  document.getElementById("prevAttachment").addEventListener("click", () => {
    currentAttachmentIndex = (currentAttachmentIndex - 1 + attachments.length) % attachments.length;
    attachmentsDropdown.value = attachments[currentAttachmentIndex];
  });

  document.getElementById("nextAttachment").addEventListener("click", () => {
    currentAttachmentIndex = (currentAttachmentIndex + 1) % attachments.length;
    attachmentsDropdown.value = attachments[currentAttachmentIndex];
  });

  // Display operator info when an operator is selected from the dropdown
  operatorsDropdown.addEventListener("change", (event) => {
    currentOperatorIndex = operators.findIndex((operator) => operator.name === event.target.value);
    displayOperatorInfo(currentOperatorIndex);
  });
});
