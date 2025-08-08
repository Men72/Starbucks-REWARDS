function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].classList.remove("active-underline");
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
  elmnt.classList.add("active-underline");
}
    function openTab(evt, tabId) {
      // Hide all tabs
      const tabContents = document.querySelectorAll('.tabcontent');
      tabContents.forEach(tc => tc.style.display = 'none');

      // Remove 'active' from all tab buttons
      const tabButtons = document.querySelectorAll('.tablinks');
      tabButtons.forEach(btn => btn.classList.remove('active'));

      // Show selected tab
      document.getElementById(tabId).style.display = 'flex';
      evt.currentTarget.classList.add('active');
    }

    // Auto-open the first tab on page load
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelector('.tablinks.active').click();
    });

function openOffcanvasNavbar() {
  var offcanvasElement = document.getElementById('offcanvasNavbar');
  var bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
  bsOffcanvas.show();
}

// Example: Close Offcanvas Navbar programmatically
function closeOffcanvasNavbar() {
  var offcanvasElement = document.getElementById('offcanvasNavbar');
  var bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
  if (bsOffcanvas) {
    bsOffcanvas.hide();
  }
}

      const btn = document.getElementById('menu-btn')
      const nav = document.getElementById('menu')

      function navToggle() {
        btn.classList.toggle('open')
        nav.classList.toggle('hidden')
        document.body.classList.toggle('no-scroll')
      }

      btn.addEventListener('click', navToggle)
