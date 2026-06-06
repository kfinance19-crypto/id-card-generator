function generateCard(){


const name = document.getElementById("name").value;
const empid = document.getElementById("empid").value;
const designation = document.getElementById("designation").value;
const mobile = document.getElementById("mobile").value;
const emergency = document.getElementById("emergency").value;
const photo = document.getElementById("photo").files[0];

document.getElementById("cardName").innerText =
    name || "Agent Name";

document.getElementById("cardId").innerText =
    empid ? "EMP ID : " + empid : "EMP ID";

document.getElementById("cardDesignation").innerText =
    designation || "Designation";

document.getElementById("backMobile").innerText =
    mobile || "XXXXXXXXXX";

document.getElementById("backEmergency").innerText =
    emergency || "XXXXXXXXXX";

if(photo){

    const reader = new FileReader();

    reader.onload = function(e){
        document.getElementById("previewPhoto").src = e.target.result;
    };

    reader.readAsDataURL(photo);
}


}

function flipCard() {

    const card = document.getElementById("flipCard");

    if(card.classList.contains("flipped")){
        card.classList.remove("flipped");
    } else {
        card.classList.add("flipped");
    }

}
console.log("Script Loaded");
document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("downloadBtn");

  if (!btn) {
    console.log("Download button not found");
    return;
  }

  btn.addEventListener("click", function () {

    const card = document.querySelector(".card-wrapper");

    if (!card) {
      alert("Card not found");
      return;
    }

    html2canvas(card, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff"
    }).then(canvas => {

      const link = document.createElement("a");
      link.download = "id-card.png";
      link.href = canvas.toDataURL("image/png");

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    });

  });

});
