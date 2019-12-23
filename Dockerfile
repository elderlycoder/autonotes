FROM mhart/alpine-node:10

ARG APP_DIR=app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "index.js", "--level=debug"]
