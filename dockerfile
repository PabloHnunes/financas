FROM node:14
WORKDIR /financas
EXPOSE 3000
COPY . .
RUN npm install 
ENTRYPOINT npm start