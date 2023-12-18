#!/bin/sh
echo "Build started"

gd=docker
gr=$(groups "$USER" | grep -o -w "\b$gd\b")

if [ "$gd" = "$gr" ]; then
    cd $(dirname $0)/.. || exit 1
    DOCKER_BUILDKIT=1 docker build -f build-elements/Dockerfile -t app/appmarks .
else
    echo "User $USER is not a member of the Docker group."
    exit 1
fi