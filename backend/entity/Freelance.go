package entity

import (
	"gorm.io/gorm"
)


type Freelance struct {

	gorm.Model


	// FreelanceID  int
	Username string
	Password string
	FirstName   string
	LastName    string
	Email       string
	PhoneNumber string



	EmpaymentContract [] EmpaymentContract `gorm:"foreignKey:FreelanceID"`
}
