---
title: "Project: University Finder"
date: "2025-02-07"
description: "Blog post for Project Development & Details of University Finder"
---

## Introduction

The project is a location-based university search application that allows users to explore universities in different countries. By leveraging the Google Maps Geocoding API, the application retrieves the geographical coordinates and addresses of universities based on user input. The gathered information is then stored in a SQLite database for future reference.

## Tech Stack

I used **Python** and various **APIs** primarily for this project. Currently, this is a console-based application that creates a database in SQLite using SQLAlchemy. The choice of SQLite allows for efficient data storage and retrieval, making it easier to manage university information.

## Features

1. **Location-Based Search**: Users can input their current location to find nearby universities.
2. **Detailed University Information**: The application provides details about each university, including its name, address, and geographical coordinates.
3. **User-Friendly Interface**: Although it is currently console-based, the application is designed to be intuitive and easy to navigate.

## Future Improvements

1. **Web Interface**: Transitioning to a web application to enhance user experience.
2. **Additional APIs**: Integrating more educational APIs to provide comprehensive university details.
3. **User Authentication**: Adding user accounts to save searches and preferences.

## Conclusion

The University Finder project aims to simplify the process of discovering universities worldwide. With ongoing improvements and features, I hope to make this a valuable resource for students and educators alike.
