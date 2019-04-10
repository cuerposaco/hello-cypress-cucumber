# hello-cypress-cucumber
Simple Node.js project for testing purpose using cypress with cucumber

## Module requirements

- [cucumber](https://docs.cucumber.io/guides/)
- [cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)
- [cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#readme)

## Start testing
```shell
git clone https://github.com/cuerposaco/hello-cypress-cucumber.git
cd hello-cypress-cucumber
npm install
npm run test
```

### Important configuration

[cypress-cucumber-preprocessor style recommended](https://www.npmjs.com/package/cypress-cucumber-preprocessor#cypress-cucumber-preprocessor-style-recommended)
Put following config into `pakage.json` file

```json
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}
```
