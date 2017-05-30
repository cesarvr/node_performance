#!/bin/bash

rm perf.* 2> /dev/null
sudo perf stat -B  -p `pgrep -n node`
