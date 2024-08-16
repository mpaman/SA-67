package entity

import (
	"gorm.io/gorm"
)

type Work struct {
	gorm.Model


	EmpaymentContract [] EmpaymentContract `gorm:"foreignKey:WorkID"`


	// WorkID   *uint
	// Work Work `gorm:"foriegnKey:WorkID"`
}
