package service

import (
	"syauqeesy/react-query/config"
	"syauqeesy/react-query/src/repository"
)

type service struct {
	Repository *repository.Repository
	Config     *config.Config
}

type Service struct {
	Article ArticleService
}

func NewService(repository *repository.Repository, config *config.Config) *Service {
	service := &service{
		Repository: repository,
		Config:     config,
	}

	s := &Service{
		Article: (*articleService)(service),
	}

	return s
}
