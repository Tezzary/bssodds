import os
#os.mkdir("beenames.csv")
for filename in os.listdir("static/beeimages"):
    open("beenames.txt", "a").write(f'<button><img src="http://localhost:8000/static/beeimages/{filename}"></img></button>\n')