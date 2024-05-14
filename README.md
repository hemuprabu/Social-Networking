# Social-Networking


## NoSQL: Social Network API

## Table of Contents

-[Description](#Description)

-[Technology](#Technology)

-[Installation](#Installation)

-[Usage](#Usage)

-[License](#License)

-[Contribution](#Contribution)

-[Questions](#Questions)

## Description:

It's an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## Technology:

Node.js
Express.js
MongoDB
Mongoose

## Installation:

Include instructions on how to install any dependencies required for your project. You can mention running npm install to install necessary packages.

To run the Social-Networking application, follow these steps to install the required dependencies:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/hemuprabu/Social-Networking

2. cd Social-Networking

3. Run npm install to install dependencies.

4. Set up the database by running the provided SQL files.

## Usage

After installing npm packages, the application will be invoked by using the following command:

npm start

  * Shows all of the technical acceptance criteria being met.  

  * Demonstrated GET routes for all users and all thoughts being tested in Insomnia.

  * Demonstrated GET routes for a single user and a single thought being tested in Insomnia.

  * Demonstrated POST, PUT, and DELETE routes for users and thoughts being tested in Insomnia.

  * Demonstrated POST and DELETE routes for a user’s friend list being tested in Insomnia.

  * Demonstrated POST and DELETE routes for reactions to thoughts being tested in Insomnia.


## Database Models

Your database should contain the following four models, including the requirements listed for each model:

**User**:

* `username`
  * String
  * Unique
  * Required
  * Trimmed

* `email`
  * String
  * Required
  * Unique
  * Must match a valid email address (look into Mongoose's matching validation)

* `thoughts`
  * Array of `_id` values referencing the `Thought` model

* `friends`
  * Array of `_id` values referencing the `User` model (self-reference)

**Schema Settings**:

Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.

---

**Thought**:

* `thoughtText`
  * String
  * Required
  * Must be between 1 and 280 characters

* `createdAt`
  * Date
  * Set default value to the current timestamp
  * Use a getter method to format the timestamp on query

* `username` (The user that created this thought)
  * String
  * Required

* `reactions` (These are like replies)
  * Array of nested documents created with the `reactionSchema`

**Schema Settings**:

Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

---

**Reaction** (SCHEMA ONLY)

* `reactionId`
  * Use Mongoose's ObjectId data type
  * Default value is set to a new ObjectId

* `reactionBody`
  * String
  * Required
  * 280 character maximum

* `username`
  * String
  * Required

* `createdAt`
  * Date
  * Set default value to the current timestamp
  * Use a getter method to format the timestamp on query

**Schema Settings**:

This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.

### API Routes

**`/api/users`**

* `GET` all users

* `GET` a single user by its `_id` and populated thought and friend data

* `POST` a new user:

```json
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```

* `PUT` to update a user by its `_id`

* `DELETE` to remove user by its `_id`

**BONUS**: Remove a user's associated thoughts when deleted.

---

**`/api/users/:userId/friends/:friendId`**

* `POST` to add a new friend to a user's friend list

* `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

* `GET` to get all thoughts

* `GET` to get a single thought by its `_id`

* `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

```json
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

* `PUT` to update a thought by its `_id`

* `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction stored in a single thought's `reactions` array field

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value


## Repository Quality

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality README with description and a link to a walkthrough video.

## Screenshots



## License:

The Social-Networking project is distributed under the [MIT License](https://opensource.org/licenses/MIT). This license allows you to use, modify, and distribute the project for both personal and commercial purposes, with attribution to the original author.

For more details on the MIT License terms, please refer to the [LICENSE](./LICENSE) file included in the project repository.

## Author:

This Social-Networking project was created by:

- **Your Name**: Hemalatha Prakasam
- **GitHub**: [GitHub Profile](https://github.com/hemuprabu)

Feel free to connect with me for any inquiries or feedback related to the Social-Networking application. I hope you enjoy using the application and creating custom logos with it.

## Contact

If you have any feedback, questions, or suggestions regarding the Social-Networking application, feel free to reach out to me:

- **Email**: Hemalathaprakasam219@gmail.com

I welcome any feedback or inquiries and am happy to assist with any queries related to the Social-Networking project. Your input is valuable in improving the application and making it more user-friendly.





