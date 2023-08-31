module.exports = {
  apps : [{
    name   : "server1",
    script : "./index.js",
    watch: true,
    autostart: true,
    args: "8082",
    instances: 1
  },
  {
    name   : "server-master",
    script : "./index.js",
    watch: true,
    autostart: true,
    args: "8080",
    instances: 1
  },
  {
    name   : "server2",
    script : "./index.js",
    watch: true,
    autostart: true,
    args: "8083",
    instances: 1
  },
  {
    name   : "server3",
    script : "./index.js",
    watch: true,
    autostart: true,
    args: "8084",
    instances: 1
  },
  {
    name   : "server4",
    script : "./index.js",
    watch: true,
    autostart: true,
    args: "8085",
    instances: 1
  },
]
}
