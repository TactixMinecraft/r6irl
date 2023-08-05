var operators = [
    {name: 'Flash', role: 'Defense'},
    {name: 'Ring', role: 'Attacker'},
    {name: 'Alarm', role: 'Defense'},
    {name: 'Ghost', role: 'Unknown'}
];

var weapons = [
    {name: 'Retaliator', type: 'Assault Rifle', attachments: {sight: ['Medium', 'Sniper', 'Bullet', 'Night vision', 'Handle'], barrel: ['Tactical', 'Short', 'Long', 'Handle', 'Stand'], stock: ['Tactical', 'Long', 'Utility']}},
    {name: 'Recon MKlll', type: 'SMG', attachments: {sight: ['Medium', 'Sniper', 'Bullet', 'Night vision', 'Handle'], barrel: ['Tactical', 'Short', 'Long', 'Handle', 'Stand'], stock: ['Tactical', 'Long', 'Utility']}},
    {name: 'Strongarm', type: 'Handgun', attachments: {sight: ['Medium', 'Sniper', 'Bullet', 'Night vision', 'Handle'], barrel: ['Tactical', 'Short', 'Long', 'Handle', 'Stand'], stock: ['Tactical', 'Long', 'Utility']}}
];

var currentOperatorIndex = 0;
var currentWeaponIndex = 0;

var operatorSection = document.getElementById('operatorSection');
var weaponSection = document.getElementById('weaponSection');
var attachmentsSection = document.getElementById('attachments');

var prevOperatorButton = document.getElementById('prevOperatorButton');
var nextOperatorButton = document.getElementById('nextOperatorButton');
var prevWeaponButton = document.getElementById('prevWeaponButton');
var nextWeaponButton = document.getElementById('nextWeaponButton');

prevOperatorButton.addEventListener('click', function() {
    currentOperatorIndex--;
    if(currentOperatorIndex < 0) currentOperatorIndex = operators.length - 1;
    showOperator();
});

nextOperatorButton.addEventListener('click', function() {
    currentOperatorIndex++;
    if(currentOperatorIndex >= operators.length) currentOperatorIndex = 0;
    showOperator();
});

prevWeaponButton.addEventListener('click', function() {
    currentWeaponIndex--;
    if(currentWeaponIndex < 0) currentWeaponIndex = weapons.length - 1;
    showWeapon();
});

nextWeaponButton.addEventListener('click', function() {
    currentWeaponIndex++;
    if(currentWeaponIndex >= weapons.length) currentWeaponIndex = 0;
    showWeapon();
});

function showOperator() {
    var operator = operators[currentOperatorIndex];
    operatorSection.innerHTML = '<h2>' + operator.name + '</h2><p>' + operator.role + '</p>';
}

function showWeapon() {
    var weapon = weapons[currentWeaponIndex];
    weaponSection.innerHTML = '<h2>' + weapon.name + '</h2><p>' + weapon.type + '</p>';

    attachmentsSection.innerHTML = '';
    for(var attachmentType in weapon.attachments) {
        var attachmentDiv = document.createElement('div');
        var attachmentLabel = document.createElement('h3');
        attachmentLabel.textContent = attachmentType;
        attachmentDiv.appendChild(attachmentLabel);

        var attachmentSelect = document.createElement('select');
        weapon.attachments[attachmentType].forEach(function(attachmentOption) {
            var option = document.createElement('option');
            option.text = attachmentOption;
            attachmentSelect.add(option);
        });

        attachmentDiv.appendChild(attachmentSelect);
        attachmentsSection.appendChild(attachmentDiv);
    }
}

showOperator();
showWeapon();
