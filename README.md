# Product Management System

A simple product management system built with Go and PostgreSQL that allows users to create, retrieve, and list products. The system also supports image handling and asynchronous processing using a queue.

---

## Overview

This project is designed to manage products in an e-commerce system. It provides basic CRUD operations for products, allows for asynchronous image processing, and stores product data in a PostgreSQL database. The API is built with the [Gin web framework](https://gin-gonic.com/) in Go.

---

## Features

- **Create Product**: Adds a new product with a name, description, price, and images.
- **Get Product by ID**: Retrieves product details by its unique ID.
- **Get All Products**: Retrieves a list of all products.
- **Image Queue**: Handles images asynchronously using a queue system.

---

## Technologies Used

- **Go**: The programming language for building the backend.
- **Gin**: Web framework for building APIs.
- **PostgreSQL**: Relational database for storing product information.
- **Docker**: Used for containerization (optional, for database setup).
- **Redis**: Caching layer for optimized product retrieval (optional, not included in this version).
- **Queue System**: Handles asynchronous image processing.

---

## Setup and Installation

### Prerequisites

1. **Go**: Make sure Go is installed on your system. You can download it from [https://golang.org/dl/](https://golang.org/dl/).
2. **PostgreSQL**: You need a running PostgreSQL instance. You can either run it locally or via Docker (see the Docker section).
3. **Docker (Optional)**: Used for setting up PostgreSQL in a containerized environment.

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Shounak2003/Zocket-task.git
   cd Zocket-task
   ```

2. **Install dependencies**:

   The project uses Go modules, so run the following to install dependencies:

   ```bash
   go mod tidy
   ```

3. **Set up your `.env` file**:

   Create a `.env` file in the root of the project with the following content (make sure to adjust the values to your environment):

   ```bash
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=admin
   POSTGRES_DB=product_db
   POSTGRES_HOST=localhost
   POSTGRES_PORT=5432
   ```

4. **Initialize the database**:

   Run the following command to set up the database (either locally or via Docker).

   - **With Docker (Optional)**:

     Create a `docker-compose.yml` file to run PostgreSQL in a Docker container.

     ```yaml
     version: "3"
     services:
       postgres:
         image: postgres:13
         environment:
           POSTGRES_USER: postgres
           POSTGRES_PASSWORD: admin
           POSTGRES_DB: product_db
         ports:
           - "5432:5432"
     ```

     Run the following command to start the PostgreSQL container:

     ```bash
     docker-compose up -d
     ```

5. **Run the Go application**:

   Finally, start the Go application by running:

   ```bash
   go run cmd/main.go
   ```

   The API will start listening on `http://localhost:8080`.

---

## API Endpoints

### 1. Create Product (POST `/product`)

- **Request Body**:

  ```json
  {
    "user_id": 1,
    "product_name": "Example Product",
    "product_description": "This is a sample product description.",
    "product_images": ["image_url_1", "image_url_2"],
    "product_price": 199.99
  }
  ```

- **Response**:

  ```json
  {
    "message": "Product created successfully",
    "product_id": 1
  }
  ```

### 2. Get Product by ID (GET `/product/:id`)

- **Response**:

  ```json
  {
    "product_id": 1,
    "user_id": 1,
    "product_name": "Example Product",
    "product_description": "This is a sample product description.",
    "product_images": ["image_url_1", "image_url_2"],
    "product_price": 199.99
  }
  ```

### 3. Get All Products (GET `/products`)

- **Response**:

  ```json
  [
    {
      "product_id": 1,
      "user_id": 1,
      "product_name": "Example Product",
      "product_description": "This is a sample product description.",
      "product_images": ["image_url_1", "image_url_2"],
      "product_price": 199.99
    },
    {
      "product_id": 2,
      "user_id": 2,
      "product_name": "Another Product",
      "product_description": "Another description.",
      "product_images": ["image_url_3"],
      "product_price": 99.99
    }
  ]
  ```

---

## Running with Docker (Optional)

If you'd like to use Docker for setting up the database:

1. **Run the following command** to start PostgreSQL in a container:

   ```bash
   docker-compose up -d
   ```

2. The PostgreSQL database will be accessible on port `5432` on your localhost. Make sure your Go application connects to this database by using the correct environment variables in the `.env` file.

---

## Database Schema

The `product_db` contains a single table `products`:

### products table schema:

```sql
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    product_description TEXT,
    product_images TEXT[],  -- Array of image URLs
    product_price DECIMAL(10, 2)
);
```

---

## Testing with Postman

1. **Create Product**:
   - Set method to `POST`.
   - URL: `http://localhost:8080/product`.
   - Body (JSON):

     ```json
     {
       "user_id": 1,
       "product_name": "Example Product",
       "product_description": "This is a sample product description.",
       "product_images": ["image_url_1", "image_url_2"],
       "product_price": 199.99
     }
     ```

   - Expected Response:

     ```json
     {
       "message": "Product created successfully",
       "product_id": 1
     }
     ```

2. **Get Product by ID**:
   - Set method to `GET`.
   - URL: `http://localhost:8080/product/1`.
   - Expected Response:

     ```json
     {
       "product_id": 1,
       "user_id": 1,
       "product_name": "Example Product",
       "product_description": "This is a sample product description.",
       "product_images": ["image_url_1", "image_url_2"],
       "product_price": 199.99
     }
     ```

3. **Get All Products**:
   - Set method to `GET`.
   - URL: `http://localhost:8080/products`.
   - Expected Response:

     ```json
     [
       {
         "product_id": 1,
         "user_id": 1,
         "product_name": "Example Product",
         "product_description": "This is a sample product description.",
         "product_images": ["image_url_1", "image_url_2"],
         "product_price": 199.99
       }
     ]
     ```

---

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
