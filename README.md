# UniClubs
Make it easier for students to find clubs or organizations based on their preference through a web/mobile application.

Collaborators: Ian Rios, Keina Aoita, Maina Aoita

## Setting up your environment

*Download the github repo!*

* [Git Bash](https://git-scm.com/downloads)
    * [Integrating Git Bash into VS Code](https://stackoverflow.com/questions/42606837/how-do-i-use-bash-on-windows-from-the-visual-studio-code-integrated-terminal)
* [NodeJS](https://nodejs.org/en/download/)

To download all dependencies, type in bash terminal `npm install`. This will download all dependencies from `package.json`.

## Git Commands

### **Git Intializations**

Change a directory into a git repo  
`git init`

Before commiting your changes to repo, add changed files onto the staging area  
`git add .` to add all changed files  
`git add file_name_here` to add a specific file  

Records changed files in a local repo  
Always add comments to keep track of changes  
`git commit -m "my message"`  

Check current status of repo  
`git status`

### **Git Branching**

List branches  
`git branch`

Make a new branch  
`git branch name_of_branch`

Switch to a branch  
`git checkout name_of_branch`

Delete a branch  
`git branch -d name_of_branch`

Create a new branch and check into it  
`git checkout -b name_of_branch`

Check if any changes were made on the remote repo  
`git fetch`

Merge changes of branch to local master branch  
`git merge some_branch`

Check if any changes were made in the remote repo then merge with your local repo  
`git pull`

List commit history  
`git log`

Revert back to a commit  
`git revert hash_comment` revert back to a specific commit  
`git revert HEAD` revert back to the last commit

Pushing your branch to remote repo  
`git push origin master` push your local master repo or  
`git push origin my_local_branch` only pushes your local branch

### **Git Credentials**

Change local user on current repo  
`git config user.name your_username_here`  
`git config user.email your_email_address_here`

