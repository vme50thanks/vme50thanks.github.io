@echo off
chcp 65001 >nul
cd /d "d:\个人主页"

echo ====== 配置代理 ======
git config --global http.proxy http://127.0.0.1:10809
git config --global https.proxy http://127.0.0.1:10809
git config --global http.sslBackend openssl

echo.
echo ====== 当前变更 ======
git status

echo.
set /p MSG="输入提交信息（直接回车则用默认信息）: "
if "%MSG%"=="" set MSG=更新网站内容

echo.
echo ====== 提交中 ======
git add -A
git commit -m "%MSG%"

echo.
echo ====== 推送中 ======
:retry
git push
if %errorlevel% neq 0 (
    echo.
    echo 推送失败，5秒后重试...
    timeout /t 5 >nul
    goto retry
)

echo.
echo ====== 完成！======
pause
