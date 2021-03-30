# 301 Entrance Exam

## Instructions:

### Make sure before starting to:

- share your video and screen.
- start your screen recording.
- you are not allowed to use previous projects, notes , or GitHub.
- you can use google search engine.
- you can use the console to debug.

## Time

- you have 2 hours to solve the exam

## Exam:

Create a new repository on your Github and name it 'ASAC-Blog'.

### Build a one-page website using HTML, CSS, and Javascript. The wireframe of the targeted page is attached to Slack.

You will be building a simple webpage "Articles Posts".

As a user, I would like to create articles and display them on the screen.

- Create a form in order to add the article author, title, content of the article subject of the article, day-month-year of creation, id and number of likes and save it somewhere.

- Number of likes should be generated randomly, at least 1 like and maximum of 500 likes.

- subjects of the article are: Coding, 3D printing, Cyber security, AI (use select element and provide the subjects as options inside the select. Values of options are the same as the name of the subject).

As a user, I would like to view the article id

- ID's should be created automatically and sequentially to each article starting from 1.

As a user, I would like to view articles title

As a user, I would like to set the same image for all the articles.

- The image will be attached to Slack

As a user, I would like to view the date of each article.

- day, month, year should be concatinated together in the following format ==> (dd-mm-yyyy).

As a user, I would like to view all of my articles that I already added.

- Whenever you add an article using the form, you should use the local storage in order to get all articles from it and render them to the side of the form using DOM.

As a user, I would like to view the total number of all articles that I have in the app.

- whenever you add a new article, you should display the updated value of totals on top of the articles section

Grades Rubric:

- HTML (5)

  - header: 1
  - form: 4

- CSS (20)

  - header: 2
  - background image: 2
  - form: 8
  - article card: 8

- JavaScript (60)

  - Constructor, properties and prototypes: 12
  - event listener and retreiving form data: 12
  - save data to local storage: 6
  - check and load data from local storage: 12
  - render articles: 12
  - calculate and show total: 6

- General (15)
  - code style (conventions, indentation,linting ..): 10
    - js conventions : 5
    - html semantic :3
    - linting: 2
  - deploying on GitHub Pages: 5

## Resources

- The used font is "Roboto" -> google font.
- The used colors are
  - rgba(96, 96, 96,0.6)
  - #000
- use the following [rules](https://github.com/LTUC/amman-201d10/blob/master/configs/.eslintrc.json) for linting
- use the following [rules](https://meyerweb.com/eric/tools/css/reset/) for reset css

## P.S.: you MUST use constructor,prototype and local storage in order to solve this problem PLUS when you refresh the page, all the data should be persistent.

## Submission Instructions:

- Submit the link of your GitHub repo.
- Submit your live URL after deploying your site with GitHub pages.
- Submit the link of your recorded video (you can upload it to your google drive or dropbox then share the link).
- After completing the exam, do **NOT** commit or push anything to your repo.
