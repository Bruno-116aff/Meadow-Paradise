#!/usr/bin/env python3
"""
Очищает проект от временных файлов анализа и ненужной документации
"""

import os
import shutil
from pathlib import Path

def cleanup_analysis_files():
    """Удаляет файлы анализа и временные файлы"""
    
    files_to_remove = [
        # JSON файлы анализа
        "complete-photo-analysis.json",
        "image-analysis.json", 
        "image-optimization-plan.json",
        "rename-plan.json",
        "renaming-report.json",
        "organization-log.json",
        "responsive-images-config.json",
        
        # Документация анализа (можно переместить в doc)
        "IMAGE-ORGANIZATION.md",
        "PHOTO-ANALYSIS-REPORT.md", 
        "WEBSITE-UPDATE-REPORT.md",
        
        # Документация разработки (можно переместить в doc)
        "DEVELOPMENT.md",
        "DOCKER.md"
    ]
    
    print("REMOVING ANALYSIS AND TEMPORARY FILES")
    print("-" * 50)
    
    removed_count = 0
    for file_name in files_to_remove:
        file_path = Path(file_name)
        if file_path.exists():
            file_path.unlink()
            print(f"Removed: {file_name}")
            removed_count += 1
        else:
            print(f"Not found: {file_name}")
    
    print(f"\nRemoved {removed_count} analysis files")

def cleanup_scripts():
    """Очищает папку scripts от ненужных файлов"""
    
    scripts_dir = Path("scripts")
    
    # Файлы для удаления (временные скрипты анализа)
    scripts_to_remove = [
        "analyze-all-photos.py",
        "analyze-images.py", 
        "apply-renaming.py",
        "organize-images.bat",
        "organize-images.ps1",
        "organize-into-folders.py",
        "rename-images.py",
        "update-website-images.py",
        "optimize-images.py"
    ]
    
    # Файлы для сохранения (полезные скрипты)
    scripts_to_keep = [
        "docker-dev.sh",
        "docker-dev.ps1", 
        "monitor.sh",
        "monitor.ps1",
        "start-docker-desktop.sh",
        "start-docker-desktop.ps1",
        "cleanup-project.py"  # Этот скрипт
    ]
    
    print(f"\nCLEANING UP SCRIPTS FOLDER")
    print("-" * 40)
    
    removed_count = 0
    for script in scripts_to_remove:
        script_path = scripts_dir / script
        if script_path.exists():
            script_path.unlink()
            print(f"Removed: scripts/{script}")
            removed_count += 1
    
    print(f"\nScripts to keep:")
    for script in scripts_to_keep:
        script_path = scripts_dir / script
        if script_path.exists():
            print(f"  * scripts/{script}")
    
    print(f"\nRemoved {removed_count} temporary scripts")

def organize_documentation():
    """Организует документацию в папку doc"""
    
    doc_dir = Path("doc")
    doc_dir.mkdir(exist_ok=True)
    
    # Создаем основной README для документации
    main_readme = doc_dir / "README.md"
    with open(main_readme, 'w', encoding='utf-8') as f:
        f.write("""# Meadow Paradise Rancho - Документация

## Структура проекта

- **Полное описание.txt** - Техническое задание на создание сайта
- **Промт.txt** - Промт для генерации сайта

## Описание проекта

Meadow Paradise Rancho - это одностраничный сайт ранчо в Пиргосе (Лимассол), созданный с использованием React, Vite, TypeScript и TailwindCSS.

### Основные особенности:
- Современный минималистичный дизайн
- Полная адаптивность
- SEO оптимизация
- Доступность (WCAG AA)
- Производительность (Lighthouse 90+)
- Docker для разработки

### Технологии:
- React 19
- TypeScript
- TailwindCSS 4
- React Router 7
- Vite

### Структура:
- `app/` - Исходный код приложения
- `public/` - Статические файлы
- `scripts/` - Полезные скрипты для разработки
- `Dockerfile*` - Конфигурации Docker
- `docker-compose*.yml` - Docker Compose файлы
""")
    
    print(f"\nORGANIZED DOCUMENTATION")
    print("-" * 30)
    print(f"Created: doc/README.md")
    print(f"Existing docs:")
    
    for doc_file in doc_dir.iterdir():
        if doc_file.is_file():
            print(f"  * doc/{doc_file.name}")

