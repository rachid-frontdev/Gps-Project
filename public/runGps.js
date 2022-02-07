let div = document.querySelector('#here'),
    clickin = document.getElementById('start');
    const getGps = () => {
if('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    let {latitude, longitude } = position.coords;
    function zoomInLocation(lat,long) {
      const myMap = L.map('myMap').setView([lat, long], 7);
      // const marker = L.marker([50.5, 30.5]).addTo(mymap);
      const attribution ='&copy; <a href="https://www.openstreetmap.org/copyright">openstreetmap</a>';
      const tile_url ='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      L.tileLayer(tile_url, {
          attribution
      }).addTo(myMap);
      document.getElementById('latitude').innerText = 'latitude is '+ lat;
      document.getElementById('longitude').innerText = 'longitude is '+ long;

    }
    zoomInLocation(latitude,longitude);

    const data = {latitude, longitude};
    fetch('/position', {
      method :'POST',
      headers: {
     'Content-Type': 'application/json'
   },
      body : JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data));

  });
} else {
  console.log('geolocation is\'nt available ')
  }
}
clickin.onclick = (e) => {
   getGps();
   e.target.onclick = null;
}

const getLat = async () => {
  let response = await fetch('https://api.wheretheiss.at/v1/satellites/25544'),
  data =  await response.json();
   let {latitude, longitude }= data;

   const second = {latitude, longitude};
// try {
//   let done = await fetch('/api', {
//     method :'POST',
//     headers: {
//    'Content-Type': 'application/json'
//  },
//     body : JSON.stringify(second)
//   });
//   let acccept = await done.json();
//  //  document.getElementById('latitude').innerText = 'latitude is '+ latitude;
//  //  document.getElementById('longitude').innerText = 'longitude is '+ longitude;
//
// } catch(er) {
//   console.log(er);
// }

}
// getLat();
