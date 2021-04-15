var ingredient = document.getElementById('ingredient');
var measurement = document.getElementById('measurement');
var add_more_fields = document.getElementById('add_more_fields');
var remove_fields = document.getElementById('remove_fields');

add_more_fields.onclick = function () {
    var newField1 = document.createElement('input');
    newField1.setAttribute('type', 'text');
    newField1.setAttribute('name', 'survey_options[]');
    newField1.setAttribute('class', 'survey_options[]');
    newField1.setAttribute('placeholder', 'Another Field');
    ingredient.appendChild(newField1);

    var newField2 = document.createElement('input');
    newField2.setAttribute('type', 'text');
    newField2.setAttribute('name', 'survey_options[]');
    newField2.setAttribute('class', 'survey_options[]');
    newField2.setAttribute('placeholder', 'Another Field');
    measurement.appendChild(newField2);

}

remove_fields.onclick = function () {
    var ingredient_tags = ingredient.getElementsByTagName('input');
    var measurement_tags = measurement.getElementsByTagName('input');
    if (ingredient_tags.length == 1 && measurement_tags.length == 1) {

    } else {
        ingredient.removeChild(ingredient_tags[(ingredient_tags.length) - 1]);
        measurement.removeChild(measurement_tags[(measurement_tags.length) - 1]);
    }
}

//https://www.youtube.com/watch?v=MLBLsxcB3Dc