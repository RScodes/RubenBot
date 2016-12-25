@echo off
color 0a
title substitute bot
:top
echo ***************************************************************
echo.
echo options
echo.
echo ***************************************************************
echo.
echo Key: [1] start the bot
echo [2] matrix
echo [3] shutdown pc
echo.
echo [e] Exit
echo.
echo ***************************************************************
echo Enter the number of the option you would like to select:
echo.
set /p udefine= 
echo.
echo ***************************************************************
if %udefine%==1 goto ok
if %udefine%==2 goto matrix
if %udefine%==3 goto shutdown

if %udefine%==e (
exit
)

:ok
echo u wanna start the bot?
pause
echo u sure?
pause
echo alright then
pause
goto boot
:boot
node bot-first.js
pause 

:matrix

echo %random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%

goto matrix

:shutdown
color 0c
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo                                              ************************
echo                  *********           *    There's no way to stop this now   *
echo                 ***********           ************************
echo               *************            **********
echo               *     *****      *          ******
echo               *     *****      *         ****
echo               *  *******   ***        **
echo               *  *  *****   *  *       *
echo               *  *  *****   *  *
echo               ***************
echo               ***************
echo               ***************
echo               ***************
echo               ***************
echo               ***************
echo               ***************
echo               ***************
echo               ****    ***   ****
echo                 ***   **      ***
echo                   **   *       **
echo                     *           *
echo.
echo.
echo.
echo.
echo.
TIMEOUT 3
goto crash
:crash
%0
goto crash 
::this will not harm your pc in any way (usually)
