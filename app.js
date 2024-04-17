'use strict';

const calculateAge = function () {
  const dobInput = document.getElementById('dob');
  const calculateBtn = document.getElementById('calculate-btn');
  const resultDiv = document.getElementById('result');

  calculateBtn.addEventListener('click', function () {
    const dob = new Date(dobInput.value);
    const ageInMinutes = Date.now() - dob.getTime();
    const ageDate = new Date(ageInMinutes);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    resultDiv.textContent = `You are ${age} year${age !== 1 ? 's' : ''} old`;
  });
};

calculateAge();
