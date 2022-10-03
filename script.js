
function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
    }
    
function changeColorById() {
    const elem = document.getElementById("element7");
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    elem.style.backgroundColor = '#' + randomColor;

    var arr = ['#ffffff', '#663300', '#000000', '#005266', '#004d00'];

    elem.style.color = arr[Math.floor(random(1, 5))-1];
  }

function changeColorBySelector() {
    const elem = document.querySelector(".use-selector");
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    elem.style.backgroundColor = '#' + randomColor;

    var arr = ['#ffffff', '#663300', '#000000', '#005266', '#004d00'];

    elem.style.color = arr[Math.floor(random(1, 5))-1];
  }

function enlargeImage() {
    const elem = document.getElementById("img1");
    elem.style.width = "700px";
    elem.style.height = "600px";
  }

  function reduceImage() {
    const elem = document.getElementById("img1");
    elem.style.width = "400px";
    elem.style.height = "300px";
  }

  function deleteImage() {
    var image_x = document.getElementById('img1');
    image_x.parentNode.removeChild(image_x);
  }

  function addImage() {
    var img1 = document.createElement("img");
    img1.style.width = '600px'
    img1.style.height = "400px";
    img1.src = "https://wondersholidays.com/wp-content/uploads/2018/02/kiev1.jpg";
    var src = document.getElementById("header");
    src.appendChild(img1);
  }