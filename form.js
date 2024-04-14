function validateInput(input) {
  var value = input.value.trim();
  var isValid = /^[0-9][0-9]*\.?[0-9]*$/.test(value) ;

  var validationText = input.nextElementSibling;
  if (isValid) {
      input.classList.remove('is-invalid');
      validationText.classList.remove('show');
      
      return true; 
  } else {
      input.classList.add('is-invalid');
      validationText.classList.add('show');
      const targetElement = document.getElementsByClassName('input-container');

      targetElement.addEventListener('mouseover', function() {
          this.classList.add('show');
      });

      targetElement.addEventListener('mouseout', function() {
          this.classList.remove('show');
      });
      return false; 
  }
}

function validateAndCalculate() {
  var isValid = validateInput(document.getElementById('income')) &&
                validateInput(document.getElementById('eincome')) &&
                validateInput(document.getElementById('dincome'));

  if (isValid) {
      calculate(); 
  }
}

function calculate() {
  var income = parseFloat(document.getElementById('income').value) || 0;
  var eincome = parseFloat(document.getElementById('eincome').value) || 0;
  var age = document.getElementById('age').value || 1;
  var dincome = parseFloat(document.getElementById('dincome').value) || 0;

  var cal = income + eincome - dincome;
  var fincome;
  if(cal <= 800000) {
      fincome = cal;
  } else {
      if(age == 1) {
          var tax = (cal - 800000) * 0.3;
          fincome = cal - tax;
      } else if(age == 2) {
          var tax = (cal - 800000) * 0.4;
          fincome = cal - tax;
      } else {
          var tax = (cal - 800000) * 0.1;
          fincome = cal - tax;
      }
  }


  var formattedFincome = fincome.toLocaleString('en-IN');

  document.getElementById('fincome').textContent = formattedFincome;
  document.getElementById('tax-result').classList.remove('hide');
}

function closeSection() {
  document.getElementById('tax-result').classList.add('hide');
}
