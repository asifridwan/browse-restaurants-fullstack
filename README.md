# Browse Restaurants

This has been created for Submission at Glints for Software Engineering Evaluation - Career Development

Check out the live deployed version [through this link](https://asifridwan.github.io/browse-restaurants/)

### Features :
- Login and Registration flow with a proper authentication system
- View all restaurants in the database
- Filter restaurants by their "Name" or "Date and Time"
- Add any restaurant to a specific named collection (e.g. Vegan Lovers)
- Rename or delete any collection
- Remove a particular restaurant from the collection
- Session storage feature lets you stay logged in even on page refreshes !

#### Tech Stacks Used :
- React JS (Frontend)
- Node.js (Backend)
- Express (Backend)
- PostgreSQL (Database)

##### Some Design Decisions :
- Orange theme because it suits the vibe
- Not mobile responsive because there is a dedicated version for it that could be used on mobile devices (This is meant for browsers only)
- Instead of Redux, I just went with the default useState hook beacuse I felt that would be enough to get the job done 
- PostgreSQL beacuse its free and open source which makes it perfect for projects like these
- Express framework on backend because it simplifies the development of backend REST APIs by a strong margin
- uuid package to generate IDs for users and collections
- bcrypt package to implement password hashing
- I separated the whole app into 3 specific components and each component has it's own set of sub-components, i.e., its all about separation of concerns
- Instead of having individual stylesheet files for each component, I just went with one global stylesheet file that provides styling for the whole app

## How To Install :
1. Open your terminal and clone this repo and then type :
```
cd asif-ridwan-remote-software-engineer-04Mar2022
```
2. After that open another instance of terminal and on each instance enter the sub folders and install their dependencies
```
cd frontend
npm install
```
```
cd backend
npm install
```
3. Then start the frontend and backend API
```
npm start
```

## Prerequisites :
Be sure to have PostgreSQL installed and then run the queries in `backend\database.sql` file
