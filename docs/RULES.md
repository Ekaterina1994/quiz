# RULES

## GIT

- This project has the one branch called "main". If you need to create a new branch it's name should to start by little letter;
- We should use only English for describe tasks, issues, write comments etc;
- One task - one issue. No need to do some tasks in one issue;
- Tasks start under the supervision of Victor;
- When task starts start, we must clearly describe the conditions what is necessary to complete;
- If the task can be described by item, then we start the items in the description as a list;
- Each commit message and commit command must follow the following pattern:
  $ git commit -m "#issue_number-issue_name/part_of_task_which_was_done".

## FILE'S AND FOLDER'S NAMES

- Folder names must start with a small letter;
- File names (components and other files in the app folder) should be written with big letters and settings files (tsconfig, package.json and others) with little letters;
- File names must contain the name of the main entity of this file.

## DOCUMENTATIONS

- The README file in the root folder should contain a description of the project, its goals, technologies used, and the README file in the client folder should contain instructions for running the application.

## COMMUNICATION

- All developers must be available for communication during business hours (from 10.00 to 19.00);
- Meetings should take so many time as need it but not more than project work - maximum 1-2 hours/day in sum.

## CODE

- Props should be formatted as follows: if there is one prop, then all in one line, if there are several props, then each prop in the tag on a new line;
- Comments for code are formatted as:

```
/*
 * comments
 */
```

- Take out such elements as lists, headings, pieces of text, etc. into separate components;
- Where immutable strings are used (for example, in routes, etc.) it is better to use constants. They can be used with curly braces:

```
const ROUTE = "dfjsoifjseoghsgeso"
...
<Route path={ROUTE} element={<SettingsPage />} />
```
