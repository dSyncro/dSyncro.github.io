@echo off

cd %~dp0/../style
sass --watch source/style.scss build/style.css