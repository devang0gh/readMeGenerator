const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


const questions = () =>
    inquirer.prompt ( [
    {
      type: 'input',
      message: "What is the name of your project?",
      name: 'project name',
    },
    {
      type: 'input',
      message: "Provide short description of your project.",
      name: 'description',
    },
    {
      type: 'input',
      message: 'What problem did it solve?',
      name: 'solution',
    },
    {
      type: 'input',
      message: 'What are the steps to install your project?',
      name: 'install',  
    },
    {
      type: 'input',
      message: 'What is your GitHub URL?',
      name: 'GitHub'
    }

  function generateMarkdown(data){
      return 




    //   $(data.title)
    //   $(data.description)
  }

// inquirer
//   .prompt(questions)
//   .then((response) =>{
//   console.log(response);
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('Please try again.')

    
//     fs.writeFile('readMe.md', generateMarkdown(response), (err) =>
//   err ? console.log(err) : console.log('response written to file.') );
//   });
  

       
  


