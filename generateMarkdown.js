//function to generate repo name
function generateRepoName(projectTitle) {
  const repo = projectTitle
}


//function to generate readme information from responses
function generateMarkdown(data) {
  return `
# ${data.title}

`;
}

module.exports = generateMarkdown;
