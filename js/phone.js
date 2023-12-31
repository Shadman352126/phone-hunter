const loadData = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhone(phones);
};
const displayPhone = (phones) => {
  // step-1:call the parent
  const phoneCardList = document.getElementById("phone-container");
  // clear search result if you search again
  phoneCardList.textContent = "";
  // display show all phones
  const showAllContainer = document.getElementById("show-all-container");
  if (phones.length > 12) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }
  // display only 1st nth search
  phones = phones.slice(0, 12);

  phones.forEach((phone) => {
    // console.log(phone);
    // step-2:create the div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-100 m-6 shadow-xl`;
    // step-3:set inner html
    phoneCard.innerHTML = `
    <figure class="px-10 pt-10">
    <img src="${phone.image}" />
    </figure>
    <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>${phone.slug}</p>
        <div class="card-actions">
        <button class="btn btn-primary">Buy Now</button>
        </div>
    </div>
    `;
    // step-4:append child
    phoneCardList.appendChild(phoneCard);
  });
  // hide loading
  loaderSpinner(false);
};

// handle search button
const handleSearch = () => {
  loaderSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // console.log(searchText);
  loadData(searchText);
  searchField.value = "";
};
const loaderSpinner = (loading) => {
  const loadingSpinner = document.getElementById("spinner");
  if (loading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};
loadData();
