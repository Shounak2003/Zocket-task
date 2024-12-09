package api

import (
	"github.com/gin-gonic/gin"
)

// SetupRoutes sets up all the routes for the application.
func SetupRoutes(r *gin.Engine) {
	r.POST("/products", CreateProduct)         // Create product
	r.GET("/products/:id", GetProductByID)     // Get product by ID
	r.GET("/products", GetProducts)           // Get all products
}

