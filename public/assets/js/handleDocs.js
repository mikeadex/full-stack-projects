// I installed npm install mammoth to convert docx to html or text
// i install npm install - D browserify to bundle the mammoth.js file for the browser
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(
    process.env.GOOGLE_AI_KEY
);
if (!genAI) {
    console.error("Failed to initialize Google AI");
}

document.getElementById("upload-cv")
    .addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file && file.name.toLowerCase().endsWith(".docx")) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const arrayBuffer = e.target.result;
                mammoth
                    // .convertToHtml({arrayBuffer: arrayBuffer })
                    .extractRawText({ arrayBuffer: arrayBuffer })
                    .then((result) => {
                        const text = result.value;
                        const outputElement =
                            document.getElementById("docx-text-output");
                        outputElement.innerText = text;
                    })
                    .catch((error) => {
                        console.error("Error extracting text:", error);
                    });
            };
            reader.readAsArrayBuffer(file);
        } else {
            console.warn("Please select a .docx file");
        }
    });


// Attach event listeners after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cv-form");
    form.addEventListener("submit", aiWriter);

    const uploadInput = document.getElementById("upload-cv");
    uploadInput.addEventListener("change", handleFileChange);
});

async function personalStatementWriter(event) {
    event.preventDefault();
}

async function aiWriter(event) {
    event.preventDefault();


    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let cvInput = document.getElementById("docx-text-output").innerText;
    const prompt = `Hello, please assume the role of a seasoned Human Resources Manager with over 45 years of experience. Drawing on your extensive background and having reviewed over one million CVs, rewrite the CV below into a polished, employer-focused document. Emphasize the candidate’s strongest qualifications, measurable accomplishments, and relevant experience. Ensure the result is concise, professional, and easy for hiring managers to quickly assess and appreciate. Create a layout and tone that stands out and aligns with what organizations seek in top candidates. Below is the CV to rewrite: ${cvInput}`;

    const result = await model.generateContent(prompt);
    console.log(result.response.text());

}

function handleFileChange(event) {
    const file = event.target.files[0];
    if (file && file.name.toLowerCase().endsWith(".docx")) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const arrayBuffer = e.target.result;
            mammoth
                .extractRawText({ arrayBuffer: arrayBuffer })
                .then((result) => {
                    const text = result.value;
                    document.getElementById("docx-text-output").innerText = text;
                })
                .catch((error) => {
                    console.error("Error extracting text:", error);
                });
        };
        reader.readAsArrayBuffer(file);
    } else {
        console.warn("Please select a .docx file");
    }
}