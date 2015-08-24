# Natural Language Toolkit: Eliza
#
# Copyright (C) 2001-2015 NLTK Project
# Authors: Steven Bird <stevenbird1@gmail.com>
#          Edward Loper <edloper@gmail.com>
# URL: <http://nltk.org/>
# For license information, see LICENSE.TXT

# Based on an Eliza implementation by Joe Strout <joe@strout.net>,
# Jeff Epler <jepler@inetnebr.com> and Jez Higgins <mailto:jez@jezuk.co.uk>.

# a translation table used to convert things you say into things the
# computer says back, e.g. "I am" --> "you are"

from __future__ import print_function
from nltk.chat.util import Chat, reflections

# a table of response pairs, where each pair consists of a
# regular expression, and a list of possible responses,
# with group-macros labelled as %1, %2.

pairs = (
  
  (r'(.*)gear(.*)',
  ( "GEAR stands for Government Enhanced Administrative Resource.",
    "GEAR stands for Government Enhanced Administrative Resource.",
    "GEAR stands for Government Enhanced Administrative Resource.")),

  (r'What does gear do?',
  ( "GEAR automates complaint handling relating to public issues. ",
    "GearSystems aim at impacting a town to a nation. GearSystem shall inculcate civic sense in the citizens of the nation in an innovative way.",
    "GearSystems aim at impacting a town to a nation. GearSystem shall inculcate civic sense in the citizens of the nation in an innovative way.")),
  (r'(.*)complaint(.*)',
  ( "You can lodge a complaint here or tweet us @gearsystems",
    "You can tell me your complaint here or tweet @gearsystems. What and where is the problem? (for eg: Broken Road at NIT-W) ",
    "You can tell me your complaint here or tweet @gearsystems. What and where is the problem? (for eg: Broken Road at NIT-W)")),
  (r'What is gear?',
  ( "GEAR stands for Government Enhanced Administrative Resource.",
    "GEAR stands for Government Enhanced Administrative Resource.",
    "GEAR stands for Government Enhanced Administrative Resource.")),

  (r'What does gear do?',
  ( "GEAR automates complaint handling relating to public issues. ",
    "GearSystems aim at impacting a town to a nation. GearSystem shall inculcate civic sense in the citizens of the nation in an innovative way.",
    "GearSystems aim at impacting a town to a nation. GearSystem shall inculcate civic sense in the citizens of the nation in an innovative way.")),

  (r'(.*)problem(.*)',
  ( "You can lodge a complaint here or tweet us @gearsystems",
    "You can tell me your complaint here or tweet @gearsystems. What and where is the problem? (for eg: Broken Road at NIT-W) ",
    "You can tell me your complaint here or tweet @gearsystems. What and where is the problem? (for eg: Broken Road at NIT-W)")),
  (r'(.*)creator(.*)',
  ( "Sorry I cannot reveal that to you.",
    "Sorry I cannot reveal that to you.",
    "Sorry I do not have an answer")),
  (r'(.*)details(.*)',
  ( "Sorry I cannot reveal that to you.",
    "Sorry I cannot reveal that to you.",
    "Sorry I do not have an answer")),

  (r'(.*)',
  ( "Please tell me more.",
    "Let's change focus a bit... Tell me about your family.",
    "Can you elaborate on that?",
    "Why do you say that %1?",
    "I see.",
    "Very interesting.",
    "%1.",
    "I see.  And what does that tell you?",
    "How does that make you feel?",
    "How do you feel when you say that?"))
)

gear_chatbot = Chat(pairs, reflections)


def gear_chat():
    print("GEAR Systems\n---------")
    print("Talk to the GEAR Bot by typing in plain English, using normal upper-")
    print('and lower-case letters and punctuation.  Enter "quit" when done.')
    print('='*72)
    print("Hello, I'm GEARBot.  How may I help you?")

    gear_chatbot.converse()


def demo():
    gear_chat()

if __name__ == "__main__":
    demo()