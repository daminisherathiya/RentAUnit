document.addEventListener("DOMContentLoaded", () => {
  const phoneContainer = document.getElementById("id-phone");
  const button = phoneContainer.querySelector("button");
  const listbox = phoneContainer.querySelector("ul");
  const options = listbox.querySelectorAll("li");
  const countryCodeLabel = document.getElementById("id-country-code-label");
  const flagImg = button.querySelector("img");

  button.addEventListener("click", (e) => {
    e.stopPropagation();
    listbox.classList.toggle("hidden");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const countryName = option.querySelector("span").textContent;
      const newFlagSrc = option.querySelector("img").src;
      countryCodeLabel.textContent = getCountryCode(countryName);
      flagImg.src = newFlagSrc;
      flagImg.alt = `${countryName} flag`;
      listbox.classList.add("hidden");
    });
  });

  function getCountryCode(country) {
    const codes = { USA: "+1", Australia: "+61", Canada: "+1" };
    return codes[country] || "+1";
  }

  // Close the listbox when clicking outside
  document.addEventListener("click", () => {
    listbox.classList.add("hidden");
  });

  // Prevent closing when clicking inside the listbox
  listbox.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
