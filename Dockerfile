###########
# Builder #
###########

# pull official base image
FROM node:16.5.0-alpine as builder

# set working directory
WORKDIR /usr/src/app

# add `usr/src/app/node_module/.bin` to $PATH
ENV PATH /usr/src/app/node_module/.bin:$PATH

# install add cache app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci

# create build
COPY . .
RUN npm run build

# final #

#base image
FROM nginx:1.19.4-alpine

# update nginx conf
RUN rm -rf /etc/nginx/conf.d 
COPY conf /etc/nginx

#copy static files
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# expose port
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]