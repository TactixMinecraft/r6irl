// Operators and weapons data
var operators = [
    {name: 'Flash', role: 'Defense'},
    {name: 'Ring', role: 'Attacker'},
    {name: 'Ghost', role: 'Attacker'}
    {name: 'Alarm', role: 'Defense'}
];

var weapons = [
    {name: 'Retaliator', type: 'Assault Rifle', attachments: {sight: ['Medium', 'Sniper', 'Bullet', 'Night vision', 'Handle'], barrel: ['Tactical', 'Short', 'Long', 'Handle', 'Stand'], stock: ['Tactical', 'Long', 'Utility']}},
    {name: 'Recon MKlll', type: 'SMG', attachments: {sight: ['Medium', 'Sniper', 'Bullet', 'Night vision', 'Handle'], barrel: ['Tactical', 'Short', 'Long', 'Handle', 'Stand'], stock: ['Tactical', 'Long', 'Utility']}},
    {name: 'Strongarm', type: 'Pistol', attachments: {sight: ['Medium', 'Sniper', 'Bullet', 'Night vision', 'Handle'], barrel: ['Tactical', 'Short', 'Long', 'Handle', 'Stand'], stock: ['Tactical', 'Long', 'Utility']}}
];

// Initialize
var currentOperatorIndex = 0;
var currentWeaponIndex = 0;

var operatorSection = document.getElementById('operatorSection');
var weaponSection = document.getElementById('weaponSection');
var attachmentsSection = document.getElementById('attachments');

var prevOperatorButton = document.getElementById('prevOperatorButton');
var nextOperatorButton = document.getElementById('nextOperatorButton');
var prevWeaponButton = document.getElementById('prevWeaponButton');
var nextWeaponButton = document.getElementById('nextWeaponButton');
var resetButton = document.getElementById('resetButton');

// Functions to show the current operator and weapon
function showOperator() {
    var operatorInfo = document.getElementById('operatorInfo');
    var operator = operators[currentOperatorIndex];

    operatorInfo.innerHTML = `
        <h2>${operator.name}</h2>
        <p>${operator.role}</p>
    `;
}

function showWeapon() {
    var weaponInfo = document.getElementById('weaponInfo');
    var weapon = weapons[currentWeaponIndex];

    weaponInfo.innerHTML = `
        <h2>${weapon.name}</h2>
        <p>${weapon.type}</p>
    `;
}

function showAttachments() {
    var attachments = weapons[currentWeaponIndex].attachments;
    var attachmentsHTML = '';

    for (var attachmentType in attachments) {
        attachmentsHTML += `
            <div>
                <h3>${attachmentType}</h3>
                <select id="${attachmentType}">
                    ${attachments[attachmentType].map(attachment => `<option>${attachment}</option>`).join('')}
                </select>
            </div>
        `;
    }

    attachmentsSection.innerHTML = attachmentsHTML;
}

// Event listeners for the buttons
prevOperatorButton.addEventListener('click', function() {
    currentOperatorIndex--;
    if (currentOperatorIndex < 0) currentOperatorIndex = operators.length - 1;
    showOperator();
});

nextOperatorButton.addEventListener('click', function() {
    currentOperatorIndex++;
    if (currentOperatorIndex >= operators.length) currentOperatorIndex = 0;
    showOperator();
});

prevWeaponButton.addEventListener('click', function() {
    currentWeaponIndex--;
    if (currentWeaponIndex < 0) currentWeaponIndex = weapons.length - 1;
    showWeapon();
    showAttachments(); // Update attachments when weapon changes
});

nextWeaponButton.addEventListener('click', function() {
    currentWeaponIndex++;
    if (currentWeaponIndex >= weapons.length) currentWeaponIndex = 0;
    showWeapon();
    showAttachments(); // Update attachments when weapon changes
});

resetButton.addEventListener('click', function() {
    // Reset the current operator and weapon indices
    currentOperatorIndex = 0;
    currentWeaponIndex = 0;

    // Show the operator and weapon sections
    operatorSection.style.display = 'block';
    weaponSection.style.display = 'block';

    // Reset the data in the operator and weapon sections
    showOperator();
    showWeapon();
    showAttachments(); // Always show the attachments
});

// Display the first operator, weapon, and attachments when the page loads
showOperator();
showWeapon();
showAttachments();
