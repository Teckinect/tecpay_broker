FROM node:10

WORKDIR /tecpay_broker

COPY package.json  ./

RUN npm install -g nodemon --no-progress --ignore-optional

RUN npm install --no-progress --ignore-optional

EXPOSE 2999

CMD npm run dev
