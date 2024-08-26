document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const usernameInput = document.querySelector('input[name="username"]');
    const passwordInput = document.querySelector('input[name="password"]');

    form.addEventListener('submit', function (event) {
        let valid = true;

        // Validasi untuk username
        if (usernameInput.value.trim() === '') {
            alert('Please enter your username.');
            usernameInput.focus();
            valid = false;
        }

        // Validasi untuk password
        if (passwordInput.value.trim() === '') {
            alert('Please enter your password.');
            passwordInput.focus();
            valid = false;
        }

        // Jika ada kesalahan, cegah pengiriman form
        if (!valid) {
            event.preventDefault();
        }
    });
});
