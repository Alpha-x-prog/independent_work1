# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Шаги для запуска проекта:
1) Клонируйте репозиторий с GitHub:
   ```bash
  git clone https://github.com/Alpha-x-prog/independent_work1.git
3) Перейдите в директорию проекта: После клонирования репозитория, перейдите в его папку:
  ```bash
  cd my-shop
4) Установите зависимости: Убедитесь, что у вас установлен Node.js и npm. Если они не установлены, скачайте их с официального сайта: Node.js.
  Затем установите зависимости проекта, запустив команду:
   ```bash
  npm install
5) Запустите JSON-сервер: Команда json-server используется для запуска фейкового REST API, который будет читать данные из файла public/data.json.
  Для запуска JSON-сервера выполните команду:
  ```bash
  json-server --watch public/data.json --port 3001
6) Запустите ваш проект: После того как JSON-сервер запустится, вы можете запустить сам проект. Обычно для этого используется команда, прописанная в package.json:
   ```bash
  npm run dev
7) Проверьте проект в браузере: После того как сервер разработки запустится, откройте ваш браузер и перейдите по адресу, указанному в консоли (чаще всего это http://localhost:3000).

