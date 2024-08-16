package entity

import (
	"gorm.io/gorm"
)

type Customer struct {
	gorm.Model

	// CustomerID  int
	Username string
	Password string
	FirstName   string
	LastName    string
	Email       string
	PhoneNumber string



	EmpaymentContract [] EmpaymentContract `gorm:"foreignKey:CustomerID"`
}
