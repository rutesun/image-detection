FROM node:9.3

EXPOSE 8080

WORKDIR /home/app

RUN npm install -g typescript

ADD package.json package-lock.json yarn.lock ./
RUN yarn install

ADD . ./
RUN \
  tsc && \
  yarn grunt

RUN chown -R node:node dist bin 
USER node
ENTRYPOINT ["./docker-entrypoint.sh"]
CMD [ "start" ]
