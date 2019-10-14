FROM nikolaik/python-nodejs:latest

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /app

# Installing dependencies
RUN npm install

# Build Front-end
RUN npm run build

# Installing Serve
RUN npm install -g serve

# Serve Static Content
RUN serve -l 3000 -s build

# Copying source files
COPY . .

# Running Backend Flask API Server
RUN python .\mysqlloginreg.py