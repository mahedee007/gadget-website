const loadPhones = async(search)=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;

    const res = await fetch(url)
    const data = await res.json()
    displayPhones(data.data)
}

const displayPhones = phones =>{
    const phoneContainer = document.getElementById ('phone-container');
    phoneContainer.textContent = '';
    const showMore = document.getElementById ('show-more');
    if(phones.length > 6){
        phones = phones.slice(0,6);
        showMore.classList.remove('d-none');
    }else{
        showMore.classList.add('d-none')
    }
    
        
        
    
    const warning = document.getElementById('warning');
    if(phones.length === 0){
        warning.classList.remove('d-none')
    }else{
        warning.classList.add('d-none')
    }

    phones.forEach(phone =>{
        const phoneDiv = document.createElement ('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML=`<div class="card h-100 p-3">
        <img src=${phone.image} class="card-img-top img-fluid" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">${phone.phone_name}</h5>
          
          <button onclick= showDetails('${phone.slug}') class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Show Details</button>
        </div>`;
        phoneContainer.appendChild(phoneDiv);
    })
    toggleSpinner(false);
}

document.getElementById('search-btn').addEventListener('click', function(){
    toggleSpinner(true);
    const searchText = document.getElementById('search-text');
    const search = searchText.value;
    
    loadPhones(search);
    searchText.value = '';
})
// document.getElementById('show-more').addEventListener('click', function(){

// })

const toggleSpinner = isLoading =>{
    const spinner = document.getElementById('spinner');
    if(isLoading){
        spinner.classList.remove('d-none')
    }else{
        spinner.classList.add('d-none')
    }

}

const showDetails = async id =>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    const res = await fetch(url)
    const data = await res.json()
    displayData(data.data);
}
const displayData = phone =>{
    const title = document.getElementById('modal-title');
    title.innerText = `${phone.name}`;
    const body = document.getElementById('body');
    body.innerHTML= `<p>${phone.others.WLAN}</p>`
}
// loadPhones('apple');