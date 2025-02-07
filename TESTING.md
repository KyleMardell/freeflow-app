# Free Flow - Freelance Project Tracker Testing


![Responsive Image](/docmedia/design/responsive.png)


Free Flow is a freelance project tracker web app designed for business owners who need to manage projects and their associated tasks.
The app helps track a project's progress while calculating estimated or final time and cost. Free Flow aims to assist anyone working on a new project, or even to estimate a project's cost and timeline before beginning. The tool is designed to solve the challenge of understanding project scope in terms of time and cost, offering value to any business person managing projects of various kinds.
One of Free Flow's standout features is the ability to create custom tasks. These custom tasks can be used as templates across multiple projects, and when marked as completed, they automatically update key data such as average time taken, longest and shortest completion times, and number of uses. This feature enables users to track how long specific tasks take over time and improve future project estimates.
For instance, a builder could use Free Flow to estimate and monitor the progress of a construction project, a graphic designer might leverage it for estimating the scope and costs of a branding project, or a web developer could use it to track the expenses of developing a website.
Ultimately, Free Flow allows users to track multiple projects by breaking each one down into manageable tasks, regardless of the project type.

[Live App Link](https://freeflow-app-3695609defd0.herokuapp.com/)

[Front End Repo Link](https://github.com/KyleMardell/freeflow-app)
[Back End API Repo Link](https://github.com/KyleMardell/freeflow-api)

## Contents

## Testing
Testing for the Free Flow app was mainly done during development, with a confirmation testing session carried out once all development was complete. This ensured there were no missed bugs in the final production version of the app and that any issues found could be resolved. I performed only minimal automated testing on the API side in terms of unit testing, although full manual testing was conducted, as detailed in the table below.
I also carried out validation and accessibility testing to ensure my code met development standards and that all pages of the app were fully accessible.
Throughout development, I used Google Chrome DevTools as one of my primary testing tools. This allowed me to use print statements or console logs to track data as it was passed between the front end and back end, as well as to identify any errors that occurred during development. For accessibility, I used tools such as Google Chrome’s Lighthouse and the WAVE accessibility testing tool to verify that all pages adhered to accessibility standards. Any anomalies could then be rectified or justified.

### API Testing
When developing the API for the project, I used print statements and the console within the Gitpod workspace to check the flow of data and track any errors. I also used the Django REST framework API view to manually enter data into forms, check URLs, and test view functions. This ensured all sections of the API were functioning as expected before beginning front-end development.
I created multiple users, projects, tasks, and custom tasks to test the API in this way. I also tested incorrect data inputs, not just correct data, to ensure all edge cases were covered and that no invalid form data could be submitted. Additionally, I verified that only a logged-in user could access their own data and not view another user's information, ensuring the security of user data within the API.
Final API testing was confirmed through a full manual testing session from the front end, ensuring all API endpoints were working as expected.

### Validation

#### HTML Validation
Once development was nearly complete, I carried out HTML validation using the [Web3 HTML Validator](https://validator.w3.org/) to ensure all HTML conformed to Web3 standards. To perform these tests, I used Google Chrome's developer tools to view the rendered page's source code and then entered this source code into the validator. This ensured that the full HTML document for each page was valid.

The only changes required during HTML validation were minimal and did not affect the app's functionality. The first change was to the navbar brand. I had used an <h1> tag inside the navbar brand, which React renders as a <span> element. Since an <h1> cannot be a child of a <span>, I removed the <h1> and applied styles to compensate.

The other change involved using a <button> inside a <link> element, which is not allowed. I replaced the <button> elements inside links with <div> elements styled as buttons. This ensured the links remained fully functional while reducing confusion for screen readers.

All final pages passed HTML validation with no errors. I have provided a single example of the validation results instead of screenshots for every page, as all test result pages were visually identical.
![HTML Validation](/docmedia/testing/html-validation.png)

#### CSS Validation
Similar to the HTML validation, I carried out CSS validation using the [Web3 CSS Validator](https://jigsaw.w3.org/css-validator/) toward the end of development to ensure all CSS files adhered to Web3 standards. I found multiple instances where commas were mistakenly used in border properties. This likely occurred because I created a single border style and applied it to multiple component CSS modules without noticing the issue. This was an easy fix, as I only needed to remove the unnecessary commas to resolve it.

All final CSS files passed validation with no errors. I have provided a single example of the validation results instead of screenshots for every page, as all test result pages were visually identical.
![CSS Validation](/docmedia/testing/css-validation.png)

#### Python Linter
Before deploying the back-end API code, I checked that all files conformed to the [Python PEP8 linter](https://pep8ci.herokuapp.com/#) using the linter provided by Code Institute. All files passed with no errors, and only minimal changes were needed, primarily to reduce line character counts or remove unnecessary blank spaces.

#### JavaScript Liner
At the end of development I checked all reacts files using the [ESLint](https://eslint.org/play/) tool with all files passing with no errors. This was a good final check to all the javascript files to check there were no overlooked errors.
Once development was complete, I removed all console logs from the front-end code, with one exception in the [CurrentUserContext](https://github.com/KyleMardell/freeflow-app/blob/main/src/contexts/CurrentUserContext.js) file. The remaining console log captures an error when there is no response from the "dj-rest-auth/user/" endpoint. This would only occur if a logged-in user was automatically logged out, in which case they would be redirected to the home page. Since this error does not need to be displayed to the user, the console log remains to satisfy the try-catch block rather than leaving the catch case empty.

### Accessibility and Performance

#### Lighthouse Testing

Towards the end of the development stage, I used Google Chrome's Lighthouse tool to check the app for accessibility, best practices, performance, and SEO. I tested each page individually to confirm all pages scored as highly as possible, especially in the accessibility category. This helped ensure the app is accessible to all users, or as many as possible.
In terms of performance, most pages scored highly, with a few pages reaching scores in the 80s. The lowest scores for performance came from the landing page, due to high-resolution images being used to showcase the app's features. I found this acceptable, as there was no excessive loading time or any other perceivable issues.
Best practices and SEO scored highly across all pages as well, although I believe improvements could be made in the future in all areas. The scores for the current MVP are generally good and acceptable for this stage.

The results for each pages lighthouse testing can be found below.

- [Landing Page](/docmedia/testing/lighthouse-landing.png)
- [Sign In](/docmedia/testing/lighthouse-signin.png)
- [Sign UP](/docmedia/testing/lighthouse-signup.png)
- [Project List / Home Page](/docmedia/testing/lighthouse-home.png)
- [Project Archive](/docmedia/testing/lighthouse-archive.png)
- [Project Details](/docmedia/testing/lighthouse-project.png)
- [Project Report](/docmedia/testing/lighthouse-report.png)
- [Create Project](/docmedia/testing/lighthouse-create-project.png)
- [Edit Project](/docmedia/testing/lighthouse-edit-project.png)
- [Task Details](/docmedia/testing/lighthouse-task.png)
- [Create Task](/docmedia/testing/lighthouse-create-task.png)
- [Edit Task](/docmedia/testing/lighthouse-edit-task.png)
- [Custom Tasks List](/docmedia/testing/lighthouse-custom-tasks-list.png)
- [Custom Task Details](/docmedia/testing/lighthouse-custom-task.png)
- [Create Custom Task](/docmedia/testing/lighthouse-create-custom-task.png)
- [Edit Custom Task](/docmedia/testing/lighthouse-edit-custom-task.png)
- [Profile Page](/docmedia/testing/lighthouse-profile.png)
- [Edit Profile](/docmedia/testing/lighthouse-profile-edit.png)


#### Wave Testing
In order to further validate the accessibility of the app, I carried out full WAVE testing for all pages. As this was done later in development, it helped catch issues such as missing "htmlFor" tags in form labels. Once the testing was complete and all relevant changes were made, the WAVE testing results were clear, with a couple of acceptable exceptions.
The Create Project page shows two screen errors due to missing form labels for the title and brief. These labels are hidden on-screen, as placeholders are used as visual labels, but the HTML labels are still accessible by screen readers.

The test results for each pages Wave testing can be found below.
- [Landing Page](/docmedia/testing/wave-home-details.png)
- [Sign In](/docmedia/testing/wave-signin-details.png)
- [Sign Up](/docmedia/testing/wave-signup-details.png)
- [Project List / Home Page](/docmedia/testing/wave-project-list.png)
- [Project Archive](/docmedia/testing/wave-archive.png)
- [Project Details](/docmedia/testing/wave-project-page.png)
- [Project Report](/docmedia/testing/wave-report.png)
- [Create Project](/docmedia/testing/wave-create-project.png)
- [Edit Project](/docmedia/testing/wave-project-edit.png)
- [Task Details](/docmedia/testing/wave-task-page.png)
- [Create Task](/docmedia/testing/wave-create-task.png)
- [Edit Task](/docmedia/testing/wave-task-edit.png)
- [Custom Tasks List](/docmedia/testing/wave-custom-tasks-list.png)
- [Custom Task Details](/docmedia/testing/wave-custom-task.png)
- [Create Custom Task](/docmedia/testing/wave-create-custom-task.png)
- [Edit Custom Task](/docmedia/testing/wave-custom-task-edit.png)
- [Profile Page](/docmedia/testing/wave-profile.png)
- [Edit Profile](/docmedia/testing/wave-profile-edit.png)

### User Testing
For user testing, I asked my family and colleagues to use the app and provide feedback where possible. The main feedback was that the UI is relatively simple, but the functionality is complete and versatile. This was expected, as it aligned with the goal for the Free Flow App MVP.

The only bug found was related to the profile image. A user could not add a custom image to their profile, and the form would not submit if they attempted to do so. This issue was discovered in the final development stages. Although I spent time trying to resolve it, I was unable to find a fix within the available timeframe. Since the profile image was not a critical feature of the app, I decided to remove the button for adding a custom image in the MVP stage, with plans to revisit it post-MVP. As I followed an Agile approach and the MoSCoW method, this feature remains a candidate for future implementation.

When testing the app with my tutor, they pointed out that there was no failsafe error message if the API became non-functional, which resulted in React-generated error messages being displayed. With this in mind, I added a failsafe error message to all pages in case of a catastrophic failure. This ensures that users remain within the app, receive a custom error message, and can still navigate the app.

### Unit Testing
When considering unit testing for the project, I had kept it in mind as a stretch goal, but manual testing was the highest priority. This approach allowed me to check the full functionality and flow of the app from the front end. Due to time limitations, I was unable to write extensive unit tests for the project, but I did create a single unit test file for the Django API.
This test file checks that a user can sign up, log into the app, and that a profile is generated upon sign-up. An image of the testing file can be found below, and the file itself can be accessed at [API testing](https://github.com/KyleMardell/freeflow-api/blob/main/profiles/test_views.py)

![Unit tests](/docmedia/testing/unit-test.png)

### Manual Testing
Below, I have provided a detailed table outlining all the manual testing conducted for the app. This includes both front-end and back-end testing to ensure that all pages, buttons, and links are displayed correctly, as well as verifying that all API endpoints function as expected.
I conducted thorough testing on all forms across the app, as forms are often where the most common issues and bugs arise. Back-end testing was performed both before and after front-end development to ensure a seamless integration between the two.
No bugs were found in the final version of the app during testing. All API endpoints functioned as expected, with the exception of the user image upload feature, which is detailed at the bottom of the manual testing file. This feature was removed from the final version due to time constraints but will be considered for future implementation.

| Feature | Expected Outcome | Test Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Nav Bar |
| Menu burger icon (mobile/tablet) | Displays expanded menu | Clicked menu icon | Expanded menu displayed | Pass |
| Logged Out |
| Logo text link | When clicked, redirects to the landing page | Clicked logo | Redirected to landing page | Pass |
| Logo text link: hover (desktop) | Changes curser to pointer | Hovered mouse over logo | Curser changed to pointer | Pass |
| Home menu link | When clicked, redirects to the landing page | Clicked link | Redirected to landing page | Pass |
| Home menu link: hover (desktop) | Changes curser to pointer, text bold | Hovered mouse over link | Curser changed to pointer, text bold | Pass |
| Log In menu link |  When clicked, redirects to the Log In page | Clicked link | Redirected to Log In page | Pass |
| Log In menu link: hover (desktop) | Changes curser to pointer, text bold | Hovered mouse over link | Curser changed to pointer, text bold | Pass |
| Sign Up menu link |  When clicked, redirects to the Sign Up page | Clicked link | Redirected to Sign Up page | Pass |
| Sign Up menu link: hover (desktop) | Changes curser to pointer, text bold | Hovered mouse over link | Curser changed to pointer, text bold | Pass |
| Logged In |
| Logo text link | When clicked, redirects to the home / projects page | Clicked logo | Redirected to home / projects page | Pass |
| Home menu link | When clicked, redirects to the home / projects page | Clicked link | Redirected to home / projects page | Pass |
| Profile menu link | When clicked, redirects to the profile page | Clicked link | Redirected to profile page | Pass |
| Profile menu link: hover (desktop) | Changes curser to pointer, text bold | Hovered mouse over link | Curser changed to pointer, text bold | Pass |
| Custom Tasks menu link | When clicked, redirects to the Custom tasks page | Clicked link | Redirected to Custom tasks page | Pass |
| Custom Tasks menu link: hover (desktop) | Changes curser to pointer, text bold | Hovered mouse over link | Curser changed to pointer, text bold | Pass |
| Project Archive menu link | When clicked, redirects to the Project archive page | Clicked link | Redirected to Project archive page | Pass |
| Project Archive menu link: hover (desktop) | Changes curser to pointer, text bold | Hovered mouse over link | Curser changed to pointer, text bold | Pass |
| Sign Out menu link |  When clicked, displays sign out confirmation modal | Clicked sign out | Sign Out confirmation modal displayed | Pass |
| Sign Out menu link: hover (desktop) | Changes curser to pointer, text bold | Hovered mouse over link | Curser changed to pointer, text bold | Pass |
| Sign Out modal: sign out |  When clicked, signs out the user and redirects to the landing page | Clicked sign out | User signed out and redirected to the landing page | Pass |
| Sign Out modal: cancel |  When clicked cancels the signing out | Clicked cancel | User signed out cancelled | Pass |
| Landing Page |
| Sign Up Now button 1 | When clicked redirects to the sign up page | Clicked button | Redirected to the sign up page | Pass |
| Sign Up Now button 2 | When clicked redirects to the sign up page | Clicked button | Redirected to the sign up page | Pass |
| Home / Projects list page |
| Projects list: New user | "No projects" message displayed | Navigate to home page as a newly signed up and in user | "No projects" message displayed | Pass |
| Projects list: Existing user with projects | List of projects displayed | Navigate to home page an existing user | Displayed list of projects | Pass |
| Create New Project button | Redirected to create project form | Clicked button | Create project form displayed | Pass |
| Create New Project button: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed | Pass |
| Project Preview / Details Page Link | Redirected to project details page | Clicked link | Clicked projects details page displayed | Pass |
| Project Preview / Details Page Link: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed | Pass |
| Project Details Page |
| New project: no tasks message | When a new project is created a "no tasks" message is displayed before any tasks are added | Navigated to new project page | "No tasks" message displayed | Pass |
| Add task button | Redirected to create task form | Clicked button | Create task form displayed | Pass |
| Add task button: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed | Pass |
| Edit project button | Redirected to edit project form | Clicked button | Edit project form displayed | Pass |
| Edit project button: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed | Pass |
| Delete project button | Delete project confirmation modal displayed | Clicked button | Delete project modal displayed | Pass |
| Delete project button: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed | Pass |
| Delete project modal: delete | When clicked deletes the project | Clicked cancel | Project deleted | Pass |
| Delete project modal: cancel | When clicked cancels deleting the project | Clicked cancel | Delete cancelled | Pass |
| Generate report button | Redirected to project report page | Clicked button | Project report displayed | Pass |
| Generate report button: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed | Pass |
| Return to projects button | Redirects to projects list | Clicked link | Redirected to projects list page | Pass |
| Return to projects button: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed |
| Task Preview / Details Page Link | Redirected to task details page | Clicked link | Clicked tasks details page displayed | Pass |
| Task Preview / Details Page Link: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed |
| Task Details Page |
| Edit task button | Redirected to edit task form | Clicked button | Edit task form displayed | Pass |
| Edit task button: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed | Pass |
| Delete task button | Delete task confirmation modal displayed | Clicked button | Delete task modal displayed | Pass |
| Delete task button: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed | Pass |
| Delete task modal: delete | When clicked deletes the task | Clicked cancel | task deleted | Pass |
| Delete task modal: cancel | When clicked cancels deleting the task | Clicked cancel | Delete cancelled | Pass |
| Return to project button | Redirects to project details page | Clicked link | Redirected to project details page | Pass |
| Return to project button: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed |
| Custom Tasks Page |
| Custom tasks list: New user | "No Custom tasks" message displayed | Navigate to custom tasks as a newly signed up and in user | "No Custom tasks" message displayed | Pass |
| Custom tasks list: Existing user with Custom tasks | List of Custom tasks displayed | Navigate to custom tasks page as an existing user | Displayed list of Custom tasks | Pass |
| Create custom task button | Redirected to create custom task form | Clicked button | Create custom task form displayed | Pass |
| Create custom task button: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed | Pass |
| Custom task Preview / Details Page Link | Redirected to custom task details page | Clicked link | Clicked custom tasks details page displayed | Pass |
| Custom task Preview / Details Page Link: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed |
| Project Archive Page |
| Projects archive list: No completed projects | "No projects" message displayed | Navigate to project archive as a newly signed up and in user | "No projects" message displayed | Pass |
| Projects archive list: With completed projects projects | List of projects displayed | Navigate to project archive an existing user | Displayed list of completed projects | Pass |
| Project Preview / Details Page Link | Redirected to project details page | Clicked link | Clicked projects details page displayed | Pass |
| Project Preview / Details Page Link: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed | Pass |
| Project Report Page |
| Project Report | Time and cost data calculated and displayed | Navigated to a project report | Report of project and task costs and times displayed | Pass |
| Cancel button | Redirects to the project page | Clicked link | Redirected to the project page | Pass |
| Cancel button: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed |
| Forms |
| Create Project Form |
| Create project form: missing title | Error displayed | Submitted form with missing title | Error displayed | Pass |
| Create project form: title only | Project created | Submitted form with title only | Project created | Pass |
| Create project form: title and brief only | Project created | Submitted form with title and brief only | Project created | Pass |
| Create project form: title, brief and hourly rate only | Project created | Submitted form with title, brief and hourly rate only | Project created | Pass |
| Create project form: all fields filled | Project created | Submitted form with all fields | Project created | Pass |
| Cancel button | Redirects to the projects list | Clicked link | Redirected to the projects list page | Pass |
| Edit Project Form |
| Edit project form | Project data fields populated | Navigated to a projects edit form | Existing data in relevant fields | Pass |
| Edit project form: missing title | Error displayed | Submitted form with missing title | Error displayed | Pass |
| Edit project form: missing date | Error displayed | Submitted form with missing date | Error displayed | Pass |
| Edit project form: title and date only | Project Edited | Submitted form with title and date only | Project Edited | Pass |
| Edit project form: title, date and brief only | Project Edited | Submitted form with title, date and brief only | Project Edited | Pass |
| Edit project form: all fields filled | Project Edited | Submitted form with all fields | Project Edited | Pass |
| Cancel button | Redirects to the project page | Clicked link | Redirected to the project page | Pass |
| Create Task Form |
| Create task form: missing title | Error displayed | Submitted form with missing title | Error displayed | Pass |
| Create task form: title only | task created | Submitted form with title only | Task created | Pass |
| Create task form: title and description only | task created | Submitted form with title and description only | Task created | Pass |
| Create task form: title, description and estimated time only | task created | Submitted form with title, description and estimated time only | Task created | Pass |
| Create task form: all fields filled | task created | Submitted form with all fields filled | Task created | Pass |
| Create task form: custom tasks select | No custom tasks message displayed | Clicked select box with no custom tasks created | No custom tasks message displayed | Pass |
| Create task form: custom tasks select | Custom task info entered into relevant fields | Selected a custom task | Task input fields populated with custom task data | Pass |
| Submit button: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed |
| Cancel button | Redirects to the project page | Clicked link | Redirected to the project page | Pass |
| Cancel button: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed |
| Edit task form |
| Edit task form: missing title | Error displayed | Submitted form with missing title | Error displayed | Pass |
| Edit task form: missing date | Error displayed | Submitted form with missing date | Error displayed | Pass |
| Edit task form: title and date only | task edited | Submitted form with title and date only | Task edited | Pass |
| Edit task form: title, description and date only | task edited | Submitted form with title, description and date only | Task edited | Pass |
| Edit task form: title, description, estimated time and date only | task edited | Submitted form with title, description, estimated time and date only | Task edited | Pass |
| Edit task form: all fields filled | task edited | Submitted form with all fields filled | Task edited | Pass |
| Edit task form: custom task completed | Custom task data updated | Submitted form with status as complete and an entered actual time | Custom task data updated | Pass |
| Submit button: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed |
| Cancel button | Redirects to the task page | Clicked link | Redirected to the task page | Pass |
| Cancel button: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed |
| Create custom task form |
| Create custom task form: missing title | Error displayed | Submitted form with missing title | Error displayed | Pass |
| Create custom task form: title only | Custom task created | Submitted form with title only | Custom task created | Pass |
| Create custom task form: title and description only | Custom task created | Submitted form with title and description only | Custom task created | Pass |
| Create custom task form: all fields filled | Custom task created | Submitted form with all fields filled | Custom task created | Pass |
| Submit button: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed |
| Cancel button | Redirects to the custom tasks list page | Clicked link | Redirected to the custom tasks page | Pass |
| Cancel button: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed |
| Edit Custom Task Form |
| Edit custom task form: missing title | Error displayed | Submitted form with missing title | Error displayed | Pass |
| Edit custom task form: title only | Custom task edited | Submitted form with title only | Custom task edited | Pass |
| Edit custom task form: title and description only | Custom task edited | Submitted form with title and description only | Custom task edited | Pass |
| Edit custom task form: all fields filled | Custom task created | Submitted form with all fields filled | Custom task edited | Pass |
| Submit button: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed |
| Cancel button | Redirects to the custom tasks list page | Clicked link | Redirected to the custom tasks page | Pass |
| Cancel button: hover (desktop) | Changes curser to pointer, colour changes | Hovered mouse over link | Curser changed to pointer, colour changed |
| API Testing |
| Profile created | Profile created on sign up | Sign up as a new user | Profile end point shown new user profile | Pass |
| Edit profile | profile edited | Entered edited profile data | profile data edited in profile detail API end point | Pass |
| New project | Created project displayed in projects list end point | Created a new project | Project displayed in project list end point | Pass |
| Edit project | Project edited | Entered edited project data | Project data edited in project detail API end point | Pass |
| Delete project | Project deleted | Used delete project API end point | Project removed from projects list | Pass |
| Project Details | Created project details end point | Entered created projects API end point | Project data displayed in project detail end point | Pass |
| New task | Created task displayed in projects tasks list end point | Created a new task | Task displayed in project tasks list end point | Pass |
| Edit task | Task edited | Entered edited task data | Task data edited in task detail API end point | Pass |
| Delete task | Task deleted | Used delete task API end point | Task removed from tasks list | Pass |
| Task Details | Created task details end point | Entered created task API end point | Task data displayed in task detail end point | Pass |
| New custom task | Created custom task displayed in custom tasks list end point | Created a new custom task | Custom task displayed in custom tasks list end point | Pass |
| Edit custom task | Custom task edited | Entered edited custom task data | Custom task data edited in custom task detail API end point | Pass |
| Delete custom task | Custom task deleted | Used delete custom task API end point | Custom task removed from custom tasks list | Pass |
| Custom task Details | Created custom task details end point | Entered created custom task API end point | Custom task data displayed in custom task detail end point | Pass |
| User profile image testing - feature removed from MVP due to bug |
| User image API end point | Image Updated | Added a custom image to the django rest api form | Image updated | Pass |
| User image form field: Front end profile edit form | Image updated | Added image to image file form field | Form not submitted | Fail |
