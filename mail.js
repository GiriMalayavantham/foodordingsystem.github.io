const firebaseConfig = {
    apiKey: "AIzaSyBw0ywyOOdvojqXSoHRPZG7YRxA0fnKGtc",
    authDomain: "orderform-5150c.firebaseapp.com",
    databaseURL: "https://orderform-5150c-default-rtdb.firebaseio.com",
    projectId: "orderform-5150c",
    storageBucket: "orderform-5150c.appspot.com",
    messagingSenderId: "452372416480",
    appId: "1:452372416480:web:f310e4eaaeed60ad730d85"
  };
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var contact = getElementVal("contact");
    var items = getElementVal("items");
    var additionalfood = getElementVal("additionalfood");
    var quantity = getElementVal("quantity");
    var dateandtime = getElementVal("dateandtime");
    var address = getElementVal("address");
    var msgContent = getElementVal("msgContent");
    
  
    saveMessages(name, contact,items,additionalfood,quantity,dateandtime,address, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, contact,items,additionalfood,quantity,dateandtime,address, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      contact: contact,
      items: items,
      additionalfood: additionalfood,
      quantity: quantity,
      dateandtime: dateandtime,
      address: address,
      msgContent: msgContent,
      

    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  