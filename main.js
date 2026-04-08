function handleContactForm(e) {
  e.preventDefault();
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();
  if (!name || !email || !message) {
    alert("Please fill in all fields");
    return;
  }
  alert("Message sent! Thank you for reaching out. We'll get back to you soon.");
  e.target.reset();
}
