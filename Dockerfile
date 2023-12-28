ARG NODE_TAG=20.10.0-alpine3.18

# Base image
FROM node:${NODE_TAG} as base_image

#####
## Build stage
#####
FROM base_image AS BuildStage

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build



#####
## Prune
#####
FROM base_image AS PruneStage

RUN apk add curl
RUN curl -sSf https://gobinaries.com/tj/node-prune | sh

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --prod --frozen-lockfile

RUN node-prune


#####
## Run app
#####
FROM base_image AS RunningState

USER node

WORKDIR /app

COPY --from=PruneStage /app/node_modules ./node_modules
COPY --from=BuildStage /app/dist ./dist

EXPOSE 3000

CMD [ "node", "dist/server/main.js" ]