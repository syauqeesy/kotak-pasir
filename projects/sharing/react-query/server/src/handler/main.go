package handler

import (
	"syauqeesy/react-query/src/middleware"
	"syauqeesy/react-query/src/service"

	"github.com/labstack/echo/v4"
)

type handler struct {
	Service    *service.Service
	Middleware *middleware.Middleware
}

type Handler struct {
	Article ArticleHandler
}

func NewHandler(echo *echo.Echo, service *service.Service, middleware *middleware.Middleware) *Handler {
	handler := &handler{
		Service:    service,
		Middleware: middleware,
	}

	h := &Handler{
		Article: (*articleHandler)(handler),
	}

	article := echo.Group("/article")
	{
		article.GET("", h.Article.List)
		article.GET("/:id", h.Article.Detail)
		article.POST("", h.Article.Create)
		article.PUT("", h.Article.Edit)
	}

	return h
}
