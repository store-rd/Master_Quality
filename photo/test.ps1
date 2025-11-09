# التحقق من وجود ImageMagick
if (-not (Get-Command "magick" -ErrorAction SilentlyContinue)) {
    Write-Error "يرجى تثبيت ImageMagick أولاً وتأكد من إضافته إلى مسار النظام (PATH)."
    return
}

# تحديد مسار المجلد الحالي الذي يعمل منه السكربت
$currentFolder = Get-Location
Write-Host "بدء العمل في المجلد: $currentFolder" -ForegroundColor Cyan

# جلب جميع صور JPG و WebP
$images = Get-ChildItem -Path $currentFolder -Include *.jpg, *.jpeg, *.png, *.webp -File

foreach ($img in $images) {
    Write-Host "معالجة الملف: $($img.Name)..." -NoNewline

    # تحديد اسم الملف الجديد بصيغة WebP
    $newFileName = [System.IO.Path]::ChangeExtension($img.FullName, ".webp")
    
    # التعامل مع الحالة التي يكون فيها الملف الأصلي هو نفسه ويب (لتجنب مشاكل الكتابة فوق الملف أثناء القراءة)
    $isSameFile = ($img.FullName -eq $newFileName)
    $targetPath = if ($isSameFile) { "$newFileName.tmp" } else { $newFileName }

    # تنفيذ أمر التحويل وتغيير الحجم
    # -resize 1920x1080 : يحافظ على الأبعاد الأصلية بحيث تتناسب داخل هذا الإطار (الأفضل لتجنب تمطيط الصورة)
    # إذا أردت إجبار الأبعاد لتكون 1920×1080 بالضبط حتى لو تم تمطيط الصورة، استخدم: -resize 1920x1080!
    magick "$($img.FullName)" -resize 1920x1080 -quality 85 "$targetPath"

    # التحقق من نجاح العملية
    if ($LASTEXITCODE -eq 0) {
        if ($isSameFile) {
            # إذا كان الملف الأصلي webp، نقوم باستبداله بالملف المؤقت الجديد
            Move-Item -Force -LiteralPath $targetPath -Destination $img.FullName
            Write-Host " [تم تغيير الحجم]" -ForegroundColor Green
        } elseif (Test-Path -LiteralPath $targetPath) {
            # إذا تم إنشاء الملف الجديد بنجاح، نحذف القديم
            Remove-Item -Force -LiteralPath $img.FullName
            Write-Host " [تم التحويل والحذف]" -ForegroundColor Green
        }
    } else {
        Write-Host " [فشل]" -ForegroundColor Red
    }
}

Write-Host "`nتم الانتهاء من جميع العمليات." -ForegroundColor Cyan
Start-Sleep -Seconds 3