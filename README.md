# Blog App

Welcome to the Blog App repository! This full-stack web application empowers users to engage with blogs through various actions, including reading, writing, and commenting. The app employs a robust technology stack: MySQL for database management, React with Chakra UI for the frontend, and Node.js with Express for the backend. Deployment is achieved through AWS services, including RDS, S3, and EC2 with PM2.

## Features

- **Database Management**: The heart of the app is the MySQL database, where it stores and retrieves blog posts, comments, user data, and authentication details.

- **Responsive Frontend**: The frontend is crafted using React, a popular JavaScript library, and is visually styled with Chakra UI. The user interface is responsive, ensuring seamless usage across various devices.

- **Backend Power**: The backend is powered by Node.js and Express, which manage the API requests and the underlying data. This separation of concerns ensures efficient handling of various functionalities.

- **Secure Authentication**: User accounts are managed securely. Users can register, log in, and log out with their credentials. Passwords are hashed and stored securely.

- **Blog Exploration**: Users can conveniently browse through the collection of blogs. Each blog preview includes an image, title, and brief description to entice readers.

- **Blog Authorship**: Authenticated users can compose and publish their own blogs. This feature encourages community engagement and content creation.

- **Interactive Comments**: Users can participate in discussions by posting comments on blogs. This fosters an environment of exchange and learning.

- **AWS Deployment**: The app is deployed using Amazon Web Services (AWS) to ensure scalability and availability. AWS RDS is used for the MySQL database, AWS S3 for frontend hosting, and AWS EC2 with PM2 for backend deployment.

## Tech Stack

- **Frontend**: React, Chakra UI
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Deployment**: AWS RDS, AWS S3, AWS EC2, PM2

## Getting Started

1. Clone the repository: `git clone https://github.com/your-username/blog-app.git`
2. Navigate to the frontend directory: `cd frontend`
3. Install frontend dependencies: `npm install`
4. Start the frontend development server: `npm start`
5. Navigate to the backend directory: `cd ../backend`
6. Install backend dependencies: `npm install`
7. Start the backend server using PM2: `pm2 start app.js`

Ensure you have the appropriate AWS credentials configured for deployment.

## Contributing

Contributions are more than welcome! If you discover a bug or have an idea for a new feature, please open an issue or submit a pull request. We kindly ask you to adhere to our code of conduct and provide clear documentation for your contributions.


