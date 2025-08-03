// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLeft = document.querySelector('.nav-left');

hamburger.addEventListener('click', () => {
  navLeft.classList.toggle('active');
});

// Popup booking logic
const popupForm = document.getElementById('popupForm');
const form = document.getElementById('bookingForm');
const formTitle = document.getElementById('formTitle');
const dateInput = document.getElementById('dateInput');

// Open popup with dynamic content
function openPopup(type) {
  popupForm.classList.remove('hidden');
  form.reset();
  formTitle.textContent = type === 'daily' ? 'Book Daily Jar Delivery' : 'Book Event/Bulk Order';
  dateInput.placeholder = type === 'daily' ? 'Start Date' : 'Event Date';
  form.dataset.type = type;
}

// Close popup
function closePopup() {
  popupForm.classList.add('hidden');
}

// Form submission handler
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const data = new FormData(form);
  const type = form.dataset.type;

  const message =
    `*${type === 'daily' ? 'Daily Jar Delivery Booking' : 'Event/Bulk Order Booking'}*\n` +
    `Name: ${data.get('name')}\n` +
    `Mobile: ${data.get('mobile')}\n` +
    `${type === 'daily' ? 'Start Date' : 'Event Date'}: ${data.get('date')}\n` +
    `Jars: ${data.get('quantity')}\n` +
    `Address: ${data.get('address')}\n` +
    `Preferred Time: ${data.get('time')}`;

  const encodedMsg = encodeURIComponent(message);
  window.open(`https://wa.me/919765548535?text=${encodedMsg}`, '_blank');
  closePopup();
});

// Attach event to buttons based on index (or use data-type instead for better control)
document.querySelectorAll('.service-card .book-btn').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (index === 0) openPopup('daily');
    else if (index === 1) openPopup('event');
  });
});
