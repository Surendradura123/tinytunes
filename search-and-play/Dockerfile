FROM node

COPY index.js /app/index.js
COPY package*.json /app/
COPY songs /app/songs

WORKDIR /app/

RUN npm install

CMD ["node", "index.js"]
