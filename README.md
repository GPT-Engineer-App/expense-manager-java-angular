# Expense Manager Backend

This is a Spring Boot application for managing expenses. It provides a RESTful API for performing CRUD operations on expenses and uses an H2 in-memory database for storing data.

## Prerequisites

- Java 11 or higher
- Maven

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd expense-manager-backend
   ```

2. Build the project:
   ```bash
   mvn clean install
   ```

3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

4. Access the H2 database console:
   Open a web browser and go to `http://localhost:8080/h2-console`. Use the following credentials to log in:
   - JDBC URL: `jdbc:h2:mem:testdb`
   - Username: `sa`
   - Password: `password`

5. Use the API:
   The API is available at `http://localhost:8080/api/expenses`. You can use tools like Postman or cURL to interact with the API.

## API Endpoints

- `GET /api/expenses`: Retrieve all expenses
- `POST /api/expenses`: Create a new expense
- `PUT /api/expenses/{id}`: Update an existing expense
- `DELETE /api/expenses/{id}`: Delete an expense

## License

This project is licensed under the MIT License.