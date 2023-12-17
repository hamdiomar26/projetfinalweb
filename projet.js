document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!/^[A-Za-z]+$/.test(nom)) {
      alert('Please enter a valid nom without numeric characters.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!message) {
      alert('Please enter a message.');
      return;
    }

    // Display the notification and delay the form reset and notification removal
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
        form.reset(); 
    }, 3000); // 3000 milliseconds delay
});