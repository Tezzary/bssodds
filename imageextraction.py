from PIL import Image
from time import sleep
im = Image.open('AllBees.png')
print(7 + 3 * 1 + 126 * 1)
for i in range(0, 7):
    for j in range(0, 7):
        im = Image.open('AllBees.png')
        im.crop((6 + 3 * i + 126 * i, 5 + 3 * j + 126 * j, 6 + 3 * i + 126 * i + 126, 5 + 3 * j + 126 * j + 126)).save(f'{i}{j}.png', quality=100)
        im.close()