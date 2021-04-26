// ===== INGREDIENTS VARIABLES =====

let ingredient = document.getElementById('ingredient');
let measurement = document.getElementById('measurement');
let amount = document.getElementById('amount');
let add_more_ingredients = document.getElementById('add_more_ingredients');
let remove_ingredients = document.getElementById('remove_ingredients');

// ===== STEP VARIABLES =====

let step = document.getElementById('step');
let add_step = document.getElementById('add_step');
let remove_step = document.getElementById('remove_step');

// ===== ADD INGREDIENTS =====

add_more_ingredients.onclick = function () {
    let newField1 = document.createElement('input');
    newField1.setAttribute('type', 'text');
    newField1.setAttribute('class', 'form-control');
    newField1.setAttribute('name', 'ingredient');
    newField1.setAttribute('id', 'ingredient');
    newField1.setAttribute('placeholder', 'What ingredient?');
    newField1.setAttribute('required', '');
    ingredient.appendChild(newField1);

    let newField2 = document.createElement('input');
    newField2.setAttribute('type', 'text');
    newField2.setAttribute('class', 'form-control');
    newField2.setAttribute('name', 'amount');
    newField2.setAttribute('id', 'amount');
    newField2.setAttribute('placeholder', 'How Much?');
    newField2.setAttribute('required', '');
    amount.appendChild(newField2);

    let newField3 = document.createElement('input');
    newField3.setAttribute('type', 'text');
    newField3.setAttribute('class', 'form-control');
    newField3.setAttribute('name', 'measurement');
    newField3.setAttribute('id', 'measurement');
    newField3.setAttribute('placeholder', 'What Measure?');
    newField3.setAttribute('required', '');
    measurement.appendChild(newField3);
}

remove_ingredients.onclick = function () {
    let ingredient_tags = ingredient.getElementsByTagName('input');
    let amount_tags = amount.getElementsByTagName('input');
    let measurement_tags = measurement.getElementsByTagName('input');
    if (ingredient_tags.length == 1 && measurement_tags.length == 1 && amount_tags.length == 1) {

    } else {
        ingredient.removeChild(ingredient_tags[(ingredient_tags.length) - 1]);
        amount.removeChild(amount_tags[(amount_tags.length) - 1]);
        measurement.removeChild(measurement_tags[(measurement_tags.length) - 1]);
    }
}

// ===== ADD STEPS =====

add_step.onclick = function () {
    let newField = document.createElement('textarea');
    newField.setAttribute('type', 'text');
    newField.setAttribute('class', 'form-control');
    newField.setAttribute('name', 'step');
    newField.setAttribute('id', 'step');
    newField.setAttribute('placeholder', 'What do I do next?');
    newField.setAttribute('required', '');
    step.appendChild(newField);
}

remove_step.onclick = function () {
    let step_tags = step.getElementsByTagName('textarea');
    if (step_tags.length == 1) {

    } else {
        step.removeChild(step_tags[(step_tags.length) - 1]);
    }
}

//https://www.youtube.com/watch?v=MLBLsxcB3Dc

/*

let input = `<input type="text" class="form-control" name="ingredient" id="ingredient" placeholder="What ingredient?" required="">`;
ingredient.innerHTML = input;

let newField1 = document.createElement('input');
newField1.setAttribute('type', 'text');
newField1.setAttribute('class', 'form-control');
newField1.setAttribute('name', 'ingredient');
newField1.setAttribute('id', 'ingredient');
newField1.setAttribute('placeholder', 'What ingredient?');
newField1.setAttribute('required', '');
*/