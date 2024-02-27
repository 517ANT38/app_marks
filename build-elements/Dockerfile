FROM node:19-alpine as build
WORKDIR /node_app
COPY app app
COPY index.js index.js
COPY package.json package.json
COPY --chmod=0755 build-elements/run.sh run.sh
RUN npm install
FROM build
COPY . .
ENTRYPOINT [ "./run.sh" ]
