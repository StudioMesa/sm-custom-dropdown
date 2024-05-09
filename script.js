document.addEventListener('DOMContentLoaded', function() {
  const select = document.getElementById('filter-select-wrap');
  const trigger = select.querySelector('.select-trigger');
  const options = select.querySelectorAll('.option');

  // Toggle dropdown
  trigger.addEventListener('click', function() {
    select.classList.toggle('open');
    select.querySelector('.filter-select').style.display = select.classList.contains('open') ? 'block' : 'none';
  });

  // Option click
  options.forEach(option => {
    option.addEventListener('click', function() {
      trigger.textContent = this.textContent;
      select.classList.remove('open');
      select.querySelector('.filter-select').style.display = 'none';
    });
  });

  // Click outside to close
  document.addEventListener('click', function(e) {
    if (!select.contains(e.target)) {
      select.classList.remove('open');
      select.querySelector('.filter-select').style.display = 'none';
    }
  });
});