def cleanup_backup_images():
    """Опционально удаляет backup изображений (большие файлы)"""
    
    backup_dir = Path("public/images/backup")
    
    if backup_dir.exists():
        backup_size = sum(f.stat().st_size for f in backup_dir.rglob('*') if f.is_file())
        backup_size_mb = backup_size / (1024 * 1024)
        
        print(f"\nBACKUP IMAGES")
        print("-" * 20)
        print(f"Backup folder: {backup_dir}")
        print(f"Backup size: {backup_size_mb:.1f}MB")
        print(f"Files count: {len(list(backup_dir.rglob('*')))}")
        
        response = input("\nDelete backup images? (y/N): ").lower().strip()
        if response == 'y':
            shutil.rmtree(backup_dir)
            print("* Backup images deleted")
        else:
            print("* Backup images kept")

def cleanup_gallery_readmes():
    """Удаляет README файлы из папок галереи"""
    
    gallery_dir = Path("public/images/gallery")
    
    print(f"\nCLEANING GALLERY READMES")
    print("-" * 30)
    
    removed_count = 0
    for readme in gallery_dir.rglob("README.md"):
        readme.unlink()
        print(f"Removed: {readme}")
        removed_count += 1
    
    print(f"Removed {removed_count} README files from gallery folders")

def update_main_readme():
    """Обновляет основной README.md"""
    
    readme_content = """# 🐎 Meadow Paradise Rancho

Красивый одностраничный сайт ранчо в Пиргосе (Лимассол) с современным дизайном.

## 🚀 Быстрый старт

### Docker разработка (рекомендуется):

```bash
# Запуск с Docker Desktop мониторингом
.\scripts\start-docker-desktop.ps1

# Или простой запуск
docker-compose -f docker-compose.dev.yml up --build -d
```

Откройте http://localhost:5173 в браузере.

### Обычная разработка:

```bash
npm install
npm run dev
```

## 🛠 Технологии

- **React 19** - UI библиотека
- **TypeScript** - Типизация
- **TailwindCSS 4** - Стили
- **Vite** - Сборщик
- **React Router 7** - Роутинг
- **Docker** - Контейнеризация

## 📁 Структура

- `app/` - Исходный код
- `public/` - Статические файлы
- `scripts/` - Полезные скрипты
- `doc/` - Документация

## 🎨 Особенности

- ✅ Адаптивный дизайн
- ✅ SEO оптимизация
- ✅ Доступность (WCAG AA)
- ✅ Производительность
- ✅ Hot reload в Docker
- ✅ Ленивая загрузка изображений

## 📞 Контакты

**Meadow Paradise Rancho**  
📍 Пиргос, Лимассол, Кипр  
📞 +35797719752  
📧 info@meadowparadise.com  
🌐 [Instagram](https://www.instagram.com/meadow.paradise)

---

*Предварительная запись обязательна* 🐎✨
"""
    
    with open("README.md", 'w', encoding='utf-8') as f:
        f.write(readme_content)
    
    print(f"\nUPDATED MAIN README")
    print("-" * 25)
    print("* README.md updated with clean, concise information")

def main():
    print("CLEANING UP MEADOW PARADISE RANCHO PROJECT")
    print("=" * 60)
    
    # Очищаем файлы анализа
    cleanup_analysis_files()
    
    # Очищаем скрипты
    cleanup_scripts()
    
    # Организуем документацию
    organize_documentation()
    
    # Удаляем README из галереи
    cleanup_gallery_readmes()
    
    # Обновляем основной README
    update_main_readme()
    
    # Опционально удаляем backup
    cleanup_backup_images()
    
    print(f"\n" + "="*60)
    print("PROJECT CLEANUP COMPLETE!")
    print("="*60)
    print("* Removed all analysis files")
    print("* Cleaned up temporary scripts")
    print("* Organized documentation in doc/")
    print("* Updated main README")
    print("* Removed gallery README files")
    print("\nYour project is now clean and organized! 🐎✨")

if __name__ == "__main__":
    main()
