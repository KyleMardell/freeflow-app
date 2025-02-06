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
Once development was almost complete I carried out HTML validation using the Web3 HTML Validator to check all HTML conformed to Web3 standards. In order to carry out these tests I used Google Chromes developer tools to view the rendered pages source code, and then enter this source code into the validator. This way I made sure the full HTML document for each page was valid.

The results of the HTML page validation can be found below.

### Accessibility and Performance

#### Lighthouse Testing

Towards the end of the development stage, I used Google Chrome's Lighthouse tool to check the app for accessibility, best practices, performance, and SEO. I tested each page individually to confirm all pages scored as highly as possible, especially in the accessibility category. This helped ensure the app is accessible to all users, or as many as possible.
In terms of performance, most pages scored highly, with a few pages reaching scores in the 80s. The lowest scores for performance came from the landing page, due to high-resolution images being used to showcase the app's features. I found this acceptable, as there was no excessive loading time or any other perceivable issues.
Best practices and SEO scored highly across all pages as well, although I believe improvements could be made in the future in all areas. The scores for the current MVP are generally good and acceptable for this stage.

The results for each pages lighthouse testing can be found below.

- [Landing Page]()
- [Sign In]()
- [Sign UP]()
- [Project List / Home Page]()
- [Project Archive]()
- [Project Details]()
- [Project Report]()
- [Create Project]()
- [Edit Project]()
- [Task Details]()
- [Create Task]()
- [Edit Task]()
- [Custom Tasks List]()
- [Custom Task Details]()
- [Create Custom Task]()
- [Edit Custom Task]()
- [Profile Page]()
- [Edit Profile]()


#### Wave Testing
In order to further validate the accessibility of the app, I carried out full WAVE testing for all pages. As this was done later in development, it helped catch issues such as missing "htmlFor" tags in form labels. Once the testing was complete and all relevant changes were made, the WAVE testing results were clear, with a couple of acceptable exceptions.
The Create Project page shows two screen errors due to missing form labels for the title and brief. These labels are hidden on-screen, as placeholders are used as visual labels, but the HTML labels are still accessible by screen readers.

The test results for each pages Wave testing can be found below.
- [Landing Page]()
- [Sign In]()
- [Sign UP]()
- [Project List / Home Page]()
- [Project Archive]()
- [Project Details]()
- [Project Report]()
- [Create Project]()
- [Edit Project]()
- [Task Details]()
- [Create Task]()
- [Edit Task]()
- [Custom Tasks List]()
- [Custom Task Details]()
- [Create Custom Task]()
- [Edit Custom Task]()
- [Profile Page]()
- [Edit Profile]()

### User Testing

### Unit Testing

### Manual Testing