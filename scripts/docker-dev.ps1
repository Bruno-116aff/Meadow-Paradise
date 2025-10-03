# Meadow Paradise Rancho - Docker Development Script для Windows
# Использование: .\scripts\docker-dev.ps1 [команда]

param(
    [Parameter(Position=0)]
    [string]$Command = "help"
)

function Show-Help {
    Write-Host "🐎 Meadow Paradise Rancho - Docker Development Setup" -ForegroundColor Green
    Write-Host "==================================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Использование: .\scripts\docker-dev.ps1 [команда]" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Команды:" -ForegroundColor Cyan
    Write-Host "  start     - Запустить dev сервер в Docker" -ForegroundColor White
    Write-Host "  stop      - Остановить контейнеры" -ForegroundColor White
    Write-Host "  restart   - Перезапустить контейнеры" -ForegroundColor White
    Write-Host "  logs      - Показать логи dev сервера" -ForegroundColor White
    Write-Host "  shell     - Открыть shell в контейнере" -ForegroundColor White
    Write-Host "  clean     - Очистить Docker ресурсы" -ForegroundColor White
    Write-Host "  build     - Пересобрать образ" -ForegroundColor White
    Write-Host "  status    - Показать статус контейнеров" -ForegroundColor White
    Write-Host "  help      - Показать эту справку" -ForegroundColor White
    Write-Host ""
    Write-Host "Примеры:" -ForegroundColor Cyan
    Write-Host "  .\scripts\docker-dev.ps1 start" -ForegroundColor Gray
    Write-Host "  .\scripts\docker-dev.ps1 logs" -ForegroundColor Gray
}

# Проверяем наличие Docker
try {
    docker --version | Out-Null
} catch {
    Write-Host "❌ Docker не найден. Установите Docker Desktop." -ForegroundColor Red
    exit 1
}

# Проверяем наличие docker-compose
try {
    docker-compose --version | Out-Null
} catch {
    Write-Host "❌ docker-compose не найден. Установите Docker Compose." -ForegroundColor Red
    exit 1
}

switch ($Command.ToLower()) {
    "start" {
        Write-Host "🚀 Запускаем dev сервер..." -ForegroundColor Green
        docker-compose -f docker-compose.dev.yml up --build -d
        Write-Host "✅ Dev сервер запущен!" -ForegroundColor Green
        Write-Host "🌐 Откройте http://localhost:5173 в браузере" -ForegroundColor Cyan
        Write-Host "📝 Логи: .\scripts\docker-dev.ps1 logs" -ForegroundColor Yellow
    }
    
    "stop" {
        Write-Host "🛑 Останавливаем контейнеры..." -ForegroundColor Yellow
        docker-compose -f docker-compose.dev.yml down
        Write-Host "✅ Контейнеры остановлены" -ForegroundColor Green
    }
    
    "restart" {
        Write-Host "🔄 Перезапускаем контейнеры..." -ForegroundColor Yellow
        docker-compose -f docker-compose.dev.yml down
        docker-compose -f docker-compose.dev.yml up --build -d
        Write-Host "✅ Контейнеры перезапущены" -ForegroundColor Green
    }
    
    "logs" {
        Write-Host "📝 Показываем логи dev сервера..." -ForegroundColor Cyan
        docker-compose -f docker-compose.dev.yml logs -f meadow-paradise-dev
    }
    
    "shell" {
        Write-Host "🐚 Открываем shell в контейнере..." -ForegroundColor Cyan
        docker-compose -f docker-compose.dev.yml exec meadow-paradise-dev sh
    }
    
    "clean" {
        Write-Host "🧹 Очищаем Docker ресурсы..." -ForegroundColor Yellow
        docker-compose -f docker-compose.dev.yml down -v
        docker system prune -f
        Write-Host "✅ Очистка завершена" -ForegroundColor Green
    }
    
    "build" {
        Write-Host "🔨 Пересобираем образ..." -ForegroundColor Yellow
        docker-compose -f docker-compose.dev.yml build --no-cache
        Write-Host "✅ Образ пересобран" -ForegroundColor Green
    }
    
    "status" {
        Write-Host "📊 Статус контейнеров:" -ForegroundColor Cyan
        docker-compose -f docker-compose.dev.yml ps
    }
    
    "help" {
        Show-Help
    }
    
    default {
        Write-Host "❌ Неизвестная команда: $Command" -ForegroundColor Red
        Write-Host ""
        Show-Help
    }
}
