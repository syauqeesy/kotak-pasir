package cmd

import (
	"syauqeesy/react-query/src/application"

	"github.com/spf13/cobra"
)

var migrationCommand = &cobra.Command{
	Use:   "migration",
	Short: "List migration commands",
}

func runMigration(subCommand string, args []string) error {
	err := application.Run(application.APPLICATION_MIGRATION, application.WithSubCommand(subCommand), application.WithArguments(args))
	if err != nil {
		return err
	}

	return nil
}

func init() {
	root.AddCommand(migrationCommand)
}
