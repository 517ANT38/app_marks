FROM node:19-alpine
WORKDIR /node_app
COPY app app
COPY index.js index.js
COPY package.json package.json
COPY --chmod=0755 build-elements/run.sh run.sh
RUN npm install
ENTRYPOINT [ "./run.sh" ]
