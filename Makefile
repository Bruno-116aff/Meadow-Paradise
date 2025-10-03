# Meadow Paradise Rancho - Docker Development Makefile

.PHONY: help dev dev-detached stop logs shell clean build install monitor desktop-start

# Показать справку
help: ## Показать доступные команды
	@echo "🐎 Meadow Paradise Rancho - Docker Development"
	@echo "=============================================="
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

# Установка зависимостей
install: ## Установить зависимости
	@echo "📦 Устанавливаем зависимости..."
	npm install

# Запуск dev сервера в Docker
dev: ## Запустить dev сервер в Docker (с логами)
	@echo "🚀 Запускаем dev сервер в Docker..."
	docker-compose -f docker-compose.dev.yml up --build

# Запуск dev сервера в фоне
dev-detached: ## Запустить dev сервер в Docker (в фоне)
	@echo "🚀 Запускаем dev сервер в Docker (в фоне)..."
	docker-compose -f docker-compose.dev.yml up --build -d
	@echo "✅ Dev сервер запущен!"
	@echo "🌐 Откройте http://localhost:5173 в браузере"
	@echo "📝 Для просмотра логов: make logs"

# Остановка контейнеров
stop: ## Остановить Docker контейнеры
	@echo "🛑 Останавливаем контейнеры..."
	docker-compose -f docker-compose.dev.yml down

# Просмотр логов
logs: ## Показать логи dev сервера
	@echo "📝 Показываем логи..."
	docker-compose -f docker-compose.dev.yml logs -f meadow-paradise-dev

# Открытие shell в контейнере
shell: ## Открыть shell в Docker контейнере
	@echo "🐚 Открываем shell в контейнере..."
	docker-compose -f docker-compose.dev.yml exec meadow-paradise-dev sh

# Очистка Docker ресурсов
clean: ## Очистить Docker ресурсы
	@echo "🧹 Очищаем Docker ресурсы..."
	docker-compose -f docker-compose.dev.yml down -v
	docker system prune -f
	@echo "✅ Очистка завершена"

# Пересборка образа
build: ## Пересобрать Docker образ
	@echo "🔨 Пересобираем образ..."
	docker-compose -f docker-compose.dev.yml build --no-cache

# Перезапуск
restart: stop dev-detached ## Перезапустить dev сервер

# Проверка статуса
status: ## Показать статус контейнеров
	@echo "📊 Статус контейнеров:"
	docker-compose -f docker-compose.dev.yml ps

# Установка зависимостей в контейнере
install-docker: ## Установить зависимости в Docker контейнере
	@echo "📦 Устанавливаем зависимости в контейнере..."
	docker-compose -f docker-compose.dev.yml exec meadow-paradise-dev npm install

# Запуск команды в контейнере
exec: ## Выполнить команду в контейнере (использование: make exec CMD="npm run typecheck")
	@echo "⚡ Выполняем команду: $(CMD)"
	docker-compose -f docker-compose.dev.yml exec meadow-paradise-dev $(CMD)

# Проверка типов
typecheck: ## Проверить типы TypeScript
	@echo "🔍 Проверяем типы..."
	docker-compose -f docker-compose.dev.yml exec meadow-paradise-dev npm run typecheck

# Сборка проекта
build-app: ## Собрать проект в контейнере
	@echo "🔨 Собираем проект..."
	docker-compose -f docker-compose.dev.yml exec meadow-paradise-dev npm run build

# Запуск с Docker Desktop мониторингом
desktop-start: ## Запустить с Docker Desktop мониторингом
	@echo "🖥️ Запускаем с Docker Desktop мониторингом..."
	@./scripts/start-docker-desktop.sh

# Мониторинг в реальном времени
monitor: ## Запустить интерактивный мониторинг
	@echo "📊 Запускаем мониторинг..."
	@./scripts/monitor.sh

# Открыть в браузере
open: ## Открыть приложение в браузере
	@echo "🌐 Открываем приложение..."
	@if command -v xdg-open > /dev/null; then \
		xdg-open http://localhost:5173; \
	elif command -v open > /dev/null; then \
		open http://localhost:5173; \
	else \
		echo "Откройте http://localhost:5173 в браузере"; \
	fi
