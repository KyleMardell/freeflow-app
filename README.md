# Free Flow

[Responsive Image]()

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
- For those who sign up and log in for the first time, the experience should be seamless, with the design elements and the intuitive interface leaving a lasting impression. First-time users should be able to create a new project and add tasks with minimal effort, requiring little or no instructions. The goal is to make the app feel familiar and easy to navigate, ensuring that these users are encouraged to return and become long-term, active users.

### Returning visitor goals

- Returning visitors to Free Flow are likely users who were impressed with their initial experience and are now looking for more ways to track and manage their projects. The goal is to ensure the app remains intuitive and versatile, allowing users to easily create new projects, add tasks, and track progress seamlessly.
- Another key goal for returning visitors is to offer the ability to generate detailed project reports for time and cost analysis or invoicing purposes. By leveraging custom tasks, returning users can track the time taken for specific tasks across multiple projects. The app would then provide reports showing both the estimated and actual time and cost for a project, giving users the data they need for accurate project analysis and invoicing.
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

Having used project tracking apps without a cost feature before, I knew the kind of app I wanted to create, but with the added costing feature. This meant I didn’t need to spend a great deal of time researching design ideas, as I had a clear vision of how I wanted the app to look, feel, and navigate. To meet the timeframe, I decided to use Bootstrap for layout, navigation, and some interactive features. With my experience using Bootstrap in multiple previous projects, I felt I had a good understanding of its uses and opted to use React Bootstrap . This would save me time, as I was already familiar with how to implement features I’ve used before using the CSS and JavaScript link version of Bootstrap.

### Database
When designing the Free Flow app, I wanted to create a database schema that would allow for future stretch goals while also establishing a solid foundation. With this in mind, I spent a reasonable amount of time ensuring that my schema would not need corrections once I began coding, as this could take up unnecessary time required to complete the project on schedule. I used my previous project's database schema as an example and Excalidraw to create and double-check my schema before beginning the coding process. I also used my wireframe designs for each page to understand the fields needed for each database model. Visualizing forms and pages helped me write down the required fields for each model and ensure nothing was missing or overlooked.

After designing and verifying my database schema, I realized that I only needed four custom models, or five in total, including the user model. The four custom models are profile, project, task, and custom task. These models provide sufficient functionality while keeping the project within the scope of both the MVP and the project timeline. I had considered adding more fields to each model, as well as other models, but in order to stay within the project's scope, they seemed unnecessary or too ambitious at this stage. However, I would like to add additional features in the future, and some of these are outlined below.

The core of the schema revolves around the user. I will be using the Django Rest Framework, which includes user authentication and automatically generates a user model when using Django's built-in auth system. When implementing the profile model, I wanted the profile instance to be automatically created when a user signs up, ensuring every user has a profile. This profile will hold information about the user/freelancer or their business and will primarily be used to create a professional-looking business header for reports and invoicing.

The user can create a project, which will contain a title, brief, hourly rate, and completion date. I wanted the app to have a reasonable number of features without being overloaded with unnecessary details. To achieve this, I kept the model fields as simple as possible while still providing the essential features. For example, I considered adding a client name or contact details, but I decided this information could be included in the brief, allowing for more flexibility while maintaining a simpler model.

Tasks are added to a project and contain fields such as a title, description, completion date, estimated time, time taken, custom task link, and status. This model provides enough functionality to track tasks within a project, estimate the time required to complete the project, and compare it with the actual time taken. When combined with the project's hourly rate, this model also enables the calculation of project and task costs.

The custom task model contains fields like title, description, predicted time, number of uses, and the average, quickest, and longest times taken. These fields provide enough scope to track when a custom task has been used in a project, along with time-based data once the task is complete. This allows the user to view and analyze custom task data.

### Functionality

### Wireframes
The project wireframes were some of the initial designs for the app, before I even created the database schema. I began with the wireframes because I could then visualize the pages of the app and gain an understanding of its functionality before coding. This also helped to understand the database fields that would be required to achieve the types of functions I wanted the app to have.

As I wanted to keep to a mobile-first design, my plan was to limit the app width on larger screen sizes to easily create a similar look across all devices and therefore a familiar feeling for users switching between devices. Therefore, all my wireframe designs are based on mobile devices, as I knew I would not be creating wildly different designs for tablet or desktop devices, also reducing the design time required and helping to simplify the development stage.

Listed below are the wireframes for each of the pages I created with the project list as example.

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

When it came to beginning the project after conceptualization, I wanted to use an Agile development methodology to stay flexible throughout the process, while keeping a core feature set to maintain focus. This meant I was able to quickly change things, such as design or user experience features, to create a better overall experience. I started by creating two project boards inside the GitHub repo: one for user stories and epics, and another for project development to ensure all features were considered and allow me to effectively plan the development process using story points. I found that creating two separate project boards helped me to understand the scope of the project and plan my time effectively.

[Project Board](https://github.com/users/KyleMardell/projects/7)
[User Stories Board](https://github.com/users/KyleMardell/projects/8)

### User stories and epics

### Issues

## Features

### Existing features

#### Favicon

#### Nav bar

#### Landing page

#### Authentication pages

#### Home page / Projects list

#### Create project form

#### Edit project form

#### Project details page

#### Create task form

#### Edit task form

#### Task details

#### Custom tasks page

#### Create custom task form

#### Edit custom task form

#### Custom task details

#### 404 & 500 pages

### Defensive programming

### Future features

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


## Deployment

## Credits

### Django email field

I wanted to add an email field to the profile model when starting the project. After some light research, I found that Django has a built-in email field that conducts basic email validation checks, such as an '@' and a '.' after it. [Email field documentation](https://www.geeksforgeeks.org/emailfield-django-models/)

### Django decimal field

As I wanted to add an hourly rate and an amount of time in hours, I needed to add a field to my models that contains numbers. I used the DecimalField, as it also has the option to define max digits and decimal places, which was perfect for an hourly rate and amount of time. [Decimal field documentation](https://www.geeksforgeeks.org/decimalfield-django-models/)