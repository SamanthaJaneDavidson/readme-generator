// Render license badge function 
function renderLicenseBadge(license) {

  let licenseBadge = license

  if(licenseBadge === "Apache") {
  return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
  
  } else if (licenseBadge === "Boost") {
    return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)"
  
  } else if (licenseBadge === "MIT") {
    return "![License](https://img.shields.io/badge/License-MIT-yellow.svg)"
  
  } else if (licenseBadge === "Mozilla") {
    return "![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"

  } else {
    return "" 
  }};

  module.exports = renderLicenseBadge;
