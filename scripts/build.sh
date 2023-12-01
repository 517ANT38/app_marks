echo "Build started"

cd \$(dirname \$0)/.. || exit 1

DOCKER_BUILDKIT=1 docker build -f build-elements/Dockerfile -t app/appmarks .