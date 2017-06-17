#!/usr/bin/env bash
docker rm --force chatapp
npm install
docker build -t chatapp .
docker run -p 49160:8080 -v $(pwd)/src:/usr/src/app/src -d chatapp
# docker ps
curl -i localhost:49160
docker logs chatapp