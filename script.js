function generateCard(){

  document.getElementById("cardName").innerText =
    document.getElementById("name").value;

  document.getElementById("cardId").innerText =
    "EMP ID: " + document.getElementById("empid").value;

  document.getElementById("cardDesignation").innerText =
    document.getElementById("designation").value;

  document.getElementById("backMobile").innerText =
    document.getElementById("mobile").value;

  document.getElementById("backEmergency").innerText =
    document.getElementById("emergency").value;

  const file = document.getElementById("photo").files[0];

  if(file){
    const reader = new FileReader();
    reader.onload = e => {
      document.getElementById("previewPhoto").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function flipCard(){
  document.getElementById("flipCard").classList.toggle("flipped");
}

// ================= FINAL PDF DOWNLOAD =================
document.getElementById("downloadBtn").addEventListener("click", function(){

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("p","mm","a4");

  const front = document.getElementById("frontCard");
  const back = document.getElementById("backCard");

  pdf.html(front, {
    callback: function(doc){

      doc.addPage();

      doc.html(back, {
        callback: function(doc2){
          doc2.save("ID_CARD.pdf");
        }
      });

    }
  });

});
