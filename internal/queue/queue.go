package queue

import (
	"log"
)

// PushToQueue is used to add an image URL to a queue for processing.
func PushToQueue(image string, productID int) error {
	// Simulate pushing to a queue (this could be a Redis queue or similar)
	log.Printf("Pushing image %s for product %d to the queue", image, productID)
	return nil
}
