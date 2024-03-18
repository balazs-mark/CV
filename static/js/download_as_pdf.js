

function generatePDF () {

    // See https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
    
    var configs = {
        margin: [20, 0, 24, 0],
        pagebreak: { mode: 'avoid-all'},
        filename: "mark_balazs_cv.pdf",
        html2canvas:  { scale: 1 },
        jsPDF: {orientation: "portrait", unit: "mm", format: "letter"}
    }

    html2pdf().from(document.getElementById("cvContent")).save();

};