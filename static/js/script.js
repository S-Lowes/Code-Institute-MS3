// ===== INGREDIENTS VARIABLES =====
let ingredients = document.getElementById('ingredients');
let measurements = document.getElementById('measurements');
let amounts = document.getElementById('amounts');
let add_more_ingredients = document.getElementById('add_more_ingredients');
let remove_ingredients = document.getElementById('remove_ingredients');

// ===== STEP VARIABLES =====

let steps = document.getElementById('steps');
let add_step = document.getElementById('add_step');
let remove_step = document.getElementById('remove_step');

// ===== ADD INGREDIENTS =====

add_more_ingredients.onclick = function () {
    let input1 = `<input type="text" class="form-control" name="ingredient"
        id="ingredient" placeholder="What ingredient?" required="">`;
    ingredients.insertAdjacentHTML("beforeend", input1);

    let input2 = `<input type="text" class="form-control" name="amount"
        id="amount" placeholder="How Much?" required="">`;
    amounts.insertAdjacentHTML("beforeend", input2);

    let input3 = `<input type="text" class="form-control" name="measurement"
        id="measurement" placeholder="What Measure?" required="">`;
    measurements.insertAdjacentHTML("beforeend", input3);
};

remove_ingredients.onclick = function () {
    let ingredient_tags = ingredients.getElementsByTagName('input');
    let amount_tags = amounts.getElementsByTagName('input');
    let measurement_tags = measurements.getElementsByTagName('input');
    if (ingredient_tags.length == 1 && measurement_tags.length == 1 &&
        amount_tags.length == 1) {

    } else {
        ingredients.removeChild(ingredient_tags[(ingredient_tags.length) - 1]);
        amounts.removeChild(amount_tags[(amount_tags.length) - 1]);
        measurements.removeChild(measurement_tags[(measurement_tags.length) - 1]);
    }
};

// ===== ADD STEPS =====

add_step.onclick = function () {

    let input4 = `<textarea class="form-control" name="step"
        id="step" placeholder="What do I do next?" required=""></textarea>`;
    steps.insertAdjacentHTML("beforeend", input4);
};

remove_step.onclick = function () {
    let step_tags = steps.getElementsByTagName('textarea');
    if (step_tags.length == 1) {

    } else {
        steps.removeChild(step_tags[(step_tags.length) - 1]);
    }
};