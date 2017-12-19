#!/bin/bash

if [ -n "$1" ]; then
  exec npm run $1
else
  exec npm run
fi

[ $? -eq 0 ] || exit $?
