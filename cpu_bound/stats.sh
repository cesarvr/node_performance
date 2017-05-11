#!/bin/bash
#cleaning some logs emited by v8
rm *.log 2> /dev/null

E_TIME="$(paste -sd+ time_table | bc)"
echo "total request time: $E_TIME"

#destroy the server
#echo "killing node process"
#pgrep node | xargs kill > /dev/null


