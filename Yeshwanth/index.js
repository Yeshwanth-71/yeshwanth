document.addEventListener('DOMContentLoaded', () => {
  // Show all items by default when page loads
  filterImages('all');
});

function filterImages(category) {
  const items = document.querySelectorAll('.filter-item');
  
  // Loop through all items and display based on category
  items.forEach(item => {
    // If the selected category is 'all', show all items
    if (category === 'all' || item.getAttribute('data-category') === category) {
      item.style.display = 'block'; // Show the item
    } else {
      item.style.display = 'none'; // Hide the item
    }
  });

  // Update active button style
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('btn-primary'));
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.add('btn-secondary'));
  document.querySelector(`button[onclick="filterImages('${category}')"]`).classList.remove('btn-secondary');
  document.querySelector(`button[onclick="filterImages('${category}')"]`).classList.add('btn-primary');
}
