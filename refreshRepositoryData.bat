@echo off
echo Refreshing REPO data.
echo Please make sure that you've set the HITMAN3_RUNTIME environment variable and that rpkg-cli is either in the path or in this directory directory.
cd builder
rm -rf repos
mkdir repos
cd repos
rpkg-cli -filter 00204D1AFD76AB13 -extract_from_rpkg "%HITMAN3_RUNTIME%\chunk0.rpkg"
rpkg-cli -filter 00204D1AFD76AB13 -extract_from_rpkg "%HITMAN3_RUNTIME%\chunk0patch1.rpkg"
rpkg-cli -filter 00204D1AFD76AB13 -extract_from_rpkg "%HITMAN3_RUNTIME%\chunk0patch2.rpkg"
cd ..\..