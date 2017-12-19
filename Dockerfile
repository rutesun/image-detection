FROM node:9.3

EXPOSE 8080

WORKDIR /home/app

ADD package.json package-lock.json yarn.lock $WORKDIR/

RUN yarn install
  
ADD . $WORKDIR

USER 0

RUN \
  chown -R node:node . 

USER node
ENTRYPOINT ["./docker-entrypoint.sh"]
CMD [ "start" ]
