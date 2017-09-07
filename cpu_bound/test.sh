#!/bin/bash 

#new node process
node --trace_deopt --perf-basic-prof application.js &
LOG=time_table

echo "waiting for server..."
sleep 5

echo "benchmarking..."

rm $LOG *.log 2> /dev/null 

for i in {1..150} 
do 
  curl -w '%{time_total}\n' -s -o /dev/null "http://localhost:8080/fib" > $LOG &
  curl -w '%{time_total}\n' -s -o /dev/null "http://localhost:8080/fast" > $LOG &  
done


#Just checking if we have serve all request
while true 
do
  if [[ $(pgrep curl) ]]; then
    echo "waiting..."
  else 

    echo "cleaning.."
    curl -s "http://localhost:8080/sample"

    #cleaning some logs emited by v8
    rm *.log 2> /dev/null

    echo "time elapsed: $(tail $LOG)" 

    pgrep node | xargs kill

    break 
  fi
  sleep 1
done 
