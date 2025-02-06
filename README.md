# Free Flow - Freelance Project Tracker


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

Contents Here

## User Experience

### First time visitor goals
- First-time visitors to the Free Flow app are likely individuals who are either about to start a new project or want to better understand how a project works. The goal is to provide clear and engaging information about the app's features, along with examples of how it can be used for different types of projects, all presented on the landing page. The aim is to attract and convert these visitors into registered users who are eager to sign up and start using the app.
- Visitors should feel motivated to explore more features after their first use, potentially encouraging them to sign up for a full account.
- Visitors should gain a clear understanding of how Free Flow can help them improve project management, from estimation to tracking, making it a tool they'll want to use for future projects.
- For those who sign up and log in for the first time, the experience should be seamless, with professional design elements and an intuitive interface. First-time users should be able to create a new project and add tasks with minimal effort, requiring little or no instructions. The goal is to make the app feel familiar and easy to navigate, ensuring that these users are encouraged to return and become long-term, active users.

### Returning visitor goals
- Returning visitors to Free Flow are likely users who were impressed with their initial experience and are now looking for more ways to track and manage their projects. The goal is to ensure the app remains intuitive and versatile, allowing users to easily create new projects, add tasks, and track progress seamlessly.
- Another key goal for returning visitors is to offer the ability to generate detailed project reports for time and cost analysis or invoicing purposes. By using custom tasks, returning users can track the time taken for specific tasks across multiple projects. The app would then provide reports showing both the estimated and actual time and cost for a project, giving users the data they need for accurate project analysis and invoicing.
-  Returning users should have easy access to project and custom task reports to make better-informed decisions about future projects, helping them understand estimates and optimize task durations and costs.

### App use goals
- The primary goal of the app is to deliver a versatile, easy-to-use project management system, with an intuitive interface that allows users to quickly view key project information.
- The app is designed to help freelancers and project managers track project progress, better understand project scope, and generate reports or invoices.
- Accessibility is key, ensuring the app is usable by a diverse range of users through full accessibility measures and an inclusive design approach.
- The app should be optimized for quick access to important project details, enabling users to make informed decisions and track progress.
- The interface should prioritize user-friendliness, with an intuitive layout and functionality that minimizes the learning curve for new users while still offering advanced features for more experienced users.
- The app should support a range of project sizes and complexities, allowing users to easily scale from simple tasks to large, multi-task projects as their needs evolve.

## Design

### Concept and Epics
My inspiration for the concept of the Free Flow app came from friends or family members who have asked if I could make a website for their business in the future. With this in mind, I researched how freelance business people operate and the challenges they face when undertaking a new project. When researching technology-based freelancers, I found that there were often many steps in a project that could be broken down into tasks.

To better understand the scope of a project, I wanted to add estimated and final times to tasks. This way, a user could see the difference between estimated vs actual time to complete a project and provide a more accurate estimate for future projects. It would also allow users to identify which parts of a project took the most time and better understand how to prioritize tasks. The inspiration for assigning a time to a task came from my background as a BMW Vehicle Technician and VW Group Warranty Technician, where jobs or tasks are assigned a set time for billing purposes.
As a basic example, a full service may be broken down as shown below:
- Oil and filter change - 20 mins
- Fuel filter change - 15 mins
- Air filter change - 5 mins
- Cabin filter change - 10 mins
- Inspection time - 20 mins
- Total - 1 hour 10 mins

With the ability to add estimated and actual times to tasks, all that was needed to provide an hourly cost estimate was a project-assigned hourly rate. By adding an hourly rate to a project, a user could calculate the cost of a project using the rate and times. Although many freelance business people quote a project cost, there are many instances where an hourly rate is used. With this in mind, I broadened my initial target audience to include another type of freelancer, those paid hourly.

As I wanted to include an hourly rate for the project and calculate costs, I also wanted to generate a report of the project for invoicing or analysis. This would provide an easy way to see a full estimated project breakdown and even a completed project's full task and hourly breakdown.

Having used project tracking apps without a cost feature before, I knew the kind of app I wanted to create, but with the added costing feature. This meant I didn’t need to spend a great deal of time researching design ideas, as I had a clear vision of how I wanted the app to look, feel, and navigate. To meet the time frame, I decided to use Bootstrap for layout, navigation, and some interactive features. With my experience using Bootstrap in multiple previous projects, I felt I had a good understanding of its uses and opted to use React Bootstrap. This would save me time, as I was already familiar with how to implement features I’ve used before using the CSS and JavaScript link version of Bootstrap and only required some slight modification in code to use the same features.

### Database

#### Schema
When designing the Free Flow app, I wanted to create a database schema that would allow for future stretch goals while also establishing a solid foundation. With this in mind, I spent a reasonable amount of time ensuring that my schema would not need corrections once I began coding, as this could take up unnecessary time required to complete the project on schedule. I used my previous project's database schema as an example and [Excalidraw](https://excalidraw.com/) to create and double-check my schema before beginning the coding process. I also used my wireframe designs for each page to understand the fields needed for each database model. Visualizing forms and pages helped me write down the required fields for each model and ensure nothing was missing or overlooked.

- [Database Schema](/docmedia/design/schema/schema.png)

#### Models

