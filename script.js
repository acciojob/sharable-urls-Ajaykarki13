// your code here

const url = document.getElementById('url');
const btn = document.getElementById('button');

btn.addEventListener('click', function() {
  let nam = document.getElementById('name').value;
  let num = document.getElementById('year').value;
 if (nam && num) {
    url.innerText = `https://localhost:8080/?name=${nam}&year=${num}`;
  } else if (nam) {
    url.innerText = `https://localhost:8080/?name=${nam}`;
  }
	 else if (num) {
    url.innerText = `https://localhost:8080/?year=${num}`;
  }
 else {
    url.innerText = `https://localhost:8080/`;
  }});
