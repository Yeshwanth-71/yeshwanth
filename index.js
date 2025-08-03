function filterSelection(category) {
    var items = document.querySelectorAll('.card');
    items.forEach(function(item) {
      if (category === "all" || item.dataset.name === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
  filterSelection("all");
  
  
  

  