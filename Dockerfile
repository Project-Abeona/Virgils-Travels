FROM nikolaik/python-nodejs:python3.7-nodejs13

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /app
COPY . .

WORKDIR /app/front-end
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]

