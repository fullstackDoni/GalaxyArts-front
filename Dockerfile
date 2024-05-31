# Используем базовый образ с Node.js и Angular CLI
FROM node:14 as build-stage

# Устанавливаем Angular CLI
RUN npm install -g @angular/cli

# Копируем и устанавливаем зависимости
WORKDIR /app
COPY package*.json ./
RUN npm install

# Копируем исходный код и собираем приложение
COPY . .
RUN ng build --prod

# Используем простой HTTP-сервер для запуска приложения
FROM nginx:alpine
COPY --from=build-stage /app/dist/myapp /usr/share/nginx/html
