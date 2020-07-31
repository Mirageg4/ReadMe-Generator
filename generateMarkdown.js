
//function to generate readme information from responses
function generateMarkdown(data) {
  const NOT_PROVIDED = "Not Provided"


  return `
  # User Name
# ${data.userName.length ? userName.title : NOT_PROVIDED}

  # Title
# ${data.projectName.length ? data.projectName : NOT_PROVIDED}

# Description
# ${data.projectDescription.length ? data.projectDescription.length : NOT_PROVIDED}

# Table of Contents
# ${data.tableContents.length ? data.tableContents.length : NOT_PROVIDED}

# Installation Instructions
# ${data.installInstructions.length ? data.installInstructions.length : NOT_PROVIDED}

# Application Use Instructions
# ${data.appInstructions.length ? data.appInstructions.length : NOT_PROVIDED}

# Project Licenses
# ${data.projectLicense.length ? data.projectLicense.length : NOT_PROVIDED}

# Additional Contributions
# ${data.projectContribute.length ? data.projectContribute.length : NOT_PROVIDED}

# Project Testing
# ${data.projectTesting.length ? data.projectTesting.length : NOT_PROVIDED}

# Project email
# ${data.emailAddress.length ? data.emailAddress.length : NOT_PROVIDED}

`;
}

module.exports = generateMarkdown;
