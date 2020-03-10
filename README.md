This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# TODO
Consider validating each field as user enters data (valid phone, valid email, valid usps address).

See https://www.npmjs.com/package/libphonenumber-js

1) Styling: Highlight which page user is on.
2) Data Governance Rules: Right now, form will take in any data. Add some restrictions around data accepted (ie, email rules, phone format).
3) Add search bar option to filter by matching customer.

# Other work to consider
4) Add category option to add customer to either "business" or "audience".
5) Consider fail-safe option for deleted contacts (ie, move them to a deleted list, pending full data cleanse?).
6) Download as csv option.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

Open [http://localhost:5000/customers](http://localhost:5000/customers) to view customer database in json format.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
