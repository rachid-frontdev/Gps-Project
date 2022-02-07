let fruitEle = document.getElementById('fruit');
let btn = document.getElementById('submit');
// fruitEle.onchange = () => console.log(fruitEle.value);
btn.onclick = () => {

  if('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let {latitude, longitude } = position.coords;
      const data = {latitude, longitude, moood:fruitEle.value};
      let consume = await fetch('/position', {
        method :'POST',
        headers: {
       'Content-Type': 'application/json'
     },
        body : JSON.stringify(data)
      });
      let response = await consume.json();
        console.log(response);
    });

  } else {
    console.log('geolocation is\'nt available ')
    }
}
