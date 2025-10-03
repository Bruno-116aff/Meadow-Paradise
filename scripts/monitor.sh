#!/bin/bash

# Скрипт для мониторинга разработки в реальном времени

echo "🐎 Meadow Paradise Rancho - Development Monitor"
echo "=============================================="

# Функция для показа меню
show_menu() {
    echo ""
    echo "Выберите действие:"
    echo "1) 📊 Показать статус контейнеров"
    echo "2) 📝 Показать логи dev сервера"
    echo "3) 🔍 Показать использование ресурсов"
    echo "4) 🌐 Открыть приложение в браузере"
    echo "5) 🐚 Открыть shell в контейнере"
    echo "6) 🔄 Перезапустить контейнер"
    echo "7) 🛑 Остановить контейнер"
    echo "8) 📈 Показать статистику сети"
    echo "9) 💾 Показать использование диска"
    echo "0) ❌ Выход"
    echo ""
    read -p "Введите номер (0-9): " choice
}

# Проверяем, запущен ли контейнер
check_container() {
    if ! docker-compose -f docker-compose.dev.yml ps | grep -q "meadow-paradise-dev.*Up"; then
        echo "❌ Контейнер не запущен. Запускаем..."
        docker-compose -f docker-compose.dev.yml up --build -d
        sleep 3
    fi
}

# Основной цикл
while true; do
    check_container
    show_menu
    
    case $choice in
        1)
            echo "📊 Статус контейнеров:"
            docker-compose -f docker-compose.dev.yml ps
            ;;
        2)
            echo "📝 Логи dev сервера (Ctrl+C для выхода):"
            docker-compose -f docker-compose.dev.yml logs -f meadow-paradise-dev
            ;;
        3)
            echo "🔍 Использование ресурсов:"
            docker stats meadow-paradise-rancho-meadow-paradise-dev-1 --no-stream
            ;;
        4)
            echo "🌐 Открываем приложение в браузере..."
            if command -v xdg-open > /dev/null; then
                xdg-open http://localhost:5173
            elif command -v open > /dev/null; then
                open http://localhost:5173
            else
                echo "Откройте http://localhost:5173 в браузере"
            fi
            ;;
        5)
            echo "🐚 Открываем shell в контейнере..."
            docker-compose -f docker-compose.dev.yml exec meadow-paradise-dev sh
            ;;
        6)
            echo "🔄 Перезапускаем контейнер..."
            docker-compose -f docker-compose.dev.yml restart meadow-paradise-dev
            ;;
        7)
            echo "🛑 Останавливаем контейнер..."
            docker-compose -f docker-compose.dev.yml stop meadow-paradise-dev
            ;;
        8)
            echo "📈 Статистика сети:"
            docker network ls
            echo ""
            docker network inspect meadow-paradise-rancho_dev-network
            ;;
        9)
            echo "💾 Использование диска:"
            docker system df
            ;;
        0)
            echo "👋 До свидания!"
            exit 0
            ;;
        *)
            echo "❌ Неверный выбор. Попробуйте снова."
            ;;
    esac
    
    echo ""
    read -p "Нажмите Enter для продолжения..."
done
