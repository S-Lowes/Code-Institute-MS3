// ===== INGREDIENTS VARIABLES =====

var ingredient = document.getElementById('ingredient');
var measurement = document.getElementById('measurement');
var amount = document.getElementById('amount');
var add_more_ingredients = document.getElementById('add_more_ingredients');
var remove_ingredients = document.getElementById('remove_ingredients');

// ===== STEP VARIABLES =====

var step = document.getElementById('step');
var add_step = document.getElementById('add_step');
var remove_step = document.getElementById('remove_step');

// ===== ADD INGREDIENTS =====

add_more_ingredients.onclick = function () {
    var newField1 = document.createElement('input');
    newField1.setAttribute('type', 'text');
    newField1.setAttribute('class', 'form-control');
    newField1.setAttribute('name', 'ingredient');
    newField1.setAttribute('id', 'ingredient');
    newField1.setAttribute('placeholder', 'What ingredient?');
    newField1.setAttribute('required', '');
    ingredient.appendChild(newField1);

    var newField2 = document.createElement('input');
    newField2.setAttribute('type', 'text');
    newField2.setAttribute('class', 'form-control');
    newField2.setAttribute('name', 'amount');
    newField2.setAttribute('id', 'amount');
    newField2.setAttribute('placeholder', 'How Much?');
    newField2.setAttribute('required', '');
    amount.appendChild(newField2);

    var newField3 = document.createElement('input');
    newField3.setAttribute('type', 'text');
    newField3.setAttribute('class', 'form-control');
    newField3.setAttribute('name', 'measurement');
    newField3.setAttribute('id', 'measurement');
    newField3.setAttribute('placeholder', 'What Measure?');
    newField3.setAttribute('required', '');
    measurement.appendChild(newField3);
}

remove_ingredients.onclick = function () {
    var ingredient_tags = ingredient.getElementsByTagName('input');
    var amount_tags = amount.getElementsByTagName('input');
    var measurement_tags = measurement.getElementsByTagName('input');
    if (ingredient_tags.length == 1 && measurement_tags.length == 1 && amount_tags.length == 1) {

    } else {
        ingredient.removeChild(ingredient_tags[(ingredient_tags.length) - 1]);
        amount.removeChild(amount_tags[(amount_tags.length) - 1]);
        measurement.removeChild(measurement_tags[(measurement_tags.length) - 1]);
    }
}

// ===== ADD STEPS =====

add_step.onclick = function () {
    var newField = document.createElement('textarea');
    newField.setAttribute('type', 'text');
    newField.setAttribute('class', 'form-control');
    newField.setAttribute('name', 'step');
    newField.setAttribute('id', 'step');
    newField.setAttribute('placeholder', 'What do I do next?');
    newField.setAttribute('required', '');
    step.appendChild(newField);
}

remove_step.onclick = function () {
    var step_tags = step.getElementsByTagName('textarea');
    if (step_tags.length == 1) {

    } else {
        step.removeChild(step_tags[(step_tags.length) - 1]);
    }
}

//https://www.youtube.com/watch?v=MLBLsxcB3Dc