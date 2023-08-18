package model

import (
	"time"

	application_error "syauqeesy/react-query/src/application-error"
	"syauqeesy/react-query/src/payload"

	"github.com/google/uuid"
)

type ArticleModel struct {
	Id        string `gorm:"primaryKey;type:char(36);not null"`
	Title     string `gorm:"type:varchar(191);not null"`
	Body      string `gorm:"type:text;not null"`
	CreatedAt int64  `gorm:"autoCreateTime:milli;not null"`
	UpdatedAt *int64 `gorm:"autoUpdateTime:milli;default:null"`
	DeletedAt *int64 `gorm:"softDelete:milli;default:null"`
}

func (ArticleModel) TableName() string {
	return "articles"
}

func CreateArticleModel(title string, body string) (*ArticleModel, error) {
	articleModel := &ArticleModel{
		Id: uuid.New().String(),
	}

	if err := articleModel.SetTitle(title); err != nil {
		return nil, err
	}
	if err := articleModel.SetBody(body); err != nil {
		return nil, err
	}

	return articleModel, nil
}

func (m *ArticleModel) SetTitle(title string) error {
	if len(title) < 1 {
		return application_error.ERR_REQUIRED_ARTICLE_TITLE
	}
	if len(title) > 191 {
		return application_error.ERR_MAXIMUM_LENGTH_ARTICLE_TITLE
	}

	m.Title = title

	return nil
}

func (m *ArticleModel) SetBody(body string) error {
	if len(body) < 1 {
		return application_error.ERR_REQUIRED_ARTICLE_BODY
	}

	m.Body = body

	return nil
}

func (m ArticleModel) GetPublicInfo() *payload.ArticleInfo {
	userInfo := &payload.ArticleInfo{
		Id:        m.Id,
		Title:     m.Title,
		Body:      m.Body,
		CreatedAt: time.Unix(0, m.CreatedAt*int64(time.Millisecond)),
	}

	return userInfo
}