After designing and verifying my database schema, I realized that I only needed four custom models, or five in total, including the user model. The four custom models are profile, project, task, and custom task. These models provide sufficient functionality while keeping the project within the scope of both the MVP and the project timeline. I had considered adding more fields to each model, as well as other models, but in order to stay within the project's scope, they seemed unnecessary or too ambitious at this stage. However, I would like to add additional features in the future, and some of these are outlined below.

The core of the schema revolves around the user. I will be using the Django Rest Framework, which includes user authentication and automatically generates a user model when using Django's built-in auth system. When implementing the profile model, I wanted the profile instance to be automatically created when a user signs up, ensuring every user has a profile. This profile will hold information about the user/freelancer or their business and will primarily be used to create a professional-looking business header for reports and invoicing.

The user can create a project, which will contain a title, brief, hourly rate, and completion date. I wanted the app to have a reasonable number of features without being overloaded with unnecessary details. To achieve this, I kept the model fields as simple as possible while still providing the essential features. For example, I considered adding a client name or contact details, but I decided this information could be included in the brief, allowing for more flexibility while maintaining a simpler model.

Tasks are added to a project and contain fields such as a title, description, completion date, estimated time, time taken, custom task link, and status. This model provides enough functionality to track tasks within a project, estimate the time required to complete the project, and compare it with the actual time taken. When combined with the project's hourly rate, this model also enables the calculation of project and task costs.

The custom task model contains fields like title, description, predicted time, number of uses, and the average, quickest, and longest times taken. These fields provide enough scope to track when a custom task has been used in a project, along with time-based data once the task is complete. This allows the user to view and analyze custom task data.

#### Entity Relationship Diagram (ERD)
Once I finalized the database schema, models, and their respective fields, I created an Entity Relationship Diagram (ERD) to visualize the relationships between models and ensure a well-structured schema before implementing it in Django. Establishing a solid schema and ERD early on allowed me to cover all required features of the app, preventing the need for major model changes later in development.
Find my ERD below.

- [ERD](/docmedia/design/schema/erd.png)

### Functionality

### Wire Frames
The project wire frames were some of the initial designs for the app, before I even created the database schema. I began with the wire frames because I could then visualize the pages of the app and gain an understanding of its functionality before coding. This also helped to understand the database fields that would be required to achieve the types of functions I wanted the app to have.

As I wanted to keep to a mobile-first design, my plan was to limit the app width on larger screen sizes to easily create a similar look across all devices and therefore a familiar feeling for users switching between devices. Therefore, all my wireframe designs are based on mobile devices, as I knew I would not be creating wildly different designs for tablet or desktop devices, also reducing the design time required and helping to simplify the development stage.

Listed below are the wire frames for each of the pages I created with the project list as example.

![Projects List](/docmedia/design/wireframes/wire-projecsts-list.png)
- [Project Details](/docmedia/design/wireframes/wire-project-detail.png)
- [Project Create/Edit](/docmedia/design/wireframes/wire-project-edit.png)
- [Project Report](/docmedia/design/wireframes/wire-project-report.png)
- [Projects Archive](/docmedia/design/wireframes/wire-archive.png)
- [Task Details](/docmedia/design/wireframes/wire-task-details.png)
- [Task Create/Edit](/docmedia/design/wireframes/wire-task-edit.png)
- [Custom Tasks List](/docmedia/design/wireframes/wire-custom-tasks-list.png)
- [Custom Task Details](/docmedia/design/wireframes/wire-custom-task-details.png)
- [Custom Task Create/Edit](/docmedia/design/wireframes/wire-custom-task-edit.png)
- [Profile Details](/docmedia/design/wireframes/wire-profile.png)
- [Profile Edit](/docmedia/design/wireframes/wire-profile-edit.png)
- [Nav Dropdown](/docmedia/design/wireframes/wire-nav.png)

