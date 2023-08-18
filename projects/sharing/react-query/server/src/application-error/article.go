package application_error

import (
	"net/http"
	"syauqeesy/react-query/common"
)

var ERR_REQUIRED_ARTICLE_TITLE = common.CreateApplicationError(
	http.StatusBadRequest,
	"title is required",
)
var ERR_MAXIMUM_LENGTH_ARTICLE_TITLE = common.CreateApplicationError(
	http.StatusBadRequest,
	"title cannot be more than 191 characters",
)

var ERR_REQUIRED_ARTICLE_BODY = common.CreateApplicationError(
	http.StatusBadRequest,
	"body is required",
)

var ERR_REQUIRED_ARTICLE_NOT_FOUND = common.CreateApplicationError(
	http.StatusBadRequest,
	"article not found",
)
