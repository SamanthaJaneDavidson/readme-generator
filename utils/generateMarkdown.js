// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = license

  if(license === "Apache") {
  return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
  
  } else if (license === "Boost") {
    return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)"
  
  } else if (license === "MIT") {
    return "![License](https://img.shields.io/badge/License-MIT-yellow.svg)"
  
  } else if (license === "Mozilla") {
    return "![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"

  } else {
    return "" 
  }};


//Link to what? I didn't see this in the assignment info 
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;
