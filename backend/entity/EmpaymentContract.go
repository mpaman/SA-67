package entity

import (
	"gorm.io/gorm"
)

type EmpaymentContract struct {
	gorm.Model
	Note string

	WorkID *uint
	Work   Work `gorm:"foriegnKey:WorkID"`

	FreelanceID *uint
	Freelance   Freelance `gorm:"foriegnKey:FreelanceID"`

	CustomerID *uint
	Customer   Customer `gorm:"foriegnKey:CustomerID"`
}
