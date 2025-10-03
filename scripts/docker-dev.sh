#!/bin/bash

# Скрипт для удобной разработки в Docker

set -e

echo "🐎 Meadow Paradise Rancho - Docker Development Setup"
echo "=================================================="

# Функция для показа справки
show_help() {
    echo "Использование: ./scripts/docker-dev.sh [команда]"
    echo ""
    echo "Команды:"
    echo "  start     - Запустить dev сервер в Docker"
    echo "  stop      - Остановить контейнеры"
    echo "  restart   - Перезапустить контейнеры"
    echo "  logs      - Показать логи dev сервера"
    echo "  shell     - Открыть shell в контейнере"
    echo "  clean     - Очистить Docker ресурсы"
    echo "  build     - Пересобрать образ"
    echo "  help      - Показать эту справку"
    echo ""
    echo "Примеры:"
    echo "  ./scripts/docker-dev.sh start"
    echo "  ./scripts/docker-dev.sh logs"
}

# Проверяем наличие docker-compose
if ! command -v docker-compose &> /dev/null; then
    echo "❌ docker-compose не найден. Установите Docker Compose."
    exit 1
fi

# Проверяем наличие Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker не найден. Установите Docker."
    exit 1
fi

case "${1:-help}" in
    "start")
        echo "🚀 Запускаем dev сервер..."
        docker-compose -f docker-compose.dev.yml up --build -d
        echo "✅ Dev сервер запущен!"
        echo "🌐 Откройте http://localhost:5173 в браузере"
        echo "📝 Логи: ./scripts/docker-dev.sh logs"
        ;;
    
    "stop")
        echo "🛑 Останавливаем контейнеры..."
        docker-compose -f docker-compose.dev.yml down
        echo "✅ Контейнеры остановлены"
        ;;
    
    "restart")
        echo "🔄 Перезапускаем контейнеры..."
        docker-compose -f docker-compose.dev.yml down
        docker-compose -f docker-compose.dev.yml up --build -d
        echo "✅ Контейнеры перезапущены"
        ;;
    
    "logs")
        echo "📝 Показываем логи dev сервера..."
        docker-compose -f docker-compose.dev.yml logs -f meadow-paradise-dev
        ;;
    
    "shell")
        echo "🐚 Открываем shell в контейнере..."
        docker-compose -f docker-compose.dev.yml exec meadow-paradise-dev sh
        ;;
    
    "clean")
        echo "🧹 Очищаем Docker ресурсы..."
        docker-compose -f docker-compose.dev.yml down -v
        docker system prune -f
        echo "✅ Очистка завершена"
        ;;
    
    "build")
        echo "🔨 Пересобираем образ..."
        docker-compose -f docker-compose.dev.yml build --no-cache
        echo "✅ Образ пересобран"
        ;;
    
    "help"|*)
        show_help
        ;;
esac
