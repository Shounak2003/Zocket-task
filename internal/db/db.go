package db

import (
	"database/sql"
	"log"
	_ "github.com/lib/pq" // Postgres driver
)

var db *sql.DB

// Product represents a product in the database
type Product struct {
	ID                   int      `json:"id"`
	UserID               int      `json:"user_id"`
	ProductName          string   `json:"product_name"`
	ProductDescription   string   `json:"product_description"`
	ProductImages        []string `json:"product_images"`
	ProductPrice         float64  `json:"product_price"`
	CompressedProductImages string `json:"compressed_product_images"`
}

// InitDB initializes the database connection
func InitDB() {
	var err error
	// Replace this with your actual Postgres connection string
	dsn := "user=postgres password=admin dbname=product_db sslmode=disable"
	db, err = sql.Open("postgres", dsn)
	if err != nil {
		log.Fatalf("Error opening database: %v", err)
	}
	if err := db.Ping(); err != nil {
		log.Fatalf("Error connecting to database: %v", err)
	}
	log.Println("Database connection established successfully")
}

// CreateProduct creates a new product in the database
func CreateProduct(product Product) (int, error) {
	query := `INSERT INTO products (user_id, product_name, product_description, product_images, product_price, compressed_product_images) 
              VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`

	var productID int
	err := db.QueryRow(query, product.UserID, product.ProductName, product.ProductDescription, product.ProductImages, product.ProductPrice, product.CompressedProductImages).Scan(&productID)
	if err != nil {
		log.Printf("Error inserting product: %v", err)
		return 0, err
	}
	return productID, nil
}

// GetProductByID retrieves a product by its ID
func GetProductByID(id string) (Product, error) {
	var product Product
	query := `SELECT id, user_id, product_name, product_description, product_images, product_price, compressed_product_images FROM products WHERE id = $1`

	err := db.QueryRow(query, id).Scan(&product.ID, &product.UserID, &product.ProductName, &product.ProductDescription, &product.ProductImages, &product.ProductPrice, &product.CompressedProductImages)
	if err != nil {
		log.Printf("Error retrieving product by ID: %v", err)
		return product, err
	}
	return product, nil
}

// GetProductsByUserID retrieves all products for a given user
func GetProductsByUserID(userID string) ([]Product, error) {
	var products []Product
	query := `SELECT id, user_id, product_name, product_description, product_images, product_price, compressed_product_images FROM products WHERE user_id = $1`

	rows, err := db.Query(query, userID)
	if err != nil {
		log.Printf("Error retrieving products by user ID: %v", err)
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		var product Product
		if err := rows.Scan(&product.ID, &product.UserID, &product.ProductName, &product.ProductDescription, &product.ProductImages, &product.ProductPrice, &product.CompressedProductImages); err != nil {
			log.Printf("Error scanning product: %v", err)
			return nil, err
		}
		products = append(products, product)
	}

	if err := rows.Err(); err != nil {
		log.Printf("Error iterating over rows: %v", err)
		return nil, err
	}

	return products, nil
}
