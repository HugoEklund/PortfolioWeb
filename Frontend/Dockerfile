FROM node:24-alpine AS builder

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

RUN chown appuser:appgroup /app

COPY Frontend/package.json Frontend/package-lock.json ./
RUN chown appuser:appgroup package.json package-lock.json

USER appuser
RUN npm install --frozen-lockfile

USER root
COPY Frontend/. .
COPY README.md ./README.md
RUN chown -R appuser:appgroup .

USER appuser
# Säkerställer exekveringsrättigheter för den faktiska vite.js-skriptfilen
RUN chmod +x node_modules/vite/bin/vite.js # <--- NY RAD!

# Behåll denna också, bara för säkerhets skull, även om den primära symlinken redan hade rwx
RUN chmod -R +x node_modules/.bin/


# --- START DIAGNOSTISKA STEG (uppdaterade) ---
# 1. Kontrollera appusers PATH
RUN echo "DEBUG: appuser PATH: $PATH"

# 2. Kontrollera behörigheter och typ av 'vite' i node_modules/.bin
RUN ls -l node_modules/.bin/vite

# 3. Kontrollera behörigheterna för målfilen som 'vite' symlänken pekar på
RUN ls -l node_modules/vite/bin/vite.js # <--- KONTROLLERAR DENNA NU DIREKT

# 4. Försäkra att 'node' och 'npm' är körbara och i PATH för appuser
RUN node -v
RUN npm -v

# 5. Försök att köra 'vite' direkt med den fullständiga sökvägen OCH explicit 'node'-tolken
RUN /usr/local/bin/node node_modules/vite/bin/vite.js build || true
# --- SLUT DIAGNOSTISKA STEG ---

RUN npm run build