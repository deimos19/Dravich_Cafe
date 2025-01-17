let currentPage = 1;
const totalPages = 3;

function showPage(pageNumber) {
  // Hide all pages
  for (let i = 1; i <= totalPages; i++) {
    document.getElementById(`page${i}`).style.display = 'none';
  }

  // Show the current page
  document.getElementById(`page${pageNumber}`).style.display = 'block';
}

function changePage(direction) {
  currentPage += direction;

  if (currentPage < 1) {
    currentPage = totalPages;
  } else if (currentPage > totalPages) {
    currentPage = 1;
  }

  showPage(currentPage);
}

// Initialize the menu
showPage(currentPage);
