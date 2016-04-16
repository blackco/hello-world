# hello-world
Cheat Sheet Notes

1) git clone  - to get the repository locally  
2) git add    - to add a new file to the local clone  
3) git commit - to commit your change to the local clone  
4) git push   - to push your change to the central repository  
5) git status - at any time to see status of files  
6) git checkout - reverts to last committed version in your local repository ( by permanently deleting, so health warning!)  

7) Branching ( see https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
   git checkout -b myBranchRef
    - make edit on the branch
   git commit -a -m 'commit to branch'

7b) git checkout master - switches branch back to master if you need to make a hotfix  
7c) git checkout -b hotfix - creates new branch for hotfix t
7d) make change
7e) git commit -a -m 'applied hotfix'
7f) git checkout master  
7g) git merge hotfix  

A README file created directly on GitHub
