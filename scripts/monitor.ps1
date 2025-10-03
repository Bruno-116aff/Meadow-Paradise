# PowerShell скрипт для мониторинга разработки в реальном времени

function Show-Menu {
    Write-Host ""
    Write-Host "Выберите действие:" -ForegroundColor Cyan
    Write-Host "1) 📊 Показать статус контейнеров" -ForegroundColor White
    Write-Host "2) 📝 Показать логи dev сервера" -ForegroundColor White
    Write-Host "3) 🔍 Показать использование ресурсов" -ForegroundColor White
    Write-Host "4) 🌐 Открыть приложение в браузере" -ForegroundColor White
    Write-Host "5) 🐚 Открыть shell в контейнере" -ForegroundColor White
    Write-Host "6) 🔄 Перезапустить контейнер" -ForegroundColor White
    Write-Host "7) 🛑 Остановить контейнер" -ForegroundColor White
    Write-Host "8) 📈 Показать статистику сети" -ForegroundColor White
    Write-Host "9) 💾 Показать использование диска" -ForegroundColor White
    Write-Host "0) ❌ Выход" -ForegroundColor White
    Write-Host ""
}

function Check-Container {
    $containerStatus = docker-compose -f docker-compose.dev.yml ps 2>$null
    if (-not ($containerStatus -match "meadow-paradise-dev.*Up")) {
        Write-Host "❌ Контейнер не запущен. Запускаем..." -ForegroundColor Red
        docker-compose -f docker-compose.dev.yml up --build -d
        Start-Sleep -Seconds 3
    }
}

Write-Host "🐎 Meadow Paradise Rancho - Development Monitor" -ForegroundColor Green
Write-Host "==============================================" -ForegroundColor Green

# Основной цикл
while ($true) {
    Check-Container
    Show-Menu
    
    $choice = Read-Host "Введите номер (0-9)"
    
    switch ($choice) {
        "1" {
            Write-Host "📊 Статус контейнеров:" -ForegroundColor Cyan
            docker-compose -f docker-compose.dev.yml ps
        }
        "2" {
            Write-Host "📝 Логи dev сервера (Ctrl+C для выхода):" -ForegroundColor Cyan
            docker-compose -f docker-compose.dev.yml logs -f meadow-paradise-dev
        }
        "3" {
            Write-Host "🔍 Использование ресурсов:" -ForegroundColor Cyan
            docker stats meadow-paradise-rancho-meadow-paradise-dev-1 --no-stream
        }
        "4" {
            Write-Host "🌐 Открываем приложение в браузере..." -ForegroundColor Cyan
            Start-Process "http://localhost:5173"
        }
        "5" {
            Write-Host "🐚 Открываем shell в контейнере..." -ForegroundColor Cyan
            docker-compose -f docker-compose.dev.yml exec meadow-paradise-dev sh
        }
        "6" {
            Write-Host "🔄 Перезапускаем контейнер..." -ForegroundColor Yellow
            docker-compose -f docker-compose.dev.yml restart meadow-paradise-dev
        }
        "7" {
            Write-Host "🛑 Останавливаем контейнер..." -ForegroundColor Yellow
            docker-compose -f docker-compose.dev.yml stop meadow-paradise-dev
        }
        "8" {
            Write-Host "📈 Статистика сети:" -ForegroundColor Cyan
            docker network ls
            Write-Host ""
            docker network inspect meadow-paradise-rancho_dev-network
        }
        "9" {
            Write-Host "💾 Использование диска:" -ForegroundColor Cyan
            docker system df
        }
        "0" {
            Write-Host "👋 До свидания!" -ForegroundColor Green
            exit 0
        }
        default {
            Write-Host "❌ Неверный выбор. Попробуйте снова." -ForegroundColor Red
        }
    }
    
    Write-Host ""
    Read-Host "Нажмите Enter для продолжения..."
}
