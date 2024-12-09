package api

import (
	"net/http"
	"product-management-system/internal/db"
	"product-management-system/internal/cache"
	"product-management-system/internal/queue"
	"github.com/gin-gonic/gin"
	"log"
)

// ProductRequest represents the body of a POST request for creating a product
type ProductRequest struct {
	UserID             int      `json:"user_id"`
	ProductName        string   `json:"product_name"`
	ProductDescription string   `json:"product_description"`
	ProductImages      []string `json:"product_images"`
	ProductPrice       float64  `json:"product_price"`
}

// CreateProduct creates a new product in the database
func CreateProduct(c *gin.Context) {
	var req ProductRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	// Create product in DB
	product := db.Product{
		UserID:             req.UserID,
		ProductName:        req.ProductName,
		ProductDescription: req.ProductDescription,
		ProductImages:      req.ProductImages,
		ProductPrice:       req.ProductPrice,
	}

	productID, err := db.CreateProduct(product)
	if err != nil {
		log.Printf("Error creating product: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create product"})
		return
	}

	// Process images asynchronously
	for _, image := range req.ProductImages {
		err = queue.PushToQueue(image, productID)
		if err != nil {
			log.Printf("Failed to add image to queue: %v", err)
		}
	}

	c.JSON(http.StatusOK, gin.H{"message": "Product created successfully", "product_id": productID})
}

// GetProductByID retrieves a product by ID from the database or cache
func GetProductByID(c *gin.Context) {
	id := c.Param("id")

	// Check cache first
	product, found := cache.GetProductFromCache(id)
	if found {
		c.JSON(http.StatusOK, product)
		return
	}

	// If not in cache, fetch from DB
	product, err := db.GetProductByID(id)
	if err != nil {
		log.Printf("Error retrieving product: %v", err)
		c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
		return
	}

	// Cache product data
	cache.SetProductToCache(id, product)

	c.JSON(http.StatusOK, product)
}

// GetProducts retrieves all products for a user (or all products if no user is specified)
func GetProducts(c *gin.Context) {
	userID := c.DefaultQuery("user_id", "")

	// Get products from DB
	products, err := db.GetProductsByUserID(userID)
	if err != nil {
		log.Printf("Error retrieving products: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve products"})
		return
	}

	c.JSON(http.StatusOK, products)
}
