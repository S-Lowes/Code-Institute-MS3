// ===== INGREDIENTS VARIABLES =====

var ingredient = document.getElementById('ingredient');
var measurement = document.getElementById('measurement');
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
    newField1.setAttribute('name', 'survey_options[]');
    newField1.setAttribute('class', 'survey_options[] form-control');
    newField1.setAttribute('placeholder', 'What ingredient?');
    ingredient.appendChild(newField1);

    var newField2 = document.createElement('input');
    newField2.setAttribute('type', 'text');
    newField2.setAttribute('name', 'survey_options[]');
    newField2.setAttribute('class', 'survey_options[] form-control');
    newField2.setAttribute('placeholder', 'How Much?');
    measurement.appendChild(newField2);

}

remove_ingredients.onclick = function () {
    var ingredient_tags = ingredient.getElementsByTagName('input');
    var measurement_tags = measurement.getElementsByTagName('input');
    if (ingredient_tags.length == 1 && measurement_tags.length == 1) {

    } else {
        ingredient.removeChild(ingredient_tags[(ingredient_tags.length) - 1]);
        measurement.removeChild(measurement_tags[(measurement_tags.length) - 1]);
    }
}

// ===== ADD STEPS =====

add_step.onclick = function () {
    var newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('name', 'survey_options[]');
    newField.setAttribute('class', 'form-control');
    newField.setAttribute('placeholder', 'Step');
    step.appendChild(newField);
}

remove_step.onclick = function () {
    var step_tags = step.getElementsByTagName('input');
    if (step_tags.length == 1) {

    } else {
        step.removeChild(step_tags[(step_tags.length) - 1]);
    }
}

//https://www.youtube.com/watch?v=MLBLsxcB3Dc