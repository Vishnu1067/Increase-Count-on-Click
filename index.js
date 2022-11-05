
// on button click alert
function alertMe() {
  alert('Hello World');
  var button = document.getElementById('login');
  var button = $('#login');
  console.log(button);
  button.innerHTML = 'Hello World';
}
 
// jquery
$(document).ready(function () {
  $('#addImage').click(function () {
    var imageUrl = $('#imageUrl').val();
    var cardHtml = `<div class="card mt-5 ml-5" style="width: 18rem">
    <img
      src="${imageUrl}"
      class="card-img-top"
      alt="..." />
    <div class="card-body d-flex justify-content-between align-items-center">
      <a class="card-title"
        download="image.jpg"
        href="${imageUrl}"
        >Download</a>

      <button type = button class="btn btn-outline-primary" id="btn"><p>
      likes 👍 <span id="display">0</span>
      </p></button>
       <script type="text/javascript">
        var click = 0;
         var btn = document.getElementById("btn");
          var disp = document.getElementById("display");

          btn.onclick = function ()
           {  click++;
        disp.innerHTML = click;
    }
    </div>
  </div>`;
    $('#imageContainer').append(cardHtml);
  } );
} );
 