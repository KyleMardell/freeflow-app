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