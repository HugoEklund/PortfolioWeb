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
RUN chmod -R +x node_modules/.bin/

# --- START NYA DIAGNOSTISKA STEG ---
# 1. Kontrollera appusers PATH
RUN echo "DEBUG: appuser PATH: $PATH"

# 2. Kontrollera behörigheter och typ av 'vite'-exekveringsfilen i node_modules/.bin
RUN ls -l node_modules/.bin/vite

# 3. Kontrollera vad 'vite' egentligen är (symlink, skript, binär)
RUN file node_modules/.bin/vite

# 4. Om 'vite' är en symlink, kontrollera behörigheterna för dess målfil.
#    Vanlig sökväg är ../vite/bin/vite.js, men kan variera.
RUN ls -l node_modules/vite/bin/vite.js || true # Körs även om sökvägen är annorlunda, för att inte stoppa bygget

# 5. Försök att köra 'node' och 'npm' direkt för att bekräfta att de hittas och är körbara
RUN node -v
RUN npm -v

# 6. Försök att köra 'vite' direkt med den fullständiga sökvägen via 'node' (om det är ett JS-skript)
#    Detta kringgår PATH-problem för 'vite' och säkerställer att 'node' hittas.
RUN /usr/local/bin/node node_modules/.bin/vite build || true # Använd || true för att inte stoppa bygget vid detta test
# --- SLUT NYA DIAGNOSTISKA STEG ---

RUN npm run build