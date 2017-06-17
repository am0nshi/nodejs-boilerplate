FROM node:argon
MAINTAINER Nike Galaev "galaevnik@yandex.ru"

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
ADD package.json /usr/src/app/
#RUN npm install

# RUN npm install -g nodemon babel-cli

# Bundle app source
# COPY . /usr/src/app
COPY ./node_modules /usr/src/app/node_modules

RUN mkdir -p /usr/src/app/src

EXPOSE 8080

RUN ls -lh /usr/src/app/src

#CMD [ "bash" ]
CMD [ "npm", "run", "start3" ]