# Tax-Calculator

### References & Requirements

- The tax calculation works based on this formula -
    - Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
        - Ex - if Gross Annual Income + Extra Income - Deductions =  6 Lakhs, no tax
        - if Gross Annual Income + Extra Income - Deductions =  9 Lakhs, tax
    - Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at
        - 30% for people with age < 40
        - 40% for people with age ≥ 40 but < 60
        - 10% for people with age ≥ 60
        - Example
            - Age = 34, Income = 40 Lakhs, no deductions, tax = .3 * (40 - 8) = .3 * 32 = 9.6 Lakhs
- Do not restrict user from entering incorrect values like characters in the number fields
    - Highlight a error icon to the right of the input field (shown as an example in above image as a circle with `!`). Hovering over it should show the error in a tooltip
    - If no errors are present, dont show the error icon
    - This should be present in all the number fields
- The age dropdown field should have 3 values -
    - <40
    - ≥ 40 & < 60
    - ≥ 60
    - If user has not entered this value and clicks on submit, show a error icon hovering over which should show that input field is mandatory
- Error icons should not be visible in the form by default.
- Clicking on submit should show a modal which would show the final values based on above calculations.

- #Result
-![Screenshot from 2024-04-14 10-26-22](https://github.com/Anjali02125/Tax-Calculator/assets/166932753/2f21b452-b4d7-4b20-8219-af02a4cab944)
![Screenshot from 2024-04-14 10-26-24](https://github.com/Anjali02125/Tax-Calculator/assets/166932753/fc37b5c2-d40e-4375-9e2f-5f7c7113ee9a)
![Screenshot from 2024-04-14 10-26-31](https://github.com/Anjali02125/Tax-Calculator/assets/166932753/c8e023c6-1d1f-434b-9789-4e9f8611eaa6)
![Screenshot from 2024-04-14 10-26-59](https://github.com/Anjali02125/Tax-Calculator/assets/166932753/ea616713-157f-4251-8277-13775a8d4346)
![Screenshot from 2024-04-14 10-27-01](https://github.com/Anjali02125/Tax-Calculator/assets/166932753/aee01ba2-21c7-4c5f-a787-6fb1c102b75a)

#initail repository
![Screenshot from 2024-04-14 10-18-17](https://github.com/Anjali02125/Tax-Calculator/assets/166932753/48d78587-e4d6-4086-94d9-eecfd7248840)



