package payload

import "time"

type ArticleInfo struct {
	Id        string    `json:"id"`
	Title     string    `json:"title"`
	Body      string    `json:"body"`
	CreatedAt time.Time `json:"created_at"`
}

type ArticleDetailRequest struct {
	Id string `param:"id"`
}

type ArticleCreateRequest struct {
	Title string `json:"title"`
	Body  string `json:"body"`
}

type ArticleEditRequest struct {
	Id    string  `json:"id"`
	Title *string `json:"title"`
	Body  *string `json:"body"`
}
