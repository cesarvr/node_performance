#!/bin/bash

rm perf.*> /dev/null
perf record -F 99 -p `pgrep -n node`
