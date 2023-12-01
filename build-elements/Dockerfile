FROM node


ARG APP_DIR=workspace
ARG APPUSER=ant
ARG APPGROUP=gant

RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

COPY app app
COPY index.js .
COPY .env .env
COPY package.json package.json
COPY --chmod=0755 build-elements/run.sh run.sh
RUN npm install

RUN addgroup --system ${APPGROUP} && adduser  --ingroup ${APPGROUP} --system ${APPUSER}
USER ${APPUSER}

EXPOSE 4567
ENTRYPOINT [ "./run.sh" ]
