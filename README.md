# AutoInsta <!-- omit in toc -->

    For our project, we decided to create an Instagram post automater that will allow the user to schedule and automate their posts. For instance, if someone wants to make a post for their friend’s birthday but is worried they will forget, they can use our website to automate the process. This is a web application designed to help individuals schedule and automate posting to Instagram. It allows users to create posts, schedule their upload time, and manage their upcoming and past scheduled posts. By using this app, users can ensure they never forget an important post and save time by avoiding repetitive posting.

- [Installation✨](#installation✨)
- [Setup✨](#setup✨)
- [Usage✨](#usage✨)
- [Technologies✨](#technologies✨)
- [LIVE✨](#LIVE✨)
- [Contributing✨](#contributing✨)
- [Shouts-Out✨](#shouts-out✨)
- [License✨](#license✨)

## Installation✨

Visit github and clone the ssh or http [HERE](https://github.com/MeyerTalon/AutoInsta) to install, or contribute.

To install the application, follow these steps:

```bash
git clone https://github.com/MeyerTalon/AutoInsta.git [destination]
Clone the repository to your local machine.
Navigate to the project directory in the terminal.
Run npm install to install the necessary dependencies.
```

## Setup✨

1. Create a developer Instagram Account to obtain the necessary dev tools and API credentials. Follow the Instagram API documentation for instructions on how to create an account and obtain the required credentials.
2. Set up the environment variables. Create a .env file in the root directory of the project and add the following variables:

```
INSTAGRAM_CLIENT_ID=your-client-id
INSTAGRAM_CLIENT_SECRET=your-client-secret
INSTAGRAM_REDIRECT_URI=your-redirect-uri
```

3. Replace the values with your actual Instagram API credentials.
4. Start the application:

```
npm start
```

## Usage✨

- Open your web browser and navigate to the landing page of the Instagram Scheduler app.
- Sign up or log in to your account to access your account details.
- On the main dashboard, you can view the upcoming posts you've created. You can also create and schedule new posts by clicking the "Create Post" button.
- When prompted to create a post, you can enter a topic caption, upload a related image, and provide a location if applicable.
- If you want to create a default post, click the "Create Default Post" button, and a random kitten picture will be automatically assigned.
- To schedule a post, select the desired upload time and click the "Schedule" button.
- To view past scheduled posts, navigate to the "Past Posts" section, where you can see a list of all the posts you've created and uploaded through the app.

## Technologies✨

| Plugin | README |
| ------ | ------ |

- Apollo Server - https://www.apollographql.com/docs/apollo-server/
- Apollo-server-js - https://www.npmjs.com/package/apollo-server-express
- express - https://www.npmjs.com/package/express
- graphql - https://graphql.org/
- mongoose - https://www.npmjs.com/package/mongoose

## LIVE✨

[Live deployed Heroku server]()

![alt]()
![alt]()
![alt]()
![alt]()
![alt]()
![alt]()

## Contributing✨

If you would like to contribute to this project, please reach out to the squad!

- @MeyerTalon
- @jacobgoreham
- @cmadrid4

...or please follow these guidelines:

- Fork this repository.
- Create a new branch with your changes: git checkout -b my-feature-branch
- Commit your changes: git commit -m "Add some feature"
- Push to the branch: git push origin my-feature-branch
- Submit a pull request.

## Shouts-Out✨

This application was built using Node.js and utilizes the following npm packages:
| Plugin | README |
| ------ | ------ |
Apollo Server - https://www.apollographql.com/docs/apollo-server/
Apollo-server-js - https://www.npmjs.com/package/apollo-server-express
express - https://www.npmjs.com/package/express
graphql - https://graphql.org/
mongoose - https://www.npmjs.com/package/mongoose

```bash
devDependencies
```

nodemon - https://www.npmjs.com/package/nodemon

- Acknowledgements
  The Instagram Scheduler app utilizes the Instagram API. Special thanks to Instagram for providing the necessary developer tools

## License✨

This project is licensed under the terms of the MIT license.
