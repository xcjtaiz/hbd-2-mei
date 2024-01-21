document.addEventListener('DOMContentLoaded', function () {

    const imageUrls = [
        'pic/2.png',
        'pic/3.png',
        'pic/4.png',
        'pic/5.png',
        // เพิ่ม URL ของรูปภาพเพิ่มเติมตามต้องการ
      ];

    const output = document.getElementById('output');
    const button = document.getElementById('button');
    const additionalButton = document.getElementById('additionalButton');
    const customPopup = document.getElementById('customPopup');
    const faruzanImage = document.querySelector('.faruzan');

    
    let count = 0;
    let isGameOver = false;
    let isCustomPopupOpen = false;
  
    button.addEventListener('click', handleButtonClick);
    additionalButton.addEventListener('click', handleAdditionalButtonClick);
  
    function handleButtonClick() {
      if (count < 20 && !isGameOver) {
        count++;
        output.textContent = '*'.repeat(count+1);
        button.textContent = `Days ${count} January`;

        const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        faruzanImage.src = randomImageUrl;
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
  