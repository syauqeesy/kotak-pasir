package middleware

import (
	"syauqeesy/react-query/common"
	"syauqeesy/react-query/config"

	"github.com/labstack/echo/v4"
)

type JWTMiddleware interface {
	Validate() echo.MiddlewareFunc
	GetUserId(c echo.Context) string
}

type Middleware struct {
	JWT JWTMiddleware
}

func NewMiddleware(config *config.Config) *Middleware {
	jwt := common.NewJWT(config.Application.Secret)

	return &Middleware{
		JWT: jwt,
	}
}
