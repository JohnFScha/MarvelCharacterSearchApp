# Marvel Character Search App Documentation

Welcome to the documentation page for the Marvel Character Search app. This page provides instructions on how to install and implement the app locally, as well as remotely. The app allows users to search for characters using Marvel's API, view character details, preview comic information, and manage favorite characters using cookies.

## Table of Contents

1.  [Local Installation](##Local-Installation)
2.  [Local Implementation](##Local-Implementation)
3.  [Remote Implementation](##Remote-Implementation)
4.  [Dependencies](##Dependencies)
5.  [How to Install Dependencies](##How-to-Install-Dependencies)
6.  [App Contents](##App-contents)

## Local Installation

To install the app locally, follow these steps:

1.  Clone the repository: You can clone the repository using the following command in your terminal or command prompt.

`git clone https://github.com/your-username/marvel-character-search.git` 

2.  Navigate to the project folder: Use the following command to move into the app's directory.

`cd marvel-character-search` 

3.  Install Node.js dependencies: Ensure you have Node.js and npm (Node Package Manager) installed on your system. Then, execute the following command to install the required dependencies.

`npm install` 

## Local Implementation

After installing the app locally, you can run it on your development server using the following command:

`npm run dev` 

The app should now be running on `http://localhost:3000` in your web browser. You can access it by opening the provided URL.

## Remote Implementation

To implement the app remotely, you will need to deploy it to a web server or hosting service. One popular option is to use Vercel or Netlify for easy deployment.

1.  Push your code to a remote repository: If you haven't already, push your app's code to a remote repository on GitHub, GitLab, or any other version control platform.
    
2.  Connect your repository to Vercel or Netlify: Both Vercel and Netlify provide straightforward integration with Git repositories. Follow the respective platform's instructions to connect your repository.
    
3.  Configure the deployment settings: Once connected, configure the deployment settings as needed, and select the branch you want to deploy.
    
4.  Deploy the app: Trigger the deployment process, and the app will be automatically deployed to a public URL provided by Vercel or Netlify.
    

## Dependencies

The Marvel Character Search app relies on the following dependencies:

-   "@headlessui/react": ^1.7.15
-   "@heroicons/react": ^2.0.18
-   "axios": ^1.4.0
-   "js-cookie": ^3.0.5
-   "react": ^18.2.0
-   "react-dom": ^18.2.0
-   "react-icons": ^4.10.1
-   "react-loader-spinner": ^5.3.4
-   "react-router-dom": ^6.14.1
-   "styled-components": ^6.0.5

Additionally, the app has devDependencies for development purposes:

-   "@types/react": ^18.2.14
-   "@types/react-dom": ^18.2.6
-   "@vitejs/plugin-react-swc": ^3.3.2
-   "autoprefixer": ^10.4.14
-   "eslint": ^8.44.0
-   "eslint-plugin-react": ^7.32.2
-   "eslint-plugin-react-hooks": ^4.6.0
-   "eslint-plugin-react-refresh": ^0.4.1
-   "postcss": ^8.4.26
-   "tailwindcss": ^3.3.3
-   "vite": ^4.4.0

## How to Install Dependencies

As mentioned earlier, the Node.js dependencies can be installed by running the following command within the app's directory:

`npm install` 

This will install all the required dependencies listed in the `package.json` file, allowing you to run the app locally or deploy it to a remote server.

Congratulations! You now have the Marvel Character Search app installed and ready to be implemented either locally or remotely. Have fun exploring Marvel's characters and comics!

## App contents

The app consist of three main parts:

### Search Bar

![searchbar](https://github.com/JohnFScha/MarvelCharacterSearchApp/assets/115885102/4ee829fc-baa5-438a-b84c-da4ffa6e6327)

The input takes a character's name or either a link to a marvel comic (i.e. : [The Mandalorian](https://www.marvel.com/comics/issue/107556/star_wars_the_mandalorian_season_2_2023_2)). The Marvel Logo links directly to Marvel's home page. The star icon on the rightmost corner links to the Favorites section, and it will reflect the state of the storage dinamically: if it's outlined, the fav section is empty. If it's solid, it means at least one character has been stored in the fav section.

### Character List

![characters](https://github.com/JohnFScha/MarvelCharacterSearchApp/assets/115885102/e8ccf0eb-44fb-4fc5-84ad-b2061df53a1f)

If a character's name (or a part of it) was typed into the search bar, the list will reflect every character that matches the search. Clicking on a character's card will open up a modal with info on that character's comic book appearences. Clicking on the star icon on the top right corner of the card, will fav that character, adding it to the list of favorites stored in the favorites section linked on the searchbar. The star icon will reflect the status of that character's fav. Solid meaning it's already faved, outlined meaning it's not yet so.

#### Comic's modal.

![modal](https://github.com/JohnFScha/MarvelCharacterSearchApp/assets/115885102/c73b8890-bac1-41bd-b39d-34f1f78d142e)

If one click's on a charcter's image, it will open a modal containing each of the comics where that character has appeared in. Clicking on any of those or typing in a marvel comic link will lead to the section described below.

### Comic Detail

![comic-detail](https://github.com/JohnFScha/MarvelCharacterSearchApp/assets/115885102/8b1615bf-560f-4414-8c60-4a0c74bd78da)

If instead a link was provided, it'll return a preview detail page for that comic's unique ID. Alternatively, clicking on a comic in the display modal of a character will lead ypu into this detail section as well.

### Favorites

![favs](https://github.com/JohnFScha/MarvelCharacterSearchApp/assets/115885102/c421a090-4a6c-4209-a0be-9a6d258026fc)

If a character has been added to favorites, it will be shown in this section. Clicking on the star icon will now remove that character from favs.
