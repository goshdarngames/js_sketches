#!/usr/bin/env python3

import os
import re

print ( "Generating index..." )

def mk_sketch_list_item ( sketch_name ):

    item = "<li>"
    item += "<a href='"
    item += os.path.join ( "sketches", sketch_name, "index.html" )
    item += "'>"+sketch_name+"</a>"
    item += "\n"
    item += "</li>"

    return item

def mk_sketch_list ():

    out = "<ul>"

    for d in sorted ( os.listdir ( 'sketches' ), reverse=True ):

        out += mk_sketch_list_item ( d )

    out += "</ul>"

    return out

out_buffer = []

with open ( "index/index.html" ) as source_file:

    for cnt, line in enumerate ( source_file ):

        if ( re.match ( ".*<!--SKETCHES-->", line ) ):

            out_buffer.append ( mk_sketch_list () )

        else:

            out_buffer.append ( line )


with open ( "index.html", 'w' ) as out_file:

    for line in out_buffer:

        out_file.write ( line )
