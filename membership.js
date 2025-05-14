document.getElementById('membershipForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const fullName = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = parseInt(document.getElementById('age').value.trim());
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const goal = document.getElementById('goal').value;
    const plan = document.getElementById('plan').value;
  
    const messages = [];
    const errors = [];
  
    // Function to check if a gender is selected
    function isGenderSelected() {
      for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
          return true;
        }
      }
      return false;
    }
  
    // Validate Full Name
    if (fullName.length < 2) {
      errors.push("Full Name must be at least 2 characters.");
    }
  
    // Validate Email
    if (!email.includes("@")) {
      errors.push("Invalid email address.");
    }
  
    // Validate Age
    if (isNaN(age) || age < 16 || age > 100) {
      errors.push("Age must be between 16 and 100.");
    }
  
    // Validate Gender
    if (!isGenderSelected()) {
      errors.push("Please select a gender.");
    }
  
    // Validate Goal
    if (goal === "") {
      errors.push("Please select a fitness goal.");
    }
  
    // Loop Example: Display messages from an array
    if (errors.length > 0) {
      let output = "<ul>";
      for (let i = 0; i < errors.length; i++) {
        output += `<li>${errors[i]}</li>`;
      }
      output += "</ul>";
      document.getElementById('messages').innerHTML = output;
    } else {
      document.getElementById('messages').style.color = "green";
      document.getElementById('messages').innerHTML = "Form submitted successfully!";
      this.reset();
    }
  });
  