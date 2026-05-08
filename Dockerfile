# ==========================================
# Stage 1: Build
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar apenas os arquivos de dependências primeiro (melhor cache)
COPY package*.json ./

# Instalar dependências (inclui devDependencies necessárias para build)
RUN npm ci

# Copiar o restante do código
COPY . .

# Build de produção
RUN npm run build

# ==========================================
# Stage 2: Produção
# ==========================================
FROM node:20-alpine AS runner

WORKDIR /app

# Instalar um servidor estático leve para produção
RUN npm install -g serve

# Copiar apenas os arquivos buildados do stage anterior
COPY --from=builder /app/dist ./dist

# Criar usuário não-root para segurança
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Ajustar permissões
RUN chown -R nodejs:nodejs /app/dist
USER nodejs

# Expor a porta que o EasyPanel vai mapear
EXPOSE 3000

# Healthcheck para o EasyPanel monitorar o container
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => r.statusCode === 200 ? process.exit(0) : process.exit(1)).on('error', () => process.exit(1))"

# Servir os arquivos estáticos na porta 3000
CMD ["serve", "dist", "-l", "3000", "--single"]
