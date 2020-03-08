docker build -t zeferinix/ryza-pw-finder-api:latest .
docker push zeferinix/ryza-pw-finder-api:latest
ssh root@66.42.56.111 "docker pull zeferinix/ryza-pw-finder-api:latest && docker tag zeferinix/ryza-pw-finder-api:latest dokku/api-ryza-pw-finder.zeferinix.com:latest && dokku tags:deploy api-ryza-pw-finder.zeferinix.com latest"
