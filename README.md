# NodeContact

School project

### Prerequisites

You need NodeJs, NPM and a database with name : "node_contactdb"

```
sudo apt-get update
sudo apt-get install nodejs npm
```

### Database
```
CREATE DATABASE node_contactdb
USE node_contactdb

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `rue` varchar(50) DEFAULT NULL,
  `cp` varchar(50) DEFAULT NULL,
  `ville` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

```

### Installing

Just install modules

```
npm install
```

## Running server

Start server now !

```
node ./bin/www
```

Now you can go to : http://localhost:3000/

## Authors

* **Ahkrin Sebastien** - *Initial work* - For my school
