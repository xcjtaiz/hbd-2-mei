document.addEventListener('DOMContentLoaded', function () {
    const output = document.getElementById('output');
    const button = document.getElementById('button');
    const additionalButton = document.getElementById('additionalButton');
    const customPopup = document.getElementById('customPopup');
  
    let count = 0;
    let isGameOver = false;
    let isCustomPopupOpen = false;
  
    button.addEventListener('click', handleButtonClick);
    additionalButton.addEventListener('click', handleAdditionalButtonClick);
  
    function handleButtonClick() {
      if (count < 20 && !isGameOver) {
        count++;
        button.textContent = `Days ${count}`;
      }
  
      if (count === 20) {
        isGameOver = true;
        output.textContent = 'HAPPY BIRTHDAY TO MEI!, Congrats to level up to AR24';
        button.disabled = true;
        additionalButton.style.display = 'block';
      }
    }
  
    function handleAdditionalButtonClick() {
      isCustomPopupOpen = true;
      customPopup.style.display = 'block';
    }
  
    function closeCustomPopup() {
        var customPopup = document.getElementById('customPopup');
        customPopup.style.display = 'none';
        window.scrollTo(0, 0);

    }
  });
  