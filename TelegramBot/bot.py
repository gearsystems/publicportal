import logging
import telegram
from token import TOKEN


LAST_UPDATE_ID = None
ans_stage = 0


def main():
    global LAST_UPDATE_ID

    logging.basicConfig(
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')

    # Telegram Bot Authorization Token
    bot = telegram.Bot(TOKEN)

    # This will be our global variable to keep the latest update_id when requesting
    # for updates. It starts with the latest update_id if available.
    try:
        LAST_UPDATE_ID = bot.getUpdates()[-1].update_id
    except IndexError:
        LAST_UPDATE_ID = None

    while True:
        echo(bot)


def echo(bot):
    global LAST_UPDATE_ID
    global ans_stage

    # Request updates after the last updated_id
    for update in bot.getUpdates(offset=LAST_UPDATE_ID, timeout=10):
        # chat_id is required to reply any message
        chat_id = update.message.chat_id
        message = update.message.text.encode('utf-8')
        tempSplit = message.split(' ')[1:]
        Str = ''
        for i in tempSplit:
            Str += i + ' '
        command = message.split(' ')[0]

        if command == '/reverse':
            message = Str[::-1]

        if command == '/start':
            custom_keyboard = [[ telegram.Emoji.THUMBS_UP_SIGN, telegram.Emoji.THUMBS_DOWN_SIGN ]]
            reply_markup = telegram.ReplyKeyboardMarkup(custom_keyboard)
            bot.sendMessage(chat_id=chat_id, text="You want to register a complaint?", reply_markup = reply_markup)
            LAST_UPDATE_ID = update.update_id + 1
            ans_stage = 1
            continue

        print str(chat_id) + ' :: ' + message

        if message:
            if ans_stage == 1:
                # Reply the message
                # if message == 'yes':
                #     bot.sendMessage(chat_id=chat_id, text="Okay")
                # else:
                #     bot.sendMessage(chat_id=chat_id, text="Thanks for your interest")
                # bot.sendMessage(chat_id=chat_id,
                #                 text=message)
                if message == telegram.Emoji.THUMBS_UP_SIGN:
                    bot.sendMessage(chat_id=chat_id, text="Choose Category.\n1.Pothole\n2.Sewage Problem.", reply_markup = telegram.ReplyKeyboardHide())
                    ans_stage += 1
                elif message == telegram.Emoji.THUMBS_DOWN_SIGN:
                    bot.sendMessage(chat_id=chat_id, text="Thanks for your interest.\n Type /start to start over.", reply_markup = telegram.ReplyKeyboardHide())
                else:
                    custom_keyboard = [[ telegram.Emoji.THUMBS_UP_SIGN, telegram.Emoji.THUMBS_DOWN_SIGN ]]
                    reply_markup = telegram.ReplyKeyboardMarkup(custom_keyboard)
                    bot.sendMessage(chat_id=chat_id, text="Oops, wrong input. Try again.", reply_markup = reply_markup)

            elif ans_stage == 2:
                if int(message) < 1 or int(message) > 2:
                    bot.sendMessage(chat_id=chat_id, text="Oops, wrong input. Try again.")
                else:
                    #add the category in database
                    custom_keyboard = [[ telegram.Emoji.THUMBS_UP_SIGN, telegram.Emoji.THUMBS_DOWN_SIGN ]]
                    reply_markup = telegram.ReplyKeyboardMarkup(custom_keyboard)
                    bot.sendMessage(chat_id=chat_id, text="Do want to be anonymous?", reply_markup = reply_markup)
                    ans_stage += 1
                # LAST_UPDATE_ID = update.update_id + 1
            elif ans_stage == 3:
                if not(message == telegram.Emoji.THUMBS_UP_SIGN or message == telegram.Emoji.THUMBS_DOWN_SIGN):
                    custom_keyboard = [[ telegram.Emoji.THUMBS_UP_SIGN, telegram.Emoji.THUMBS_DOWN_SIGN ]]
                    reply_markup = telegram.ReplyKeyboardMarkup(custom_keyboard)
                    bot.sendMessage(chat_id=chat_id, text="Oops, wrong input. Try again.", reply_markup = reply_markup)
                #add the anonymity in the databse here
                bot.sendMessage(chat_id=chat_id, text="Attach a photo.", reply_markup = telegram.ReplyKeyboardHide())
                ans_stage += 1
                # LAST_UPDATE_ID = update.update_id + 1
            elif ans_stage == 4:
                #add the photo in the database
                bot.sendMessage(chat_id=chat_id, text="Write comment(optional). Please reply 'No' if not interested")
                ans_stage += 1
                # LAST_UPDATE_ID = update.update_id + 1

            elif ans_stage == 5:
                #add the comment in the database
                bot.sendMessage(chat_id=chat_id, text="Please send us the location so that we could detect it.")
                ans_stage += 1
                # LAST_UPDATE_ID = update.update_id + 1

            elif ans_stage == 6:
                #add the location in the database
                bot.sendMessage(chat_id=chat_id, text="Thanks for your co-operation. Have a nice day.")
                ans_stage += 1

        # Updates global offset to get the new updates
        LAST_UPDATE_ID = update.update_id + 1

            


if __name__ == '__main__':
    main()