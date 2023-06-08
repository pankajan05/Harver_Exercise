#  Harver Exercise
The Harver Exercise project is a web application designed to demonstrate the implementation of a specific exercise provided by Harver. The exercise focuses on building a feature or solving a problem using JavaScript and Node.js.


### Description
This project serves as a solution to the Harver Exercise, showcasing the developer's ability to work with JavaScript, Node.js, and various dependencies. The exercise may involve tasks such as data manipulation, algorithm implementation, API integration, or any other specific requirements.

The application utilizes Node.js as the runtime environment and leverages several dependencies to accomplish the exercise's objectives. It demonstrates the usage of the merge-img library for image merging and minimist for command-line argument parsing. Additionally, it employs nodemon as a dev dependency to enable automatic restarts during development.

The purpose of this project is to showcase the developer's skills, problem-solving abilities, and familiarity with the tools and technologies involved. It serves as an example of their proficiency in JavaScript development and their understanding of the specific exercise requirements.

### Prerequisites
   Node.js (version 16.15.0)
   npm (version 8.5.5)

### Installation
To use this project, you need to have Node.js installed on your machine.

#### Clone the repository:

```
git clone https://github.com/pankajan05/Harver_Exercise
```

#### Navigate to the project directory:

```
cd harver-exercise
```

#### Install dependencies:

```
npm install
```

#### Start the Application
To start the application, run the following command:

```
npm start
```

This will execute the start script defined in the package.json file and run the application using Node.js.

#### Development Mode
During development, you can use nodemon to automatically restart the application whenever changes are made. Run the following command:

```
npm run dev
```
This will execute the dev script defined in the package.json file and start the application with nodemon.

### Author
Pankajan Satkunam








Improvements made in the code:

   Replaced the destructuring import for fs and path with regular imports for better clarity.
   Used console.error instead of console.log for error logging.
   Encoded the dynamic parts of the URLs using encodeURIComponent to ensure proper URL formatting.
   Used Buffer.from instead of the deprecated new Buffer for creating buffers from binary data.
   Added explicit type annotation ('image/jpeg') when getting the image buffer.
   Used console.log to display the error message if an error occurs during file saving.
   Removed unnecessary comments to keep the code clean and concise.
   Used template literals for string interpolation to improve readability.
   Followed consistent indentation and code style.
