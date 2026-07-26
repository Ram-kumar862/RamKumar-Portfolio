export const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/New Pandiselvan_CV.pdf";
    link.download = "Pandiselvan_cv.pdf";
    link.click();
  };