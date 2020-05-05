# MyReads Project

This is my project for Udacity's React Nanodegree Program, It's bookshelf app that allows the user to select and categorize books that he/she has read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that it should be persisted information as user’s interacts with the application.

## Table of Contents

- [Quick Start](#quick-start)
- [What is Included](#What-is-Included)
- [Important](#important)

## Quick Start

To get started developing right away:

- Make sure that you have Node.js installed on your local and then clone this repository.
- install all project dependencies with `npm install`
- start the development server with `npm start`

## What is Included

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── Components # Basic App Components.
    │   ├── Book.js
    │   ├── BookShelf.js
    │   └── SearchBar.js
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
