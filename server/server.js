
// });
//////////////////
require("dotenv").config();
const express = require("express");
// const puppeteer = require("puppeteer");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
// const path = require("path");
// const fs = require("fs");
// const PDFDocument = require("pdfkit");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  // origin: 'https://eidlloan.vercel.app',
  origin: ['https://eidl-loan.vercel.app', 'https://eidlloanhelp.com', 'http://localhost:3000'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const smtpServer = "smtp.titan.email";
const smtpPort = 587;

const transporter = nodemailer.createTransport({
  host: smtpServer,
  port: smtpPort,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// const generateInvoice = (formData, filePath, lang = "en") => {
//   const { name, zipcode, email, number, monthlyPayment, loanAmount } =
//     formData;
//   const doc = new PDFDocument({ margin: 5 });

//   doc.pipe(fs.createWriteStream(filePath));

//   // Paths to the logo and poster images
//   const logoPath = path.join(__dirname, "logo.png"); // Adjust the path as needed
//   const posterPath = path.join(__dirname, "poster.png"); // Adjust the path as needed

//   // Add the logo image to the top left corner
//   doc.image(logoPath, 10, 10, { width: 100 });

//   // Header
//   doc
//     .fillColor("#444444")
//     .fontSize(20)
//     .text(
//       lang === "en"
//         ? "EIDLLoan Help Form Submission Details"
//         : "Detalles de la Presentación del Formulario de Ayuda de EIDLLoan",
//       140,
//       57
//     )
//     .moveDown();

//   // Section 1: Customer Details
//   doc
//     .fontSize(14)
//     .text(lang === "en" ? "Customer Details" : "Detalles del Cliente", {
//       underline: true,
//     })
//     .moveDown()
//     .fontSize(12)
//     .text(`${lang === "en" ? "Name" : "Nombre"}: ${name}`)
//     .text(`${lang === "en" ? "Email" : "Correo Electrónico"}: ${email}`)
//     .text(`${lang === "en" ? "Zip Code" : "Código Postal"}: ${zipcode}`)
//     .text(`${lang === "en" ? "Phone Number" : "Número de Teléfono"}: ${number}`)
//     .moveDown();

//   // Section 2: Loan Details
//   doc
//     .fontSize(14)
//     .text(lang === "en" ? "Loan Details" : "Detalles del Préstamo", {
//       underline: true,
//     })
//     .moveDown()
//     .fontSize(12)
//     .text(
//       `${lang === "en" ? "Loan Amount" : "Monto del Préstamo"}: $${loanAmount}`
//     )
//     .text(
//       `${
//         lang === "en" ? "Monthly Payment" : "Pago Mensual"
//       }: $${monthlyPayment}`
//     )
//     // .text(`${lang === "en" ? "Past Due" : "Vencido"}: ${pastDue}`)
//     .moveDown();

//   // Add the poster image below the content
//   doc.image(posterPath, 60, 350, { width: 500, align: "center" });

//   // Footer
//   doc
//     .fontSize(10)
//     .fillColor("#aaaaaa")
//     .text(
//       lang === "en"
//         ? "Thank you for choosing EIDL Loan Help. If you have any questions about this form, please contact us at info@eidlloanhelp.com."
//         : "Gracias por elegir EIDL Loan Help. Si tiene alguna pregunta sobre este formulario, contáctenos en info@eidlloanhelp.com.",
//       50,
//       750,
//       { align: "center", width: 500 }
//     );

//   doc.end();
// };

app.get("/", (req, res) => {
  res.send("Welcome to the Perfect Choice");
});

app.post("/submit-form", async (req, res) => {
  const { name,  email, message } =
    req.body;

  console.log(req.body);


  const mailOptionsUser = {
    from: process.env.EMAIL,
    to: email,
    subject: "Form Submission Confirmation",
    text: "Your form has been submitted successfully. Please find the attached PDF with the form details.",
  };

  const mailOptionsSender = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "New Form Submission",
    text: `New form submission details:
    Name: ${name}
    Email: ${email}
    Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptionsUser);
    console.log("Confirmation email sent to user");

    await transporter.sendMail(mailOptionsSender);
    console.log("Notification email sent to sender");

    res.status(200).send("Form submitted and emails sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error submitting form and sending emails");
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});