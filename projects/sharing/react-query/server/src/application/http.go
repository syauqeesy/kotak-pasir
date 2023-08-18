package application

import (
	"context"
	"log"

	"syauqeesy/react-query/config"
	"syauqeesy/react-query/src/handler"
	application_middleware "syauqeesy/react-query/src/middleware"
	"syauqeesy/react-query/src/repository"
	"syauqeesy/react-query/src/service"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

type httpApplication struct {
	Arguments  []string
	Config     *config.Config
	SubCommand string
}

func (a *httpApplication) Run() error {
	echo := echo.New()
	gracefullShutdown := NewGracefullShutdown()

	database, err := InitializeDB(a.Config)
	if err != nil {
		return err
	}

	handler.NewHandler(
		echo,
		service.NewService(repository.NewRepository(database), a.Config),
		application_middleware.NewMiddleware(a.Config),
	)

	go func() {
		gracefullShutdown.Wait()

		if err := echo.Shutdown(context.Background()); err != nil {
			log.Printf("error in shutdown the server: %v.", err)
		}

	}()

	echo.Use(middleware.CORS())

	echo.Static("/asset", "./storage")

	echo.Start(a.Config.Application.Address)

	return nil
}
