
## Getting Started

Building
```sh
  docker build -t bench .
```

Running
```sh
  docker run -i -d -p 8080:8080 -v \
   --security-opt seccomp=https://github.com/moby/moby/blob/master/profiles/seccomp/default.json \
   $(pwd):/usr/src/app --name test bench
```
