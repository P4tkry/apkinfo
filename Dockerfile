FROM node:18-alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine as production
WORKDIR /app
RUN  apk update \
  && apk upgrade \
  && apk add openjdk11
COPY package.json .
RUN npm install --only=production
COPY --from=build /app/.env ./.env
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.mjs .
COPY --from=build /app/apktool ./apktool
RUN mkdir decompiled
RUN mkdir apks
EXPOSE 3000

CMD ["npm", "start"]

