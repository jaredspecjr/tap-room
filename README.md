# Brewery

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## SPECS
| Specification | Input | Output |
| --- | --- | --- |
| As a patron, I want to see a list/menu of all available kegs. For each keg, I need to see its name, brand, price and alcoholContent. | user clicks a button | shows info about current keg |
| employee should be able to fill out a form to add a new keg to a list  | clicks add new keg button | form appears allowing user to input information about the keg they want to add |
|need an option to edit a keg after a keg has been added | press edit button | change information about selected keg |
| should see how any pints are left in a keg(124) | app displays current pints number | 102 |
| should have a sell button to sell a pint of that selected keg | press sell button | keg pint level - 1 |
| want the ability to sort kegs with less than 10 pints left | keg pints falls to 10 or lower | push current keg to an array |
