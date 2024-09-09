async function fetchData() {

      var blob = await fetch(`https://randomuser.me/api/`);
      var res = await blob.json();
      console.log(res);
  
}

fetchData();
