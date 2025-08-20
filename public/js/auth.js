document.addEventListener('DOMContentLoaded', () => {
  // Toggle password visibility
  const pwToggles = document.querySelectorAll('.toggle-password');
  pwToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const input = document.querySelector(toggle.dataset.toggle);
      if (input.type === 'password') {
        input.type = 'text';
        toggle.textContent = '🙈';
      } else {
        input.type = 'password';
        toggle.textContent = '👁️';
      }
    });
  });

  // Simple form validation feedback
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      const inputs = form.querySelectorAll('input[required]');
      let valid = true;
      inputs.forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          input.style.border = '2px solid #f44336';
        } else {
          input.style.border = 'none';
        }
      });
      if (!valid) {
        e.preventDefault();
      }
    });
  });
});
