const main = document.querySelector('.main');

function downloadFile() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1GNt_ig8qDjAvtvNDXV0pMCnhXfGdXcd-'; // Provide the path to your file here
    link.download = 'CRNSINGI-CV.pdf'; // Provide the desired file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


