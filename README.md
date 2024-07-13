# Nutrintionist Calorie Counter - React One Page Application

## Description

This repository contains a React-based one-page application featuring a Header, Hero section, Blogposts, a Calorie Calculator, and a Footer. The Calorie Calculator allows users to input their personal data to calculate their daily calorie requirements.

## Demo

You can view a live demo of the application [here]

## Features

- Full Page with Sections Header, Hero, Blogs, Calorie Calculator and Footer build as seperate React Components
- Fully responsive on Desktop. Mobile Version still wip.
- Calculation of daily calorie requirement for men and women based on different formulas.
- Output in kcal & kJ.

### Calorie Calculator

The Calorie Calculator component allows users to determine their daily calorie needs. The inputs required are:

- **Height** (in cm)
- **Age** (in years)
- **Weight** (in kgs)
- **Gender** (male or female)
- **Physical Activity Level (PAL)**:
  - Schlafen (0.95)
  - Sitzen / Liegen (1.2)
  - Sitzende Tätigkeit (1.5)
  - Sitzende Tätigkeit + Stehanteil (1.7)
  - Stehende Tätigkeit + Sitzanteil (1.9)
  - Körperliche Arbeit (2.2)

Upon entering the details and clicking "Berechnen", the calculator will display the Basal Metabolic Rate (Grundumsatz) and the Total Daily Energy Expenditure (Gesamtumsatz).

## Technologies Used

- TypeScript
- React
- HTML
- CSS

## Screenshots

![Example screenshot](/public/img/react-calorie-counter-app-screen.png)

[Project Link](https://github.com/noctwo/project-react-calorie-counter.git)

## Usage

Once the application is running, you can navigate through the different sections. The Calorie Calculator section allows you to input your height, age, weight, gender, and physical activity level to calculate your daily calorie requirements.

## Code Overview

The `Calculator` component is a key feature of the application, responsible for calculating the user's daily calorie requirements based on their input. Here's a brief overview of its functionality:

1. **State Management**:

   - `height`, `age`, `weight`, `pal`, `gender`: These states store the user's input values.
   - `result`, `grundumsatz`: These states store the calculated values for total daily energy expenditure and basal metabolic rate.

2. **Input Handlers**:

   - `handleGenderChange`, `getHeight`, `getAge`, `getWeight`, `getPal`: These functions update the respective states when the user inputs their data.

3. **Calculation Logic**:

   - The `handleCalculation` function is triggered when the user clicks the "Calculate" button. It calls the `calculation` function with the input values to compute the `gesamtumsatz` (total energy expenditure) and `grundumsatz` (basal metabolic rate).
   - The `calculation` function uses different formulas for males and females to compute the basal metabolic rate and then multiplies it by the physical activity level to get the total daily energy expenditure.

4. **Rendering**:
   - The component renders input fields for height, age, weight, gender, and physical activity level, and a button to trigger the calculation.
   - If the calculation results are available, it displays the basal metabolic rate and total daily energy expenditure in both kcal and kJ.

## Contact

Created by Pius (https://github.com/noctwo)
