console.clear();

// Typewriter effect function
function typeWriterEffect(element, text, speed = 100) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  element.innerHTML = ""; // Clear before typing starts
  type();
}

// Select and apply typewriter effect to the main headline
let ctrHeadline = document.querySelector("#keepUpWithUs");
typeWriterEffect(ctrHeadline, "Keep up with us.");

// Select the image container and insert the image
let joaquinArtImageContainer = document.querySelector(".primaryArrayImage");
let imageForArray = "https://changetheref.org/wp-content/uploads/2022/12/we-demand-wall.jpg";
joaquinArtImageContainer.innerHTML = `<img src="${imageForArray}" alt="Manuel Oliver creates a mural reading "We Demand" and depicting an image of his late son, Joaquin Oliver." class="fade-in">`;

// Select the website button and insert text
let websiteButtonContainer = document.querySelector("#check-us-out-button");
let websiteButtonText = "Visit changetheref.org";
websiteButtonContainer.innerHTML = websiteButtonText;

// Array of event data
let eventArray = [
  ["February 14th", "Website Launch: The Shotline", "Join us on our trip through Congressional office buildings:", "Rayburn House Office Building<br/>45 Independence Ave SW<br/> Washington, DC 20515", "Or simply send a call. We dare you.", "https://www.theshotline.org/"],
  ["March 24th", "Generation Lockdown Rally", "Join us on the National Mall for a call to action and artistic demonstration:", "Union Square (between 3rd & 4th St NW)<br/>Washington, DC 89801", "#GenerationLockdown", "https://www.newtownactionalliance.org/naa-press-media/nationalschoolwalkout"],
  ["May 11th", "Book Launch: Joaquin's First School Shooting", "Support Patricia Oliver as she reads the book before Congress:", "United States Capitol Building<br/>Washington, DC 20004", "*Viewer Discretion Advised.", "https://www.myfirstschoolshooting.com/"],
  ["July 3rd", "ACTIVATION: Guacathon Summer Tour", "Meet us in Parkland:", "Marjory Stoneman Douglas High School<br/>5901 Pine Island Rd<br/> Parkland, FL 33076", "Suggested: Bring flowers and paint!", "https://changetheref.org/guacathon-2023/"],
  ["August 4th", "Joaquin's Birthday", "Order coffee for Guac:", "Have your barista write Guac's name on your cup.", "DM us a picture to be featured on our page!<br/>@changetheref", "https://www.youtube.com/watch?v=csdz3BUv3Oo"],
  ["August 17th", "Guacathon Washington, DC", "Join us and our caravan of schoolbuses on our field trip to the NRA:", "RFK Stadium<br/>2400 E Capitol St SE<br>Washington, DC 20003", "#GoodTrouble", "https://www.fox5dc.com/news/parkland-parents-bring-23-buses-to-nras-virginia-headquarters-for-gun-control-demonstration"],
  ["November 11th", "GUAC: My Son, My Hero", "See Manuel Oliver's Performance:", "Theater Row<br>410 W 42nd St<br/>New York, NY 10036", "You'll cry, but you'll also laugh. A lot.", "https://www.broadwayworld.com/off-broadway/article/United-Solo-to-Present-GUAC-MY-SON-MY-HERO-Written-by-Manuel-Oliver-and-James-Clements-20231025"],
  ["December 6th", "11th Annual National Vigil for All Victims of Gun Violence", "Join us for a night of healing and empowerment:", "St. Mark's Episcopal Church Capitol Hill<br/>301 A St SE<br/>Washington, DC 20003", "Featuring messages from Seth Rogen & Steve Kerr", "https://eventbrite.com/e/11th-annual-national-vigil-for-all-victims-of-gun-violence-tickets-690810090577"]
];

// Select event list and populate it dynamically
let eventArrayItems = document.querySelector("ul.eventDates");
eventArray.forEach(event => {
  let listItem = document.createElement("li");
  listItem.classList.add("event-item", "fade-in");

  listItem.innerHTML = `
    <h2>${event[0]}</h2>
    <p>
      <a href="${event[5]}" target="_blank">${event[1]}</a><br/>
      ${event[2]}<br/>
      ${event[3]}<br/>
      ${event[4]}
    </p>
  `;

  eventArrayItems.appendChild(listItem);
});

// Interactive Enhancements
document.querySelectorAll(".event-item").forEach(item => {
  item.addEventListener("mouseover", () => {
    item.classList.add("highlight");
  });
  item.addEventListener("mouseleave", () => {
    item.classList.remove("highlight");
  });
});

// Smooth fade-in animation on scroll
const fadeInElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.3 });

fadeInElements.forEach(element => observer.observe(element));

console.log("Script Loaded Successfully");

