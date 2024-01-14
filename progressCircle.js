function updateProgressBar(dynamicValue) {
    let progressBar = document.querySelector(".circular-progress");
    let valueContainer = document.querySelector(".value-container");

    let progressValue = 0;
    let progressEndValue = dynamicValue;
    console.log(dynamicValue);
    let speed = 5;

    let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = `${progressValue}%`;
        progressBar.style.background = `conic-gradient(
            rgb(19 220 164) ${progressValue * 3.6}deg,
            rgb(216 255 244) ${progressValue * 3.6}deg
        )`
        
        if (progressValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}






function updateProgressBarB(dynamicValue) {
    let progressBar = document.querySelector(".circular-progress2");
    let valueContainer = document.querySelector(".value-container2");

    let progressValue = 0;
    let progressEndValue = dynamicValue;
    console.log(dynamicValue);
    let speed = 5;

    let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = `${progressValue}%`;
        progressBar.style.background = `conic-gradient(
            rgb(19 220 164) ${progressValue * 3.6}deg,
            rgb(216 255 244) ${progressValue * 3.6}deg
        )`
        
        if (progressValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}




function updateProgressBarC(dynamicValue) {
    let progressBar = document.querySelector(".circular-progress3");
    let valueContainer = document.querySelector(".value-container3");

    let progressValue = 0;
    let progressEndValue = dynamicValue;
    console.log(dynamicValue);
    let speed = 5;

    let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = `${progressValue}%`;
        progressBar.style.background = `conic-gradient(
            rgb(19 220 164) ${progressValue * 3.6}deg,
            rgb(216 255 244) ${progressValue * 3.6}deg
        )`
        
        if (progressValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}




