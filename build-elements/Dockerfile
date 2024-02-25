FROM node


ARG APP_DIR=workspace
ARG APPUSER=ant
ARG APPGROUP=ant
WORKDIR ${APP_DIR}


COPY app app
COPY index.js .
COPY package.json package.json
COPY --chmod=0755 build-elements/run.sh run.sh
RUN npm install

RUN addgroup --system ${APPGROUP} && adduser  --ingroup ${APPGROUP} --system ${APPUSER}
RUN chown -R ${APPUSER}:${APPGROUP} /${APP_DIR}
USER ${APPUSER}

ENTRYPOINT [ "./run.sh" ]
