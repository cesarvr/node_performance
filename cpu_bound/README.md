
## Getting Started

Building
```sh
  docker build -t bench .
```

Running
```sh
  docker run -i -d -p 8080:8080 -v $(pwd):/usr/src/app --name test bench
```
