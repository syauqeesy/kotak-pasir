package cmd

import (
	"log"

	"syauqeesy/react-query/src/application"

	"github.com/spf13/cobra"
)

var root = &cobra.Command{
	Use:     "boot",
	Short:   "Start the CRUD Application Server",
	Version: "v1.0.0",
	RunE: func(cmd *cobra.Command, args []string) error {
		err := application.Run(application.APPLICATION_HTTP, application.WithArguments(args))
		if err != nil {
			return err
		}

		return nil
	},
}

func Execute() {
	if err := root.Execute(); err != nil {
		log.Fatalf("Error executing the root cmd: %v.", err)
		panic(err)
	}
}
