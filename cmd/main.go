package main

import (
	"log"
	"product-management-system/internal/api"
	"product-management-system/internal/db"
	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize DB connection
	db.InitDB()

	// Create a new Gin router
	r := gin.Default()

	// Setup routes
	api.SetupRoutes(r) // Corrected to pass the router to SetupRoutes

	// Start the server
	if err := r.Run(":8080"); err != nil {
		log.Fatal(err)
	}
}
