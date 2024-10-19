FROM node:16-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app/build ./build
COPY package*.json ./
RUN npm ci --only=production

EXPOSE 3000

CMD ["npm", "start"]
