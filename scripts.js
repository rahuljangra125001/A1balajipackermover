// Function to toggle details
function toggleDetails(id) {
  const contentBox = document.querySelector(`#content-${id}`);
  const detailsBox = document.querySelector(`#details-${id}`);

  if (detailsBox.style.display === "block") {
    detailsBox.style.display = "none";
    contentBox.style.display = "block";
  } else {
    document.querySelectorAll('.content-box').forEach(box => box.style.display = "block");
    document.querySelectorAll('.details-box').forEach(box => box.style.display = "none");
    contentBox.style.display = "none";
    detailsBox.style.display = "block";
  }
}

function toggleDetail(id) {
  var details = document.getElementById(id);
  if (details.classList.contains('hidden')) {
    details.classList.remove('hidden');
  } else {
    details.classList.add('hidden');
  }
}


// Your web app's Firebase configuration
import { db } from './firebaseConfig.js';
import { collection, addDoc } from "firebase/firestore";

// Handle Quote Form Submission
document.getElementById('quoteForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: e.target.name.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        services: Array.from(e.target.service).filter(s => s.checked).map(s => s.value),
        from: e.target.from.value,
        to: e.target.to.value,
        message: e.target.message.value,
        timestamp: new Date()
    };

    try {
        await addDoc(collection(db, "quote_requests"), formData);
        alert("Quote Request Submitted Successfully!");
        e.target.reset();
    } catch (error) {
        console.error("Failed to send quote request:", error);
        alert("Failed to submit request.");
    }
});

// Handle Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const contactData = {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
        timestamp: new Date()
    };

    try {
        await addDoc(collection(db, "contact_requests"), contactData);
        alert("Message Sent Successfully!");
        e.target.reset();
    } catch (error) {
        console.error("Failed to send message:", error);
        alert("Failed to send your message.");
    }
});
