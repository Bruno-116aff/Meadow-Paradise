#!/bin/bash

# Скрипт для запуска в Docker Desktop с мониторингом

echo "🐎 Meadow Paradise Rancho - Docker Desktop Setup"
echo "=============================================="

# Проверяем, запущен ли Docker Desktop
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker Desktop не запущен. Запустите Docker Desktop и попробуйте снова."
    exit 1
fi

echo "✅ Docker Desktop запущен"

# Запускаем контейнер в фоне
echo "🚀 Запускаем dev сервер..."
docker-compose -f docker-compose.dev.yml up --build -d

echo ""
echo "✅ Контейнер запущен!"
echo ""
echo "📊 Мониторинг:"
echo "  • Docker Desktop: Откройте Docker Desktop → Containers"
echo "  • Веб-интерфейс: http://localhost:5173"
echo "  • Логи в терминале: make logs"
echo ""
echo "🔍 Полезные команды:"
echo "  make logs     - Показать логи в терминале"
echo "  make shell    - Открыть shell в контейнере"
echo "  make stop     - Остановить контейнер"
echo "  make status   - Показать статус"
echo ""
echo "🌐 Откройте http://localhost:5173 в браузере"
