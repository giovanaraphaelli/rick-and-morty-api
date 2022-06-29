fetch('https://rickandmortyapi.com/api/character')
  .then((response) => response.json())
  .then((json) => {
    const container = document.querySelector('.container');
    json.results.map((results) => {
      container.innerHTML += `
        <div class="box-items">
            <figure>
                <img src=${results.image}>
            </figure>
            <div class="box-content">
                <h2>${results.name}</h2>
                <p>${results.status} - ${results.species}</p>
                <span><b>Origin:</b> ${results.origin.name}</span>
            </div>
        </div>
        `;
      console.log(results);
    });
  });
