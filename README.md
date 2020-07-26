# Similar

## Objective

This react program compares 2 JSON objects and gives a score from 0 to 1 depending on how similar are they.

1 depicts identical.
0 states dissimilar.

## Assumptions

1. The similarity comparisons is among two well-formed JSON objects.
2. The lowest similarity score is 0 which states that there is no similarity.
3. The highest similarity score is 1 which is possible in case of the same JSON object.
4. The UI provides a feature to copy/paste the JSON, incase the input isn't a well-formed JSON, the result should be 0.
5. Empty string inputs result in a score of 0 too.

## How It Works

Add 2 JSONs in both columns and see the comparison result at the end of the page.
In case, the text input isn't a valid JSON, the comparison result will be 0.

## Stack

1. ReactJS
2. Javascript
3. Enzyme for Testing

## How To Run Locally

1. git clone <git url>
2. yarn install
3. yarn start

## Testing

1. To test locally run `npm run test`
2. To see the test coverage report

   1. Run `npm run test -- --coverage --watchAll=false`

   2. Navigate to the new coverage folder and run `index.html` for viewing the coverage-report.

## Demo

The demo website is deployed at <a href="https://similar.netlify.app/" target="_blank">Netlify</a>

![Testing Status](https://github.com/y471n/similar/workflows/Node.js%20CI/badge.svg)
![Netlify Status](https://api.netlify.com/api/v1/badges/cec1327b-bd43-4e42-873f-f786185bcb2f/deploy-status)
