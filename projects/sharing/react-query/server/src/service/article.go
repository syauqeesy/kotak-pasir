package service

import (
	"context"
	"syauqeesy/react-query/src/model"
	"syauqeesy/react-query/src/payload"
)

type ArticleService interface {
	List(ctx context.Context) ([]*payload.ArticleInfo, error)
	Detail(ctx context.Context, request *payload.ArticleDetailRequest) (*payload.ArticleInfo, error)
	Create(ctx context.Context, request *payload.ArticleCreateRequest) (*payload.ArticleInfo, error)
	Edit(ctx context.Context, request *payload.ArticleEditRequest) (*payload.ArticleInfo, error)
}

type articleService service

func (s *articleService) List(ctx context.Context) ([]*payload.ArticleInfo, error) {
	articleInfos := make([]*payload.ArticleInfo, 0)

	articles, err := s.Repository.Article.Select(ctx)
	if err != nil {
		return nil, err
	}

	for _, article := range articles {
		articleInfos = append(articleInfos, article.GetPublicInfo())
	}

	return articleInfos, nil
}

func (s *articleService) Detail(ctx context.Context, request *payload.ArticleDetailRequest) (*payload.ArticleInfo, error) {
	article, err := s.Repository.Article.SelectById(ctx, request.Id)
	if err != nil {
		return nil, err
	}

	return article.GetPublicInfo(), nil
}

func (s *articleService) Create(ctx context.Context, request *payload.ArticleCreateRequest) (*payload.ArticleInfo, error) {
	article, err := model.CreateArticleModel(request.Title, request.Body)
	if err != nil {
		return nil, err
	}

	err = s.Repository.Article.Insert(ctx, article)
	if err != nil {
		return nil, err
	}

	return article.GetPublicInfo(), nil
}

func (s *articleService) Edit(ctx context.Context, request *payload.ArticleEditRequest) (*payload.ArticleInfo, error) {
	article, err := s.Repository.Article.SelectById(ctx, request.Id)
	if err != nil {
		return nil, err
	}

	if request.Title != nil && *request.Title != "" {
		if err := article.SetTitle(*request.Title); err != nil {
			return nil, err
		}
	}
	if request.Body != nil && *request.Body != "" {
		if err := article.SetBody(*request.Body); err != nil {
			return nil, err
		}
	}

	err = s.Repository.Article.Update(ctx, article)
	if err != nil {
		return nil, err
	}

	return article.GetPublicInfo(), nil
}
