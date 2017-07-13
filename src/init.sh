#/bin/sh

## Get this file full path
typeset -r __SCRIPTNAME="${0##*/}"
__SCRIPTDIR="${0%/*}"
__REAL_SCRIPTDIR=$( cd -P -- "$(dirname -- "$(command -v -- "$0")")" && pwd -P )

echo $__REAL_SCRIPTDIR


## create the master node_modules
## src/node_modules
if ! [ -d "node_modules" ]; then
  mkdir node_modules
fi

## check arc/node_modules symlink exists
cd arc
if ! [ -L "node_modules" ]; then
  ln -s ../node_modules node_modules
fi

cd ../middleware
if ! [ -L "node_modules" ]; then
 ln -s ../node_modules node_modules
fi

cd ../theme
if ! [ -L "node_modules" ]; then
  ln -s ../node_modules node_modules
fi

