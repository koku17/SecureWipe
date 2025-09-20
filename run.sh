#! /bin/sh
j=0
while [ $j -ne 100 ] ; do for i in {1..100} ; do echo blocks=$i hash=sha256 hasfile=/dev/null ; sleep 1 ; j=$i ; done ; done
