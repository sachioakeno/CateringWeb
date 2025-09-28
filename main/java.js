       // Menentukan apakah promo aktif atau tidak
       let promoActive = false;

       // Mengambil elemen tombol promo
// Fungsi untuk mengaktifkan atau menonaktifkan promo
function togglePromo(event) {
    // Mencegah perilaku default dari tautan
    event.preventDefault();

    const promoPrices = document.querySelectorAll('.promo-price');
    const originalPrices = document.querySelectorAll('.original-price');

    // Jika promo aktif, kembalikan harga ke nilai aslinya
    if (promoActive) {
        originalPrices.forEach((price, index) => {
            price.style.textDecoration = 'none';
            promoPrices[index].style.display = 'none';
        });
        promoActive = false;
    } else { // Jika promo tidak aktif, terapkan harga promo
        originalPrices.forEach((price, index) => {
            price.style.textDecoration = 'line-through';
            promoPrices[index].style.display = 'block';
        });
        promoActive = true;
    }
}

// Mengambil elemen tombol promo
const promoButton = document.getElementById('promo-btn');

// Tambahkan event listener untuk tombol promo
promoButton.addEventListener('click', togglePromo);

function validateForm() {
    // Get form elements
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var address = document.getElementById('address').value.trim();
    var gender = document.getElementById('gender').value;
    var birthdate = document.getElementById('birthdate').value;
    var privacy = document.getElementById('privacy').checked;

    // Validation flags
    var isValid = true;
    var errorMessage = "";

    // Validate name (must not be empty)
    if (name === "") {
        isValid = false;
        errorMessage += "Name is required.\n";
    }

    // Validate email (must contain "@" and ".")
    if (email === "" || !email.includes("@") || !email.includes(".")) {
        isValid = false;
        errorMessage += "Please enter a valid email.\n";
    }

    // Validate address (must not be empty)
    if (address === "") {
        isValid = false;
        errorMessage += "Address is required.\n";
    }

    // Validate gender (must select an option)
    if (gender === "") {
        isValid = false;
        errorMessage += "Please select a gender.\n";
    }

    // Validate birthdate (must not be empty)
    if (birthdate === "") {
        isValid = false;
        errorMessage += "Date of birth is required.\n";
    }

    // Validate privacy policy checkbox
    if (!privacy) {
        isValid = false;
        errorMessage += "You must agree to the privacy policy.\n";
    }

    // If the form is invalid, show alert with error messages
    if (!isValid) {
        alert(errorMessage);
    }

    return isValid;
}


