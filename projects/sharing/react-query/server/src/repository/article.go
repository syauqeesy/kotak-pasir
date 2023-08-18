package repository

import (
	"context"
	"errors"
	application_error "syauqeesy/react-query/src/application-error"
	"syauqeesy/react-query/src/model"

	"gorm.io/gorm"
)

type ArticleRepository interface {
	Insert(ctx context.Context, article *model.ArticleModel) error
	Update(ctx context.Context, article *model.ArticleModel) error
	SelectById(ctx context.Context, id string) (*model.ArticleModel, error)
	Select(ctx context.Context) ([]*model.ArticleModel, error)
}

type articleRepository repository

func (r *articleRepository) Insert(ctx context.Context, article *model.ArticleModel) error {
	err := r.Database.WithContext(ctx).Create(article).Error
	if err != nil {
		return err
	}

	return nil
}

func (r *articleRepository) Update(ctx context.Context, article *model.ArticleModel) error {
	err := r.Database.WithContext(ctx).Save(&article).Error
	if err != nil {
		return err
	}

	return nil
}

func (r *articleRepository) SelectById(ctx context.Context, id string) (*model.ArticleModel, error) {
	article := &model.ArticleModel{}

	err := r.Database.WithContext(ctx).Where("id = ?", id).First(&article).Error
	if err != nil && !errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, application_error.ERR_REQUIRED_ARTICLE_NOT_FOUND
	}

	if err != nil {
		return nil, err
	}

	return article, nil
}

func (r *articleRepository) Select(ctx context.Context) ([]*model.ArticleModel, error) {
	articles := make([]*model.ArticleModel, 0)

	err := r.Database.WithContext(ctx).Order("created_at DESC").Find(&articles).Error
	if err != nil {
		return nil, err
	}

	return articles, nil
}
