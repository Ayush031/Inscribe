const express = require("express");
const router = express.Router();

const {
  submitForm1,
  submitForm2,
  submitForm3,
  submitForm4,
  submitCertificate,
  submitGroupCertificates,
  generatePdf,
  generatePdf2,
  generatePdf3,
  generatePdf4,
  generateCertificate,
  formData,
} = require("../controllers/formController");

router.post("/submit-file", submitGroupCertificates);
router.post("/submit-form1", submitForm1);
router.post("/submit-form2", submitForm2);
router.post("/submit-form3", submitForm3);
router.post("/submit-form4", submitForm4);
router.post("/submit-certificate", submitCertificate);
router.get("/generate-pdf-form1/:id/:formName", generatePdf);
router.get("/generate-pdf-form2/:id/:formName", generatePdf2);
router.get("/generate-pdf-form3/:id/:formName", generatePdf3);
router.get("/generate-pdf-form4/:id/:formName", generatePdf4);
router.get("/generate-pdf-certificate/:id/:certificateName", generateCertificate);
router.get("/data/:formName", formData);

module.exports = router;
