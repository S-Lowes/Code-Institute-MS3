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
    let input1 = `<input type="text" class="form-control" name="ingredient"
    id="ingredient" placeholder="What ingredient?" required="">`;
    ingredient.insertAdjacentHTML("beforeend", input1);

    let input2 = `<input type="text" class="form-control" name="amount"
    id="amount" placeholder="How Much?" required="">`;
    amount.insertAdjacentHTML("beforeend", input2);

    let input3 = `<input type="text" class="form-control" name="measurement"
    id="measurement" placeholder="What Measure?" required="">`;
    measurement.insertAdjacentHTML("beforeend", input3);
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

    let input4 = `<textarea type="text" class="form-control" name="step"
    id="step" placeholder="What do I do next?" required=""></textarea>`;
    step.insertAdjacentHTML("beforeend", input4);
}

remove_step.onclick = function () {
    let step_tags = step.getElementsByTagName('textarea');
    if (step_tags.length == 1) {

    } else {
        step.removeChild(step_tags[(step_tags.length) - 1]);
    }
}

//https://www.youtube.com/watch?v=MLBLsxcB3Dc