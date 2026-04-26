# TP2 — Node.js Docker

Application web Node.js/Express conteneurisée avec Docker.

## Fonctionnalités

- Page HTML d'accueil
- Route API `/api/message`
- Route `/about`

---

## Prérequis

- [Node.js](https://nodejs.org/) v18+
- [Docker](https://www.docker.com/) (optionnel)

---

## Lancer sans Docker

```bash
npm install
npm start
```

Ouvrir ensuite [http://localhost:3000](http://localhost:3000).

---

## Lancer avec Docker

**1. Construire l'image :**

```bash
docker build -t tp2-docker .
```

**2. Démarrer le conteneur :**

```bash
docker run -p 3000:3000 tp2-docker
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000).

---

## Port

| Port | Usage |
|------|-------|
| 3000 | Serveur HTTP |

---

## Liens

- **GitHub** → [Tiger1804z/tp2-docker-node](https://github.com/Tiger1804z/-tp2-docker-node)
- **Docker Hub** → [tigerz1804/tp2-docker](https://hub.docker.com/r/tigerz1804/tp2-docker)

---

## Objectifs du TP

- [x] Application Node.js fonctionnelle
- [x] Serveur Express
- [x] Exposition d'un port
- [x] Dockerfile fonctionnel et optimisé
- [x] Image publiée sur Docker Hub
- [x] Projet structuré sur GitHub
