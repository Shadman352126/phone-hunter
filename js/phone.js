const loadData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phones = data.data;
  displayPhone(phones);
};
const displayPhone = (phones) => {
  // step-1:call the parent
  const phoneCardList = document.getElementById("phone-container");
  phones.forEach((phone) => {
    console.log(phone);
    // step-2:create the div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-base-100 shadow-xl`;
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
};

loadData();
