// Get references to the input element and output div
const textInput : HTMLInputElement = document.getElementById('textInput') as HTMLInputElement;
const processButton : HTMLButtonElement = document.getElementById('processButton') as HTMLButtonElement;
const outputDiv : HTMLDivElement = document.getElementById('output') as HTMLDivElement;

// Add event listener to the process button
processButton.addEventListener('click', () => {
    const inputText = textInput.value;
    //const processedText : string = new Game().display();
    //outputDiv.textContent = processedText;
})