### Colour scheme
When it came to choosing a colour scheme for the app, I wanted to keep it simple and professional looking. For this reason, I chose a predominantly blue colour palette with a pastel orange accent colour that I used mainly for cancel and return navigation buttons. I found the colour palette on [colorhunt.co](https://colorhunt.co/palette/001e6c0353975089c6ffaa4c)

![Colour Palette](/docmedia/design/colour-palette.png)

### Typography
For the typography, I opted for two professional-looking sans-serif style fonts to fit the style of a professional project tracking tool. I used "Contrail One" for the headings and "Ysabeau" for paragraph text, both from [Google Fonts](https://fonts.google.com/).

![Fonts](/docmedia/design/fonts.png)

## Agile and kanban
When it came to beginning the project after conceptualization, I wanted to use an Agile development methodology to stay flexible throughout the process, while keeping a core feature set to maintain focus. This meant I was able to quickly change things, such as design or user experience features, to create a better overall experience. I started by creating two project boards inside the GitHub repo: one for user stories and epics, and another for project development to ensure all features were considered and allow me to effectively plan the development process using story points. I found that creating two separate project boards helped me to understand the scope of the project and plan my time effectively. The project boards are linked and detailed below.

[Project Board](https://github.com/users/KyleMardell/projects/7)
[User Stories Board](https://github.com/users/KyleMardell/projects/8)

### User stories and epics
Once I had come up with the initial concept for the project, I began writing the epics and user stories to serve as a guide for the project, helping me understand the scope and set a roadmap for the development process. The user stories helped break down key features and prioritize essential functionality, ensuring that I stayed on track throughout the build.
By outlining these stories early on, I was able to maintain a clear development direction and ensure that every feature aligned with the overall purpose of the platform. The list of user stories also provided a strong foundation for testing, as I could validate each feature against its intended functionality.

Below I have listed the user stories and the relevant features that satisfy each one.

- Responsive Design - As a user, I want a responsive design so that I can use the app on mobile and desktop devices with consistent design and familiarity
    - Satisfied by all pages. See features section where each page is shown in mobile, tablet and desktop screen sizes.
    - [Features](#features)

- Landing Page - As a user, I want to visit an landing page so that I can understand the app, find out more information and sign up
    - Satisfied by the landing page
    - [Landing page](#landing-page)

- Nav Bar - As a user, I want to use an intuitive nav bar so that I can easily navigate to different pages
    - Satisfied by the nav bar
    - [Nav bar](#nav-bar)

- Sign Up - As a user, I want to sign up to the app so that I can use the apps logged in users features
    - Satisfied by the sign up page
    - [Auth pages](#authentication-pages)

- Sign In - As a user, I want to sign in to the app so that I can access my projects
    - Satisfied by the sign in page
    - [Auth pages](#authentication-pages)

- Sign Out - As a user, I want to sign out of the app so that I can make sure my data is secure when leaving the app
    - Satisfied by the sign out page
    - [Auth pages](#authentication-pages)

- Home Page - As a user, I want a clean and intuitive home page so that I can quickly and easily view and access my projects
    - Satisfied by the home page / projects list
    - [Home page / Project list](#home-page--projects-list)

- Projects List - As a user, I want to view a list of all my projects so that I can easily navigate between projects and quickly view its progress
    - Satisfied by the home page / projects list
    - [Home page / Project list](#home-page--projects-list)

- Create A Project - As a user, I want to create a new project with a title, brief, hourly rate and completion date so that I can track my work for a specific client
    - Satisfied by the create project form
    - [Project create form](#create-project-form)

- View a Projects Data - As a user, I want to view a projects details so that I can better understand what the project requirements are.
    - Satisfied by the project details page
    - [Project details page](#project-details-page)

- Edit Project - As a user, I want to edit a projects details so that I can keep the project up to date if any changes are needed
    - Satisfied by the edit project form
    - [Project edit form](#edit-project-form)

- Delete A Project - As a user, I want to delete a project so that I can remove it from my projects list
    - Satisfied by a button on the project details page
    - [Project details page](#project-details-page)

- Hourly Rate - As a user, I want to enter an hourly rate for a project so that I can calculate the projects costs
    - Satisfied by the create project form
    - [Project create form](#create-project-form)

- Project Report - As a user, I want to see a project report or summary so that I can evaluate the final project costs vs predicted costs, as well as efficiency and give the client a final cost report or invoice
    - Satisfied by the report page
    - [Report]()

- Projects Ordered By - As a user, I want to reorder my projects list so that I can prioritise projects based on urgency or importance
    - Not satisfied due to time limitations
    - API code contains the functionality ready to implement as a future feature.

- Add A Task To A Project - As a user, I want to add tasks to a project with a title, description, predicted time, time taken and completion date so that I can break down the project into manageable pieces.
    - Satisfied by the create task form
    - [Create task form](#create-task-form)

- View A Tasks Data - As a user, I want to view a tasks details so that I can better understand what the task requirements are.
    - Satisfied by the task details page
    - [Task details page](#task-details)

- Edit Tasks - As a user, I want to edit a task so that I can update task details in case any changes are needed
    - Satisfied by the edit task form
    - [Edit task form](#edit-task-form)

- Delete A Task - As a user, I want to delete a task from a project so that I can remove unnecessary tasks
    - Satisfied by a button on the task details page.
    - [Task details page](#task-details)

- Mark A Task As Complete - As a user, I want to mark a task as completed so that I can track the progress on a project and easily see which task are completed vs remaining
    - Satisfied by the edit task form. A user must edit to task details and change the status to complete.
    - [Edit task form](#edit-task-form)

- Tasks Predicted Time - As a user, I want to add a predicted time to a task so that I can estimate how long a project will take and its cost
    - Satisfied by the create task form. A user can set an estimated time on a task.
    - [Create task form](#create-task-form)

- Task Time Taken - As a user, I want to add the actual time taken to complete a task so that I can compare it with the predicted time and accurately cost projects
    - Satisfied by the edit task form. A user can only add the actual time value to an existing task by using the edit form and not on creation.
    - [Edit task form](#edit-task-form)

- Tasks Ordered By - As a user, I want to reorder tasks in a project so that I can prioritise tasks based on urgency or importance
    - Not satisfied due to time limitations
    - API code contains the functionality ready to implement as a future feature.

- Create Custom Task - As a user, I want to create custom reusable tasks with a title, description and predicted time so that I can quickly add frequently used tasks to a project.
    - Satisfied by the create custom task form
    - [Create custom task form](#create-custom-task-form)

- Custom Tasks List - As a user, I want to view a list of all my custom tasks so that I can manage my tasks and view frequently used tasks
    - Satisfied by the custom tasks page
    - [Custom tasks page](#custom-tasks-page)

- Delete Custom Tasks - As a user, I want to delete a custom task so that I can keep my custom tasks list up to date and delete any unnecessary tasks
    - Satisfied by a button on the custom task details page
    - [Custom task details page](#custom-task-details)

- Edit Custom Tasks - As a user, I want to edit a custom tasks details so that I can keep custom tasks up to date and make any changes needed
    - Satisfied by the edit custom task form
    - [Custom task edit form](#edit-custom-task-form)

- View A Custom Task's Data - As a user, I want to see each custom tasks details and data including number of uses, average time taken, quickest time, and longest time taken so that I can understand a task in more detail and more accurately estimate future project costs
    - Satisfied by the custom task details page
    - [Custom task details page](#custom-task-details)

- Custom Tasks Ordered By - As a user, I want to reorder my custom tasks list so that I can prioritise tasks by time or urgency
    - Not satisfied due to time limitations
    - API code contains the functionality ready to implement as a future feature.

- Create Profile - As a user, I want a profile to be automatically created when I sign up so that I can add my information to my profile.
    - Satisfied by a signal in Django connected to sign up. This automatically generates a profile page for every new user.
    - [Auth pages](#authentication-pages)

- View Profile - As a user, I want to view my profile so that I can see what current details it contains.
    - Satisfied by the profile page
    - [Profile page](#profile-page)

- Edit Profile - As a user, I want to edit my profile so that I can keep my information up to date
    - Satisfied by the profile edit form
    - [Profile edit form](#profile-edit-form)


### Issues
To track the development process, I broke each task down into an issue and added it to a separate project board. This approach allowed me to distinguish between user stories and development tasks, helping to manage my time and maintain a clear understanding of what needed to be done next. I created issues for each stage of development, including design, back-end, front-end, testing, and documentation tasks. This also helped ensure that no large features or steps were overlooked.

With the use of labels, issues were clearly categorized, helping to distinguish between design, code, and documentation, as well as front-end or back-end tasks. I also used milestones to represent sprints, with each sprint lasting an average of 3-5 days. Sprints were named according to each part of the development process, which helped keep track of the time and remaining workload. As I was working in an agile manner, some issues extended into the following sprint, or design elements were adapted from the initial plans.

## Features

### Existing features

#### Favicon

#### Nav bar
I opted for a simple, responsive, collapsible nav bar for the Free Flow app, as it provides an intuitive and recognisable way to navigate the site. There are different options for logged-in and logged-out users. Visiting users can only access the home page and the sign-in or sign-up pages, while logged-in users have access to all the app’s features.

![Nav burger button](/docmedia/screenshots/nav-collapsed-mob.png)

![Logged out nav mobile](/docmedia/screenshots/nav-out-mob.png)

![Logged in nav mobile](/docmedia/screenshots/nav-in-mob.png)

- [Logged out nav desktop](/docmedia/screenshots/nav-out-desk.png)
- [Logged in nav desktop](/docmedia/screenshots/nav-in-desk.png)

#### Landing page
For the landing page, I wanted to showcase some of the app's features to encourage potential users to sign up. Since it is a project tracker, I aimed to maintain the app's overall theme by creating a simple yet professional look that conveys the feel of a business tool. I included screenshots with feature highlights of the main pages to showcase its potential and diverse use cases. Additionally, I incorporated multiple sign-up buttons linked to the sign-up page as clear calls to action.

[Landing page mobile](/docmedia/screenshots/)

- [Landing page desktop](/docmedia/screenshots/)
- [Landing page tablet](/docmedia/screenshots/)

#### Authentication pages
As I was using the Django REST framework, I referenced the "Moments" [Code Institute](https://learn.codeinstitute.net/) app lessons when creating the sign-in and sign-up pages while adding my own styling to match the overall aesthetic of the app. These pages needed to be simple and intuitive, and I did not want to overcrowd them or over complicate the sign-up process by requiring an email. Since this is an MVP, my priority was to allow users to sign up and sign in with ease.

![Sign in mobile](/docmedia/screenshots/signin-mob.png) ![Sign up mobile](/docmedia/screenshots/signup-mob.png)

- [Sign in tablet](/docmedia/screenshots/signin-tab.png)
- [Sign up tablet](/docmedia/screenshots/signup-tab.png)

- [Sign in desktop](/docmedia/screenshots/signin-desk.png)
- [Sign up desktop](/docmedia/screenshots/signup-desk.png)

#### Home page / Projects list
When a user logs in, they are directed to the project list, which serves as the logged-in home page. This page displays a list of all currently active or draft projects, each showing basic information about the project and linking to the project's details page. I wanted the logged-in home page to provide a quick way to view and access all of a user's projects. Since project management is the core function of the app, I chose not to clutter the home page with unnecessary elements. By keeping the home page simple, users can easily understand how to create and view projects without needing instructions.

When a user first signs up for the app, a message indicating that there are no projects is displayed until a project is created.

![Projects list populated mobile](/docmedia/screenshots/project-list-populated-mob.png) ![Projects list empty mobile](/docmedia/screenshots/project-list-empty-mob.png)

- [Project list empty tablet](/docmedia/screenshots/project-list-empty-tab.png)
- [Project list populated tablet](/docmedia/screenshots/project-list-populated-tab.png)

- [Project list empty desktop](/docmedia/screenshots/project-list-empty-desk.png)
- [Project list populated desktop](/docmedia/screenshots/project-list-populated-desk.png)

#### Create project form
In order to add a project to the projects list, a user must use the Create Project form, accessible from the home page or the projects list page. The form includes the necessary information for a new project, such as a title to quickly recognize the project and a text area for the brief, which may contain additional details such as project goals. The user can set an hourly rate for a project if required for billing or estimation purposes, and finally, a due date to track when the project is expected to be completed. If any incorrect or missing information is provided, the user is shown an alert displaying a feedback message. Upon successful form submission, the user is redirected to the newly created project page, giving confirmation that the project has been created and allowing them to add tasks immediately without needing to navigate back to the project.

![Create project mobile](/docmedia//screenshots/create-project-mob.png)

- [Create project tablet](/docmedia/screenshots/create-project-tab.png)
- [Create project desktop](/docmedia/screenshots/create-project-desk.png)

#### Edit project form
The "Edit Project" form is very similar to the "Create Project" form, as all of the details that can be created can also be edited. The fields for when the project was created or last updated are not editable by the user. Once a project has been edited, the user is redirected to the project’s details page, where they can see the changes they have made in the details section, providing instant feedback that the project has been successfully edited.

![Edit project mobile](/docmedia/screenshots/edit-project-mob.png)

- [Edit project tablet](/docmedia/screenshots/edit-project-tab.png)
- [Edit project desktop](/docmedia/screenshots/edit-project-desk.png)

#### Project details page
Each project's detail page can be accessed by clicking the project preview in the project list and serves as a central hub for each project. From this page, the user can view the project's details, tasks, and navigation buttons for editing or deleting the project and adding a task. Additionally, a list of all the project's tasks is displayed in a similar fashion to the project list, creating a consistent and familiar experience across different pages. Each task preview displays prioritized information, such as the task's status or due date, allowing the user to quickly assess the task. Much like the project previews, the task previews can also be clicked to view a task's detailed information.

![Project page empty mobile](/docmedia/screenshots/project-page-mob.png) ![Project page with tasks mobile](/docmedia/screenshots/project-page-populated-mob.png)

- [Project page empty tablet](/docmedia/screenshots/project-page-tab.png)
- [Project page with tasks tablet](/docmedia/screenshots/project-page-populated-tab.png)
- [Project page empty desktop](/docmedia/screenshots/project-page-desk.png)
- [Project page with tasks desktop](/docmedia/screenshots/project-page-populated-desk.png)

#### Create task form
The create task form is accessed from within the project page by clicking the "Create Task" button. It contains input fields that accommodate a wide range of tasks, making it adaptable to any project. The user can set a title, description, due date, status, and estimated time, with the actual time field omitted, as this should only be updated upon task completion. These fields allow users to add details about each task, track the time taken versus the estimated time for better future estimation, and facilitate billing purposes when generating project reports. Additionally, users can import a custom task template, which automatically populates the title, description, and estimated time. When using a custom task template, the task is also linked to the custom task for time analysis and updating. When a task form has been successfully submitted, the user is redirected to the newly created task's details page, allowing the user to view the new task information and letting them know the task has been added to the project. If a form is submitted unsuccessfully, the user is shown an error alert below the appropriate input field.

![Create task form mobile](/docmedia/screenshots/create-task-mob.png)

- [Create task form tablet](/docmedia/screenshots/create-task-tab.png)
- [Create task form desktop](/docmedia/screenshots/create-task-desk.png)

#### Edit task form
The edit task form contains all the fields from the create task form, as well as an "actual time" field that allows the user to enter the time taken to complete a task. This field is only available in the edit task form, as it should only be filled out once a task is complete. If a custom task template has been used and the task is marked as complete, the entered actual time is used to update the time data for the custom task. When a task has been edited, the user is redirected to the task details page to let them know the task has been correctly updated.

![Edit task form mobile](/docmedia/screenshots/edit-task-mob.png)

- [Edit task form tablet](/docmedia/screenshots/edit-task-tab.png)
- [Edit task form desktop](/docmedia/screenshots/edit-task-desk.png)

#### Task details
The task details page displays the user-entered task data, as well as the created and updated dates. From this page, the user can edit or delete the task using the relevant buttons. The task information, due date, and status are also clearly displayed. If a custom task template has been used, the custom task ID is shown to indicate that the task is linked to a custom task.

![Task page mobile](/docmedia/screenshots/task-page-mob.png)

- [Task page tablet](/docmedia/screenshots/task-page-tab.png)
- [Task page desktop](/docmedia/screenshots/task-page-desk.png)

#### Custom tasks page
The custom tasks page allows the user to view a list of all their custom tasks and create new ones. Similar to the project and task previews, the custom task preview displays basic task information in the list. Each preview can be clicked to navigate to the custom task details page. This consistent use of custom task previews creates a familiar experience across the app, allowing users to quickly and easily view their custom tasks.

![Custom tasks list empty mobile](/docmedia/screenshots/custom-tasks-list-empty-mob.png) ![Custom tasks list populated mobile]()

- [Custom tasks list empty tablet](/docmedia/screenshots/custom-tasks-list-empty-tab.png)
- [Custom tasks list populated tabler]()
- [Custom tasks list empty desktop](/docmedia/screenshots/custom-tasks-list-empty-desk.png)
- [Custom tasks list populated desktop]()

#### Create custom task form
To create a custom task, only three fields are required: a title, description, and estimated time. These are the only template-based fields necessary for reusable tasks, as the due date and actual times are project- and task-specific. The main function of custom tasks relies on the actual time data from completed tasks, which is why the time statistic fields cannot be manually updated by the user. This streamlined approach allows users to quickly and easily add new custom tasks with no unnecessary or overcomplicated information required, promoting greater versatility and a wider range of use cases. When a new custom task is created, the user is redirected to the custom task's details page. This confirms that the new custom task has been added to the custom tasks list and that the data is correct. If any required data is missing or incorrect, the user is shown an error alert below the appropriate input field.

![Create custom task form mobile](/docmedia/screenshots/create-custom-task-mob.png)

- [Create custom task form tablet](/docmedia/screenshots/create-custom-task-tab.png)
- [Create custom task form desktop](/docmedia/screenshots/create-custom-task-desk.png)

#### Edit custom task form
The edit custom task form contains the same three fields as the create task form, as the time data cannot be edited by the user. Once a task has been edited, the user is redirected to the custom task details page, providing instant feedback that the data has been updated.

![Custom task edit form mobile](/docmedia/screenshots/edit-custom-task-mob.png)

- [Custom task edit form tablet](/docmedia/screenshots/edit-custom-task-tab.png)
- [Custom task edit form desktop](/docmedia/screenshots/edit-custom-task-desk.png)

#### Custom task details
Custom tasks contain data that is automatically updated upon completion of tasks that have used a custom task template. The details of these tasks can be found on the custom task details page. Here, the user-entered title, description, and estimated time are displayed alongside the estimated time, longest time, quickest time, and number of uses. This allows the user to view the time-based statistics of a reused task across multiple projects, providing better estimation for future tasks. This way, a user can adjust the estimated time of a custom task based on their previous experience with other projects.

![Custom task page mobile](/docmedia/screenshots/custom-task-mob.png) ![Custom task page first use mobile](/docmedia/screenshots/custom-task-first-mob.png) ![Custom task page second use mobile](/docmedia/screenshots/custom-task-updated-mob.png)

- [Custom task page tablet](/docmedia/screenshots/custom-task-tab.png)
- [Custom task page first use tablet](/docmedia/screenshots/custom-task-first-tab.png)
- [Custom task page second use tablet](/docmedia/screenshots/custom-task-updated-tab.png)
- [Custom task page desktop](/docmedia/screenshots/custom-task-desk.png)
- [Custom task page first use desktop](/docmedia/screenshots/custom-task-first-desk.png)
- [Custom task page second use desktop](/docmedia/screenshots/custom-task-updated-desk.png)

#### Profile page
Upon signing up, each user is automatically assigned a profile page, created via a Django signal in the API. This means users do not need to manually create or delete their profiles. Profiles are generated upon account creation and removed if an account is deleted. The main purpose of the profile page is to include user details in project reports, with a future goal of enabling report exports to PDF or a similar format.
The profile displays a default user image and fields for a name, bio, email address, and phone number. This setup allows for flexibility, as users can choose to display business or professional details or opt for a more personal approach with personal contact information. The bio field provides additional customization, allowing users to add a business tagline or a short personal introduction.

![Profile page mobile](/docmedia/screenshots/profile-mob.png)

- [Profile page tablet](/docmedia/screenshots/profile-tab.png)
- [Profile page desktop](/docmedia/screenshots/profile-desk.png)

#### Profile edit form
Since users cannot create or delete their profiles, only an edit profile form is required. This form allows users to update their profile information without being tied to their account details, giving them the flexibility to use either personal or business information.
The form includes fields for name, bio, email, and phone number. I initially planned to add the ability to upload a custom user image, but I encountered a bug with this feature later in development. Since it is not a critical feature of the app, I decided to remove it from the profile edit form for now. I plan to fix this post-MVP as a later implementation, as I believe it would enhance the report page if exported as an invoice.

![Profile edit form mobile]()

- [Profile edit form tablet]()
- [Profile edit form desktop]()

#### 404 page
If the user enters an incorrect URL in the browser, they are shown a 404 page that follows the site's design and simply displays a "404 Page Not Found" message. The navigation links and dropdown menu remain fully functional, allowing the user to easily navigate to another page.

![404 mobile](/docmedia/screenshots/mobile-404.png)

- [404 Tablet](/docmedia//screenshots/tablet-404.png)
- [404 Desktop](/docmedia//screenshots/desktop-404.png)

### Defensive programming
When considering defensive programming, I focused on establishing a strong foundation in the backend code early on, while also implementing frontend measures. Defensive programming is essential for both data security and user experience.
To ensure a secure foundation, I implemented checks in the API code for user requests. Since the app is designed for a single user rather than a social platform, each user should only be able to access the data they have created. With this in mind, all API views are restricted to return only data created by the requesting user, preventing unauthorized access to other users’ data. This approach was applied across all API views to ensure data security throughout the entire application.
An example of restricting the returned resources to the request users resources is shown below.

![Defensive programming api example](/docmedia/screenshots/defensive-api.png)


### Future features

#### Pagination
When finalizing the initial designs, I deliberately chose not to implement pagination, as the app is aimed at individuals and solo business owners. I anticipated that the average user would have only a few active projects at a time, each containing around 10–20 tasks. Given this, I initially did not see a need for pagination in the MVP stage.
However, during development, I realized that long-term users might accumulate a large number of completed projects, making pagination beneficial for the project archive page. Additionally, if I were to implement a shared account system in the future, users might have a significantly larger number of active projects and tasks. For this reason, I would consider adding pagination as a future feature to enhance the user experience when navigating large lists of projects or tasks.

#### Search and filters
In my initial designs, I included a search and filter feature for projects, tasks, and custom tasks. On the back end, I implemented functionality to search by title or description and filter by date and status. Although these were stretch goals, I wanted to have the back-end logic in place in case I had time to integrate the feature into the front end. In hindsight, there wasn’t enough time within the sprints to include this feature in the MVP. However, since the back-end setup is already in place, I plan to add it as a future enhancement.

#### Progress bars
Currently, project and task previews display basic text information beneath the relevant title. In the future, I would like to enhance this by adding a progress bar to both project and task previews, providing users with a more visual way to track progress at a glance. The task progress bar would compare the estimated time to the actual time taken, while the project progress bar would display the total estimated time of all tasks versus the accumulated time taken. This improvement would give users instant insights into the progress of their tasks and projects.

## Development
When it came to the development of the app, using a Django back end and a React front end provided a large amount of functionality. As this was the chosen tech stack, most of the development was done using a Gitpod workspace and Google Chrome Developer Tools. Once I had a solid design and database model in place, I began by developing the back end API in Django, carrying out full manual testing before deployment to ensure there were no errors or known bugs before beginning to develop the front end. I also wrote some basic unit tests.


### Django API
The back end API is made using the Django Rest Framework as well as a number of other helper packages. There are four custom models with corresponding serializers, views, and URLs. There are models for profiles, projects, tasks, and custom tasks. A user profile is generated automatically when a user signs up, and all other models have full C.R.U.D. functionality using Django's Rest Framework API views.

#### Profile model
The profile model contains user input fields for name, bio, email address, phone number, and profile image. I chose these fields as the app is a project tracker that will generate reports or invoices, and having this type of information on one of these documents provides both a professional look and adheres to general industry standards. There are additional fields contained in the model for user ID as a foreign key, as well as auto-generated "created on" and "updated on" time fields.
As the profile model is generated when a user signs up, the user input fields are all optional. This means a user can only edit a profile and cannot create or delete one without creating or deleting the user account.

#### Project model
The project model contains user input fields for title, brief, hourly rate, due date, and status. A project's status can be set as draft, active, or complete. I chose to add an hourly rate in order to provide functionality for estimating and calculating a project's costs. The only required field is the title, and all other fields are optional. This means a user can quickly create a new project without needing to enter all the information at once, allowing it to be updated later. This will also provide a better user experience, as a user may want to quickly put together a project to give a client an "on the fly" estimate.

#### Custom tasks model
The custom tasks model contains user input fields for title, description, and estimated time. The remaining fields—frequency, average, longest, and quickest times—will be updated when a task that used a custom task template has been completed. This means the user can see how many times a custom task template has been used and access its time-related analytical data through the custom task model fields. This, in turn, should lead to better estimations on projects through task data. By knowing the average time taken to complete a task across a given frequency, the user can then update the estimated time accordingly.

#### Tasks model
The tasks model contains user input fields for title, description, due date, estimated time, actual time, status, and custom task ID. This model provides all the basic features to track a task's and project's progress. Additionally, with the use of a custom task ID, the user can track when a custom task has been used to update the custom task data. Since tasks are the core of the app, I wanted to keep the model as simple as possible while offering features for analytics. Therefore, I tried to use a small number of fields that offer a good amount of functionality.

## Testing

Full testing can be found in the [TESTING](/TESTING.md) file.

## Deployment

To deploy the Free Flow App, several steps must be followed to ensure a fully functional online or local version. A prerequisite is having a functioning database. For this project, I used a PostgreSQL database provided by Code Institute along with the provided database URL. Once the database URL is available, the app can be cloned, set up, and deployed either locally or online using a hosting service like Heroku.

The steps required to deploy the app are outlined below.

### GitHub

#### Fork repositories

- To fork the repositories
    - Login or Sign Up to GitHub
    - Navigate to the front end repository for this project [Free Flow](https://github.com/KyleMardell/freeflow-app)
    - Click the "Fork" button on the top right of the page
    - Navigate to the back end API repository for this project [Free Flow API](https://github.com/KyleMardell/freeflow-api)
    - Click the "Fork" button on the top right of the page

#### Clone repositories

- To clone the repositories
    - Login or Sign Up to GitHub
    - Navigate to the front end repository for this project [Free Flow](https://github.com/KyleMardell/bee-teach)
        - Click on the "Code" button
        - Select how you would like to clone (HTTPS, SSH, or GitHub CLI)
        - Copy your chosen link
        - Open the terminal of your code editor or IDE
        - Change the current working directory to the location you want to use for the cloned directory
        - Type "git clone" into the terminal followed by the copied link and press enter.
    - Navigate to the back end API repository for this project [Free Flow API](https://github.com/KyleMardell/freeflow-api)
        - Repeat the steps as shown for the front end repository

### API Deployment

#### Django settings

- Django Settings
    - Go to the settings.py file in the Free Flow Django Project
    - Find the "ALLOWED_HOSTS" and replace the first entry with your development servers URL for security purposes (in my case, starting "8000-kylemardell-freeflow")
    - Find the "CSRF_TRUSTED_ORIGINS" and replace the first entry with your own development server URL for security purposes (in my case, starting "8000-kylemardell-freeflow")
    - If deploying locally, install the requirements with the command "pip install -r requirements.txt" in the terminal of your development environment.
    - Migrate the database to the newly linked database with the command "python manage.py makemigrations" and then "python manage.py migrate"
    - Create a new superuser with the command "python manage.py createsuperuser" and add a username and password.

- ENV File (NOT TO BE PUBLICLY SHARED, confirm env.py is added to your .gitignore file)
    - In order to run the app locally, you will need to create a file named 'env.py' in the base project folder or same directory as the requirements.txt file.
    - add 'import os' at the top of the file/page
    - add the code 'os.environ.setdefault("DATABASE_URL", "postgres://my_database_url")', making sure to add your own database url in place of 'my_database_url'
    - add the code 'os.environ.setdefault("SECRET_KEY", "my_secret_key")', making sure to add your own secret key in place of 'my_secret_key'
    - add the code 'os.environ.setdefault("CLOUDINARY_URL", "cloudinary://my_cloudinary_url")', making sure to add your own cloudinary url in place of 'my_cloudinary_url' described below

#### Cloudinary

- In order to set up the Free Flow apps profile images, an image hosting service is needed to host the images. In this case I used [Cloudinary](https://cloudinary.com/).
    - Login or sign up with your [Cloudinary](https://cloudinary.com/) account
    - Navigate to the dashboard
    - Click "Go to API Keys" at the top of the page
    - Locate the "API environment variable" / Cloudinary URL at the top of the page
    - Copy your "API Key" and "API Secret" into the Cloudinary URL for use in the Heroku config var settings

#### Heroku

- Deploy to Heroku
    - Login or sign up with your [Heroku](https://heroku.com) account
    - Navigate to the dashboard
    - Click "New" at the top right of the screen, select "Create new app"
    - Enter a unique name (I used freeflow-api)
    - Choose a region
    - Click "Create app"
    - Navigate to the "Settings" tab
    - Navigate to "Buildpacks"
    - Click "Add buildpack"
    - Add "Python" as a buildpack (this ensures python is used to execute the app)
    - Click "Reveal Config Vars"
    - Add a new config var with key "DISABLE_COLLECTSTATIC" and a value of 1.
    - Add a new config var with key "CLOUDINARY_URL" and the value from your Cloudinary URL detailed above, beginning "cloudinary://" (this links your cloudinary account to the heroku app)
    - Add a new config var with key "DATABASE_URL" and add the URL of your database, in this case beginning "postgres://" (this links your database to the heroku app)
    - Add a new config var with key "SECRET_KEY" and add your own secret key, e.g. "th15-15-4-53CR3T-K3y" (this is essentially a private password for the heroku app)
    - Add a new config var with key "ALLOWED_HOST" and add the URL of your deployed API Heroku app (this will need to be done once the API has been deployed to Heroku)
    - Add a new config var with key "CLIENT_ORIGIN" and add the URL of your deployed front end Heroku app (this will need to be done once the front end has been deployed to Heroku).
    - Add a new config var with key "CLIENT_ORIGIN_DEV" and add the URL of your deployed development environment (This allows you to access the API from your development environment).
    - Navigate to the "Deploy" tab
    - Select GitHub as deployment method
    - Authenticate with GitHub account
    - Search for repo name (BeeTeach), click "Connect"
    - Optionally enable "Automatic deploys"
    - Click "Deploy branch" under "Manual Deploy" ensuring main branch is selected
    - Click "Open App" at the top of the screen to get the deployed apps URL for use in the config vars.

### Front End Deployment

#### Heroku

- Deploy to Heroku
    - Login or sign up with your [Heroku](https://heroku.com) account
    - Navigate to the dashboard
    - Click "New" at the top right of the screen, select "Create new app"
    - Enter a unique name (I used freeflow-app)
    - Choose a region
    - Click "Create app"
    - Navigate to the "Deploy" tab
    - Select GitHub as deployment method
    - Authenticate with GitHub account
    - Search for repo name (BeeTeach), click "Connect"
    - Optionally enable "Automatic deploys"
    - Click "Deploy branch" under "Manual Deploy" ensuring main branch is selected
    - Click "Open App" at the top of the screen to view the app

## Credits

### Django email field
I wanted to add an email field to the profile model when starting the project. After some light research, I found that Django has a built-in email field that conducts basic email validation checks, such as an '@' and a '.' after it. [Email field documentation](https://www.geeksforgeeks.org/emailfield-django-models/)

### Django decimal field
As I wanted to add an hourly rate and an amount of time in hours, I needed to add a field to my models that contains numbers. I used the DecimalField, as it also has the option to define max digits and decimal places, which was perfect for an hourly rate and amount of time. [Decimal field documentation](https://www.geeksforgeeks.org/decimalfield-django-models/)

### Code Institute
Having learned how to create a social media app through Code Institute’s lessons on Django Rest Framework and React, I drew inspiration from the coding methods taught in the course. I also referred to the sign-in and sign-up pages from the "Moments App" tutorial, as authentication pages tend to follow a similar structure across many apps. This approach allowed me to quickly set up authentication, enabling me to focus on other, more unique features of the app. Additionally, I took inspiration from components like user context and more complex hooks, which contributed to the overall user experience.