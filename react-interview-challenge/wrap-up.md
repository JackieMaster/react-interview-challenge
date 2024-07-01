## Questions

### What issues, if any, did you find with the existing code?
The original code contained hardcoded values (e.g., API URLs), which might not be ideal for configuration management.
No error handling

### What issues, if any, did you find with the request to add functionality?
The request to add functionality did not specify how to handle daily withdrawal tracking without additional endpoints or services, leading to potential complications in maintaining accurate daily limits across multiple sessions. Also there was no consideration for concurrency issues that could arise when multiple transactions are processed simultaneously.

### Would you modify the structure of this project if you were to start it over? If so, how?
Name this project as 'client'
Create service functions for API calls and validation logic.
Introduce constants file to keep constants like API base URLs, errors etc

### Were there any pieces of this project that you were not able to complete that you'd like to mention?
Implementing persistent tracking of daily withdrawals across sessions without additional backend support or endpoints was challenging and not fully addressed.

### If you were to continue building this out, what would you like to add next?
Add backend endpoints to handle daily withdrawal limits and transaction history more effectively.
Implement a notification system to inform users about successful transactions, errors, and limit warnings.
Provide a detailed transaction history view to allow users to track their deposits and withdrawals.

### If you have any other comments or info you'd like the reviewers to know, please add them below.
The current implementation provides a good foundation, but it can benefit from further enhancements in terms of code structure, error handling, and user experience.  Incorporating more robust state management and backend support would significantly improve the application's scalability and maintainability. Additionally, providing clear documentation and unit tests would make the project easier to understand and extend in the future.