

const firebaseConfig = {
  apiKey: "AIzaSyAvMlGgfn2eqD6ZFtwiUkXYZ8fCPTFXJ0Y",
  authDomain: "contactform-e25a9.firebaseapp.com",
  databaseURL: "https://contactform-e25a9-default-rtdb.firebaseio.com",
  projectId: "contactform-e25a9",
  storageBucket: "contactform-e25a9.appspot.com",
  messagingSenderId: "482383108431",
  appId: "1:482383108431:web:0e2c7262e3c24f8bee8d3a"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};




document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  // Check if any of the fields are empty
  if (name === "" || emailid === "" || msgContent === "") {
    // Display an error message
    document.querySelector(".error").style.display = "block";
    setTimeout(() => {
      document.querySelector(".error").style.display = "none";
    }, 3000);
    return; // Stop the submission
  }

  saveMessages(name, emailid, msgContent);

  // Enable success alert
  document.querySelector(".alert").style.display = "block";

  // Remove the success alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Reset the form
  document.getElementById("contactForm").reset();
}



