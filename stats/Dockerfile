FROM node

COPY index.js /app/index.js
COPY package*.json /app/

WORKDIR /app/

RUN npm install

CMD ["node", "index.js"]
