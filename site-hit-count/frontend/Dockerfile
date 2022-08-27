# get the base image for further operation
# alias it with name to refer at later stage 
FROM node:alpine as buildStage

# base context to work with
WORKDIR /var/frontend

# copy package.json to workdir
COPY package.json .

# install dependencies
RUN npm i --legacy-peer-deps

# copy all the files to build
COPY . .

# make a production build
RUN npm run build

# Production build is completed
# Move to next stage to deploy to nginx
FROM nginx

COPY --from=buildStage /var/frontend/build /usr/share/nginx/html