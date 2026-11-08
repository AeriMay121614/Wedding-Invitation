const WEDDING = {
  groom: "Min Htet Aung",
  bride: "Thazin Htet",

  // Change this date when the wedding date is confirmed
  dateTime: "2026-11-27T16:00:00",

  venue: "Sedona Hotel Yangon",
  address: "Yangon, Myanmar",

  mapLink: "https://maps.google.com",
  rsvpFormUrl: "#"
};

function setText(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = value;
  }
}

const weddingDate = new Date(WEDDING.dateTime);

setText(
  "coupleNames",
  `${WEDDING.groom} & ${WEDDING.bride}`
);

setText("groomName", WEDDING.groom);
setText("brideName", WEDDING.bride);

setText(
  "footerNames",
  `${WEDDING.groom} & ${WEDDING.bride}`
);

setText("venueName", WEDDING.venue);
setText("venueAddress", WEDDING.address);

setText("dateDay", weddingDate.getDate());

setText(
  "dateMonth",
  weddingDate.toLocaleString("en-US", {
    month: "long"
  }).toUpperCase()
);

setText("dateYear", weddingDate.getFullYear());

setText(
  "eventDate",
  weddingDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })
);

setText(
  "eventTime",
  weddingDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit"
  })
);

setText(
  "heroDate",
  weddingDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).toUpperCase()
);

document.getElementById("mapLink").href =
  WEDDING.mapLink;

document.getElementById("rsvpLink").href =
  WEDDING.rsvpFormUrl;

function updateCountdown() {

  const now = new Date();
  const distance = weddingDate - now;

  if (distance <= 0) {
    setText("days", "00");
    setText("hours", "00");
    setText("minutes", "00");
    setText("seconds", "00");
    return;
  }

  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (distance / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (distance / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (distance / 1000) % 60
  );

  setText("days", String(days).padStart(2, "0"));
  setText("hours", String(hours).padStart(2, "0"));
  setText("minutes", String(minutes).padStart(2, "0"));
  setText("seconds", String(seconds).padStart(2, "0"));
}

updateCountdown();

setInterval(updateCountdown, 1000);