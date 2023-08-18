package handler

import (
	"syauqeesy/react-query/common"
	"syauqeesy/react-query/src/payload"

	"github.com/labstack/echo/v4"
)

type ArticleHandler interface {
	List(c echo.Context) error
	Detail(c echo.Context) error
	Create(c echo.Context) error
	Edit(c echo.Context) error
}

type articleHandler handler

func (h *articleHandler) List(c echo.Context) error {
	result, err := h.Service.Article.List(c.Request().Context())
	if err != nil {
		return common.WriteFailResponse(c, err, nil)
	}

	return common.WriteSuccessResponse(c, "List article success", result)
}

func (h *articleHandler) Detail(c echo.Context) error {
	request := &payload.ArticleDetailRequest{}

	err := c.Bind(request)
	if err != nil {
		return common.WriteFailResponse(c, err, nil)
	}

	result, err := h.Service.Article.Detail(c.Request().Context(), request)
	if err != nil {
		return common.WriteFailResponse(c, err, nil)
	}

	return common.WriteSuccessResponse(c, "Get detail article success", result)
}

func (h *articleHandler) Create(c echo.Context) error {
	request := &payload.ArticleCreateRequest{}

	err := c.Bind(request)
	if err != nil {
		return common.WriteFailResponse(c, err, nil)
	}

	result, err := h.Service.Article.Create(c.Request().Context(), request)
	if err != nil {
		return common.WriteFailResponse(c, err, nil)
	}

	return common.WriteSuccessResponse(c, "Create article success", result)
}

func (h *articleHandler) Edit(c echo.Context) error {
	request := &payload.ArticleEditRequest{}

	err := c.Bind(request)
	if err != nil {
		return common.WriteFailResponse(c, err, nil)
	}

	result, err := h.Service.Article.Edit(c.Request().Context(), request)
	if err != nil {
		return common.WriteFailResponse(c, err, nil)
	}

	return common.WriteSuccessResponse(c, "Create article success", result)
}
