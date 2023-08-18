package repository

import (
	"gorm.io/gorm"
)

type repository struct {
	Database *gorm.DB
}

type Repository struct {
	Article ArticleRepository
}

func NewRepository(Database *gorm.DB) *Repository {
	repository := &repository{
		Database: Database,
	}

	r := &Repository{
		Article: (*articleRepository)(repository),
	}

	return r
}
