function fillStar(star) {
    star.classList.toggle("filled");
    }

function menuDrop() {
  var div = document.getElementById("mob-men");
  var style = window.getComputedStyle(div);

  if (style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}
function desDrop(element) {
  var span = element;
  var row = element.closest('tr');
  var popup = row.querySelector('.popup');
  popup.classList.toggle('show');
  span.classList.toggle('padd');
}
function hovH(element) {
    var row = element.closest('tr');
    row.classList.toggle('shit');
  }

function sok() {
  var input = document.getElementById("myInput");
  input.focus();
}
function sokAI() {
  var input = document.getElementById("searchInput");
  input.focus();
}
document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var shouldFocus = urlParams.get('focus');
    
    if (shouldFocus === 'true') {
      var input = document.getElementById('myInput');
      input.focus();
    }
  });
document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var shouldFocus = urlParams.get('focus');
    
    if (shouldFocus === 'true') {
      var input = document.getElementById('searchInput');
      input.focus();
    }
  });

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
  var noResult = document.getElementById('noResult');

  // Loop through all list items, and hide those who don't match the search query
  var hasResults = false;
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
		hasResults = true;
    } else {
      li[i].style.display = "none";
    }
  }
	
  noResult.style.display = hasResults ? "none" : "";
}

var myInput = document.getElementById('myInput');
var myUL = document.getElementById('myUL');

myInput.addEventListener('input', handleSearchInput);

myInput.addEventListener('blur', function () {
    myInput.value = "";
	handleSearchInput();
  });

function handleSearchInput() {
  var searchTerm = myInput.value.trim();
  var input = document.getElementById("myInput");
  
  if (searchTerm.length > 0) {
    myUL.style.display = 'inline';
	input.style.borderRadius = "20px 20px 0px 0px";
  } else {
    myUL.style.display = 'none';
	input.style.borderRadius = "20px";
  }
}

function searchFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  var noResultAI = document.getElementById('noResultAI');
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("allTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
	var results = false;
for (i = 0; i < tr.length; i++) {
    td = tr[i].querySelector(".ainame"); // Get the third <td> element with class "ainame"
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";results = true;
      } else {
        tr[i].style.display = "none";
      }
    }
  }
noResultAI.style.display = results ? "none" : "block";
table.style.display = results ? "" : "none";
}



























