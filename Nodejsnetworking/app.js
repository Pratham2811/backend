import dgram from "node:dgram" //User datagram protocol
import net from "node:net" //TCP protocol;
import http from "node:http"
import https from "node:https"
import dns from "node:dns"

import os from"node:os"
const netwrkIterface=os.networkInterfaces()
console.log(netwrkIterface);

