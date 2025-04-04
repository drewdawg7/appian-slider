let componentState = {
    input: "",
    min: 0,
    max: 100,
};

Appian.Component.onNewValue(function (newValues) {

    componentState.input = newValues.input;
    componentState.min = newValues.min;
    componentState.max = newValues.max;

    const container = document.getElementById("slide-container");
    container.innerHTML = "";

    const rangeSlider = document.createElement("input");
    rangeSlider.type = "range";
    rangeSlider.min = componentState.min;
    rangeSlider.max = componentState.max;
    rangeSlider.value = componentState.input;

    rangeSlider.addEventListener("input", function (e) {
        componentState.input = e.target.value;
        Appian.Component.saveValue("input", componentState.input);
    });

    container.appendChild(rangeSlider);
});
