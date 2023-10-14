const endDate = "13 oct 2023 10:07 PM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  console.log(end, now);
  const diff = (end - now) / 1000;
  if (diff > 0) {
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
  } else {
    document.querySelector(".col").innerHTML = "Time Out";
  }

  //   convert into days
};

clock();

// 1 day = 24hours
// 1 hour= 60 minutes
// 1 minute = 60 seconds

setInterval(clock, 1000);
