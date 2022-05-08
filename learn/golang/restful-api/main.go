package main

import (
	"behoon/restful-api/application"
	"behoon/restful-api/controller"
	"behoon/restful-api/helper"
	"behoon/restful-api/middleware"
	"behoon/restful-api/repository"
	"behoon/restful-api/service"
	"net/http"

	"github.com/go-playground/validator/v10"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
	validate := validator.New()
	db := application.NewDB()

	categoryRepository := repository.NewCategoryRepository()
	categoryService := service.NewCategoryService(categoryRepository, db, validate)
	categoryController := controller.NewCategoryController(categoryService)

	router := application.NewRouter(categoryController)

	server := http.Server{
		Addr:    "localhost:8086",
		Handler: middleware.NewAuthMiddleware(router),
	}

	err := server.ListenAndServe()
	helper.PanicIfError(err)
}
