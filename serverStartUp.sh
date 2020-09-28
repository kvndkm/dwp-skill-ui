#!/bin/bash
npm install
echo "Input the server port"
read PORT
PORT=`echo $PORT`
export PORT 
echo "Server PORT; $PORT"
HOST=`hostname -f`
export HOST
echo "HOST: $HOST"
react-scripts start



