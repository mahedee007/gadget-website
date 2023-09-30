const loadPhones = async(search)=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;

    const res = await fetch(url)
    const data = await res.json()
    displayPhones(data.data)
}

const displayPhones = phones =>{
    const phoneContainer = document.getElementById ('phone-container');
    phoneContainer.textContent = '';

    phones = phones.slice(0,6);

    phones.forEach(phone =>{
        const phoneDiv = document.createElement ('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML=`<div class="card h-100 p-3">
        <img src=${phone.image} class="card-img-top img-fluid" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">${phone.slug}</p>
          <button class="btn btn-primary">Show Details</button>
        </div>`;
        phoneContainer.appendChild(phoneDiv);
    })

}

document.getElementById('search-btn').addEventListener('click', function(){
    const searchText = document.getElementById('search-text');
    const search = searchText.value;
    loadPhones(search);
})

// loadPhones();