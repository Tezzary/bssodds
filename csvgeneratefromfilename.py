import os
#os.mkdir("beenames.csv")
for filename in os.listdir("static/beeimages"):
    open("beenames.txt", "a").write('<button onClick={() => props.callback("' + filename + '")}><img src="http://localhost:8000/static/beeimages/' + filename + '"></img></button>\n')