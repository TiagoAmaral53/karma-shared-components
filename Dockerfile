# As the stage is called deps for dependencies, in this stage the npm modules are installed next.
FROM node:18.20.0-alpine3.19

RUN apk add --no-cache libc6-compat
RUN apk update && apk upgrade
RUN apk add --no-cache sqlite
RUN apk add --no-cache curl
RUN apk add --no-cache git
RUN apk add --no-cache openssh openssl
RUN apk add --no-cache python3 py3-pip make g++ binutils bash
RUN apk add --no-cache xdg-utils

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build:storybook

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1


RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN chown -R nextjs:nodejs /app/storybook-static
RUN chmod 755 /app/storybook-static

RUN mkdir .cache
RUN chown -R nextjs:nodejs /app/.cache
RUN chmod 755 /app/.cache

RUN chown -R nextjs:nodejs /app/storybook-static
RUN chmod 755 /app/storybook-static

USER nextjs