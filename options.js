// Copyright (c) 2014 The Chromebleed Contributors. All rights reserved.

/*
 Grays out or [whatever the opposite of graying out is called] the option
 field.
 */
function ghost(isDeactivated) {
    options.style.color = isDeactivated ? 'graytext' : 'black';
    // The label color.
}

window.addEventListener('load', function() {
    // Initialize the option controls.
    options.isActivated.checked = JSON.parse(localStorage.isActivated);
    options.isShowingAll.checked = JSON.parse(localStorage.isShowingAll);

    if (!options.isActivated.checked) {
        ghost(true);
    }

    // Set the display activation
    options.isActivated.onchange = function() {
        localStorage.isActivated = options.isActivated.checked;
        ghost(!options.isActivated.checked);
        console.log("isActivated:" + options.isActivated.checked);
    };
    // Set the showing of domains that seem Ok
    options.isShowingAll.onchange = function() {
        localStorage.isShowingAll = options.isShowingAll.checked;
        console.log("isShowingAll:" + options.isShowingAll.checked);
    };

});