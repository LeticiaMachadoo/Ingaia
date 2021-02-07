# pull official base image
FROM node:14-alpine

ENV HOME=/home/client/

COPY package.json yarn.lock $HOME

# set working directory
WORKDIR $HOME

# install app dependencies
RUN yarn && yarn cache clean

# add app
COPY . $HOME

# start app
CMD ["yarn", "start"]