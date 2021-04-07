window.onLoad = Prep();

function img() {
  fetch(
      'https://api.tumblr.com/v2/blog/pauses-for-effect.tumblr.com/posts/photo?api_key=CIa4imItFaF7XzWMp687ZlVQNPmfxXXqT93uySgi15h1ACNgVF&limit=20', {
        mode: 'cors'
      })
    .then(results => {
      return results.json();
    }).then(data => {
      const randomNumber = Math.floor(Math.random() * (20 - 1));
      document.getElementById("image").src = data.response.posts[randomNumber].photos[0].alt_sizes[1].url;
    })
}

function Prep() {
  img()
  window_Height = window.innerHeight;
  window_Width = window.innerWidth;

  image_Element = document.getElementById("image");
  image_Height = image_Element.clientHeight;
  image_Width = image_Element.clientWidth;

  availSpace_V = window_Height - image_Height;
  availSpace_H = window_Width - image_Width;
  setInterval(img, 9000)
  setInterval(moveImage, 3000);
}

function moveImage() {

  var randNum_V = Math.round(Math.random() * availSpace_V);
  var randNum_H = Math.round(Math.random() * availSpace_H);

  image_Element.style.top = randNum_V + "px";
  image_Element.style.left = randNum_H + "px";

}
