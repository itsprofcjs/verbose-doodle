# base image to work on
FROM node:alpine

# Workdir
WORKDIR /var/app/site-hits

# copy package.json
COPY ./package.json .
# install the node package dependencies
RUN npm install --legacy-peer-dependencies
# Copy code
COPY . .

CMD ["npm", "start"]