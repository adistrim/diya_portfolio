# Portfolio

Preview (still in development): [diyamth](https://diyamth.vercel.app/)

## Docker

```bash
docker build -t diyamth_portfolio .
```
_builds the docker image_

```bash
docker run -p 3000:3000 -e mongoUrl=[REPLACE_WITH_MONGODB_URL] -d diyamth_portfolio
```
_runs the docker container in detached mode_

```bash
docker stop [CONTAINER_ID]
```
_stops the container_

```bash
docker exec -it [CONTAINER_ID] /bin/sh
```
_executes a shell in the container_


## License

Licensed under the [MIT License](LICENSE)
