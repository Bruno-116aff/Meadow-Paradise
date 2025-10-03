# PowerShell скрипт для запуска в Docker Desktop с мониторингом

Write-Host "🐎 Meadow Paradise Rancho - Docker Desktop Setup" -ForegroundColor Green
Write-Host "==============================================" -ForegroundColor Green

# Проверяем, запущен ли Docker Desktop
try {
    docker info | Out-Null
    Write-Host "✅ Docker Desktop запущен" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker Desktop не запущен. Запустите Docker Desktop и попробуйте снова." -ForegroundColor Red
    exit 1
}

# Запускаем контейнер в фоне
Write-Host "🚀 Запускаем dev сервер..." -ForegroundColor Yellow
docker-compose -f docker-compose.dev.yml up --build -d

Write-Host ""
Write-Host "✅ Контейнер запущен!" -ForegroundColor Green
Write-Host ""
Write-Host "📊 Мониторинг:" -ForegroundColor Cyan
Write-Host "  • Docker Desktop: Откройте Docker Desktop → Containers" -ForegroundColor White
Write-Host "  • Веб-интерфейс: http://localhost:5173" -ForegroundColor White
Write-Host "  • Логи в терминале: .\scripts\docker-dev.ps1 logs" -ForegroundColor White
Write-Host ""
Write-Host "🔍 Полезные команды:" -ForegroundColor Cyan
Write-Host "  .\scripts\docker-dev.ps1 logs     - Показать логи в терминале" -ForegroundColor White
Write-Host "  .\scripts\docker-dev.ps1 shell    - Открыть shell в контейнере" -ForegroundColor White
Write-Host "  .\scripts\docker-dev.ps1 stop     - Остановить контейнер" -ForegroundColor White
Write-Host "  .\scripts\docker-dev.ps1 status   - Показать статус" -ForegroundColor White
Write-Host ""
Write-Host "🌐 Откройте http://localhost:5173 в браузере" -ForegroundColor Cyan
