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
echo [2] shutdown bot
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
if %udefine%==2 goto shutdown

if %udefine%==e (
exit
)



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


:ok
echo connecting.....
CMD /k node original-file.js
TIMEOUT 100000000000
