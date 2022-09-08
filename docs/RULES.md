# RULES

## GIT

- This project has the one branch called "main" where we work on client part of app;
- If you need to create a new branch (for example you will create a server part) it's name should to start by little letter;
- Separate feature branches are used to solve specific problems. Each task has a number and a name (title). Accordingly, the branch for this task should look like:  
 
```
"{{issue_number}}-{{issue_name-long-name}}"
```  

- One task - one issue. No need to do some tasks in one issue;
- If the task can be described by item, then we start the items in the description as a numbered list;
- Each commit must follow the following pattern:  
  
``` 
"#{{issue_number}}-{{issue_name}}/{{part_of_task_which_was_done}}"
```  

- You need to select `"merge squash"` and create a commit message that combines the description of all commit messages in a branche.

## FILE'S AND FOLDER'S NAMES

- Folder names must start with a small letter;
- File names (components and other files in the app folder) should be written with big letters and settings files (tsconfig, package.json and others) with little letters;
- File names must contain the name of the main entity of this file.

## DOCUMENTATIONS

- The README file in the root folder should contain a description of the project, its goals, technologies used, and the README files in the subfolders should contain instructions for running the application or other useful information.

## COMMUNICATION

- We should use only English for describe tasks, issues, write comments etc;
- When task starts, we must clearly describe "definition of done" (describe the full functionality of the task, what should be in the end);
- All developers must be available for communication during business hours (from 10.00 to 19.00);
- Meetings should take so many time as need it but not more than project work - maximum 1-2 hours/day in sum.

## CODE

* Constants should be formatted as follow:

    * we use capital letters and an underscore, if the value of the constant is known before the code is executed and "hardcoded" (for example, the hexadecimal value for red):  
		  
  ```
  const COLOR_RED = "#F00";
  ```  
    
    * we use lower letters and "camelCase", if the constants are calculated during script execution (we don't know a result before script), but do not change after their initial assignment:  
      

	```
	const newResult = a * b; // where a and b - random numbers.
	```  
    

* If we have "magic values" it is better to use constants. The name of the constant should convey the meaning of the number.  
 

```
const GRAVITATIONAL_CONSTANT = 9.81;

const  potentialEnergy = (double mass, double height) => {
  return mass * height * GRAVITATIONAL_CONSTANT;
}
```  


- Use `PascalCase` for React components and interface name:  
 

```
import MainPage from "src/app/logic/mainPage/MainPage";
```  


```
interface SwitchProps {
  ...
}
```  


- Import styles from modules using the "styles" keyword:

```
import styles from "src/app/component/button/Button.module.scss";
```

## COMMENTS

- All comments must start with big letter;

- We use different types of comments depending on the need: 

		* JSDoc comments should generally be placed immediately before the code being documented. This kind of comment describes the entities to use. Usually these elements can be found in different files (they are often exported). Also we can use this type of comments in we need to use a multiple comments:  

	```
	/**
	 * Comments
	 */
	```  

		* If we need to comment something in oneline outside of the render block we can use the next format:  
	  
	
	```
	// Comment
	```
