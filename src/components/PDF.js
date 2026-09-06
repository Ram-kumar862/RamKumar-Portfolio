export const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/RamKumar.pdf";
    link.download = "RamKumar_CV.pdf";
    link.click();
  };