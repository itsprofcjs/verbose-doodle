# existing base system image to do further operations
FROM node:alpine

WORKDIR /usr/web/server

# install the dependencies and prepare the setup
COPY ./package.json ./
RUN npm install
COPY ./ ./

# append as the default startup command when the container run
# this could be overrriten with docker run -it
CMD ["npm", "start"]