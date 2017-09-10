##usage
```js
const setupDatabase = require('hackdb')

setupDatabase(config).then(db =>{
    const {Agent, Metric} = db
})

. catch(err =>{
    console.log(err)
})

```

# hackdb

##Install Postgresql9.6 Centos 7
```bash
* Descarga el paquete de instalacion de Postgresql
yum install https://download.postgresql.org/pub/repos/yum/9.6/redhat/rhel-7-x86_64/pgdg-centos96-9.6-3.noarch.rpm

* yum install postgresql96*

* /usr/pgsql-9.6/bin/postgresql96-setup initdb
  systemctl enable postgresql-9.6
  systemctl start postgresql-9.6
* por defecto postgresql solo escucha en local host
  por lo tanto vamos a:

  /var/lib/pgsql/9.6/data/postgresql.conf

  y editamos

  listen_addresses = 'localhost' y lo cambio por
  listen_addresses = '*'

  y 

  /var/lib/pgsql/9.6/data/pg_hba.conf

  host    all             all              0.0.0.0/0                       md5
  host    all             all              ::/0                            md5


* psql postgres
  CREATEROLE hackchan WITH LOGIN PASSWORD'hackchan';
  CREATEDATABASE hackdb;
  GRANT ALL PRIVILEGES ON hackdb TO hackchan;
  GRANT ALL PRIVILEGESONDATABASE hackdb TO hackchan;

* select * from agents;
  select * from metrics ;
  insert into agents values(1,'proceso','hackchan','fabio rojas','192.168.18.5',1212,
                           true,now(),now());

  insert into metrics values(1,'web','testo dinamico',now(),now(),1);
```
##Instalacion de Redis 4.0
```sh
 * descargamos la version 4.0 
   https://github.com/antirez/redis/tree/4.0

 * unzip 4.0.zip

 * cd redis-4.0

 * make distclean

 * make

 * make test

 * make install

 * cd utils

 * ./install_server.sh

 * systemctl start redis_6379

 * systemctl status redis_6379
 ```
 ##Generar llave publica y compartirla con nuestro   servidores propios/DigitalOcean/Github
```
* genero llaver publica
  ssh-keygen -t rsa -b 4096 -C fabiorojas7@gmail.com
* comparto la llave publica con el servidor, esto hace que  
  la adicione en authorized_keys
  ssh-copy-id usuario@servidor
* el .pub generado lo agregamos en settings / SSH and GPG     keys y damos click   en new SSH key.
  cuando bloqueamos un usuario por intentar un maximo de intentos permitidos:
  ssh -o IdentitiesOnly=yes -i id_rsa root@ip

```
##Query Sequelize

```js
connection.sync({
  loggin: console.log,
  force: true
})

Article.findById(5).then(function(article){
  console.log(article)
})
    

```

##Comandos de Postgresql

```js
Lista de comandos 2
```