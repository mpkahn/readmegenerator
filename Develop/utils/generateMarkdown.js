// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
      case "MIT":
        data.license = "MIT License - Copyright (c) [year] [fullname]";
        break;
      case "GNU":
        data.license = "GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007";
        break;
      case "Apache":
        data.license = "Apache License Version 2.0, January 2004 http://www.apache.org/licenses/";
        break;
        case "":
          data.license = "";
          break;
    }
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Table of Contents
* [Description](Description)
* [Installation](Installation)
* [Usage](Usage)
* [Contributions](Contributions)
* [Test](Test)
* [License](License)
* [Info](Info)

## Desctription
${data.Description}

## Installation
${data.Installation}

## Usage
${data.Usage}

## Contributions
${data.Contributors}

## Test
${data.Test}

## License
${data.License}
  
## Info
https://github.com/${data.Info}

`;
}


renderLicenseBadge();
module.exports = generateMarkdown;
