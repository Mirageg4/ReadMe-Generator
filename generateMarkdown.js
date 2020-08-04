
//function to generate readme information from responses
function generateMarkdown(data,) {
  const NOT_PROVIDED = "Not Provided"

//ternary expressions to return data
return`

  # User Name
${data.userName.length ? data.userName: NOT_PROVIDED}

  # Title
${data.projectName.length ? data.projectName: NOT_PROVIDED}

# Description
${data.projectDescription.length ? data.projectDescription: NOT_PROVIDED}

# Table of Contents
${data.tableContents.length ? data.tableContents: NOT_PROVIDED}

# Installation Instructions
${data.installInstructions.length ? data.installInstructions: NOT_PROVIDED}

# Application Use Instructions
${data.appInstructions.length ? data.appInstructions: NOT_PROVIDED}

# Project Licenses
${data.projectLicense.length ? data.projectLicense: NOT_PROVIDED}

# Additional Contributions
${data.projectContribute.length ? data.projectContribute: NOT_PROVIDED}

# Project Testing
${data.projectTesting.length ? data.projectTesting: NOT_PROVIDED}

# Project email
${data.emailAddress.length ? data.emailAddress: NOT_PROVIDED}

`;
}

module.exports = generateMarkdown;
