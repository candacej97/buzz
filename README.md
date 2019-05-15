# Buzz

Add questions or play freestyle; keep score and play often. The most hassle-free way of quizzing in a large group. Buzz is a quiz aide that was created to allow facilitators of quizzing teams to help their quizzers practice individually or in groups and keep a record of the scores.

## Objective

To create a mobile-first quiz web app that will aide quizzing teams in studying, practicing and keeping track of points. There will be no need to log in or sign up for anything.

* Use React and React Router for Join, Create and Game Sequences
* Game state will be small enough to not need Redux
* Session management for each client will be needed
    * Can't join into a quiz without a session id
* Sharing of the quiz results need to be universal
    * PDF or TXT?
        * Google Docs
        * Email
        * Message

## Stack

* [Express](https://expressjs.com/)
* [socket.io](https://socket.io/)

## Live Version

## License

Read our license [here](./license).

## Contributing

Read our [contribution guidelines](./contributing.md) before you submit a pull request.
Make sure you read our [code of conduct](./contributing.md#code-of-conduct).

### Machine Prerequisites

* Node
* NPM

### Dev Download

```
git clone https://github.com/candacej97/buzz.git
cd buzz
npm install
```

### Run Instructions

`npm start`

### Dev Testing

`npm test`