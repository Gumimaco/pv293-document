# MULTISTAGE BUILD -> MALY IMAGE
# RYCHLO NAKOPIROVAL
# LOAD MASINA NASKOCILA CO NAJRYCHLEJSIE AK MAM SCALING!!

# ALPINE -> potreba C libky -> toto je small image
FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# vsetko od seba tam nakopirujem a pridam turbo globalny prikaz
# turbo prune --scope vymaze vsetko okrem toho co je vo scopu
FROM base AS builder
WORKDIR /app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm add turbo --global
COPY . .
RUN turbo prune --scope=api --docker

# nakopiruje subory a nainstaluje zavyslosti
# toto je cache --mount=type=cache,id=pnpm,target=/pnpm/store aby tie prikazy bezali rychlejsie!!
# bude fungovat aj bez toho len pomalsie o kusok
FROM base AS installer
WORKDIR /app
RUN SHELL=bash pnpm setup
COPY .gitignore .gitignore
COPY --from=builder /app/out/json .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile


# Klasicky build
COPY --from=builder /app/out/full .
COPY turbo.json turbo.json
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm exec turbo run build --filter=api

# PNPM Linky na node modules -> do vyslednej veci sa vymazu a hard nakopiruju do apky DOLEZITE
FROM installer as deployer
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm --filter=api --prod deploy apps/api



#
FROM base AS runner
WORKDIR /app

# POD USEROM
RUN addgroup --system --gid 1001 nest
RUN adduser --system --uid 1001 nest

COPY --from=deployer --chown=nest:nest /app/apps/api/node_modules ./node_modules
COPY --from=installer --chown=nest:nest /app/apps/api/dist ./dist

USER nest

CMD node /app/dist/main.js
