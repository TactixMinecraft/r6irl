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

// Function to populate the operator dropdown
function populateOperators() {
  const operatorsDropdown = document.getElementById("operators");

  operators.forEach((operator) => {
    const option = document.createElement("option");
    option.value = operator.name;
    option.textContent = operator.name;
    operatorsDropdown.appendChild(option);
  });
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
function displayOperatorInfo(operatorName) {
  const operatorInfoDiv = document.getElementById("operatorInfo");

  // Find the selected operator based on its name
  const selectedOperator = operators.find((operator) => operator.name === operatorName);

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

  document.getElementById("operators").addEventListener("change", (event) => {
    const selectedOperator = event.target.value;
    displayOperatorInfo(selectedOperator);
  });
});
