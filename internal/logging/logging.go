package logging

import (
    "github.com/sirupsen/logrus"
)

var log = logrus.New()

func InitLogging() {
    log.SetFormatter(&logrus.JSONFormatter{})
    log.SetLevel(logrus.InfoLevel)
}

func LogInfo(message string) {
    log.Info(message)
}

func LogError(message string) {
    log.Error(message)
}
