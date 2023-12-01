FROM node

ARG APP_DIR=workspace
ARG APPUSER=ant
ARG APPGROUP=ant
RUN addgroup -S \${APPGROUP} && adduser -S \${APPUSER} -G \${APPGROUP}
USER \${APPUSER}

RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

COPY app app
COPY index.js .
COPY .env .env
COPY package.json package.json
COPY --chmod=0755 build-elements/run.sh run.sh
RUN npm install

EXPOSE 4567
ENTRYPOINT [ "./run.sh" ]
