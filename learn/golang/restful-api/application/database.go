package application

import (
	"behoon/restful-api/helper"
	"database/sql"
)

func NewDB() *sql.DB {
	db, err := sql.Open("mysql", "root:sauki123@tcp(localhost:3306)/belajar_golang_restful_api")
	helper.PanicIfError(err)

	db.SetMaxIdleConns(2)
	db.SetMaxOpenConns(5)
	db.SetConnMaxLifetime(60 * 5)
	db.SetConnMaxIdleTime(60 * 10)

	return db
}
