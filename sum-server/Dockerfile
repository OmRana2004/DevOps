# In this Dockerfile abhi hum nea normal rakha ha jis waja sea whenever we change our source code tho npm install chaced nahi ho re .

FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"] 


# FROM node:22-alpine

# WORKDIR /app

# COPY ./package.json ./package.json
# COPY ./package-lock.json ./package-lock.json
# RUN npm install

# COPY . .


# EXPOSE 3000

# CMD ["node", "index.js"] 
