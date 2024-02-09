#!/bin/sh

node ./dist/infrastracture/db/migrations.js

exec "$@"