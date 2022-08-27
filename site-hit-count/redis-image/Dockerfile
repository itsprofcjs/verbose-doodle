# an existing docker image as base generally system image
FROM alpine

# once system base image is ready, we download and install our tools
RUN apk add --update redis


# default cmd for to run when launced as container
# this could be overwriiten with run -it
CMD [ "redis-server" ]