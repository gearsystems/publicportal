import telegram

L = telegram.Emoji()
listOfEmojis = dir(L)

EMOJISLIST = []
for i in listOfEmojis:
	EMOJISLIST.append(i)

for x in EMOJISLIST:
	print x
