package main

import (
	"github.com/mpaman/demo-gorm/entity"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func main() {
	db, err := gorm.Open(sqlite.Open("Freelance.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	db.AutoMigrate(&entity.Customer{},  &entity.EmpaymentContract{}, &entity.Freelance{},&entity.Work{})
}