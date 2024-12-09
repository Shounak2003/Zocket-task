package cache

import "product-management-system/internal/db"

// In-memory cache (not suitable for production use)
var productCache = make(map[string]db.Product)

// GetProductFromCache retrieves the product from cache
func GetProductFromCache(id string) (db.Product, bool) {
	product, found := productCache[id]
	return product, found
}

// SetProductToCache adds the product to cache
func SetProductToCache(id string, product db.Product) {
	productCache[id] = product
}
