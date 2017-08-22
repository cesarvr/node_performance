function toby_stop {
  ID=$(docker inspect --format="{{.Id}}" $1)
  docker stop $1
  docker rm $ID
}

function toby_iso {
    docker run -it -d -p 8080:8080 \
    -v $(pwd):/usr/src/app \
    --security-opt seccomp=$2 --name $1 bench
}
